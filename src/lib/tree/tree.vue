<!-- wyf 2022-2-28 -->
<template>
  <a-tree
    :ref="treeRef"
    v-model:expandedKeys="expandedKeys1"
    v-model:selectedKeys="selectedKeys1"
    v-model:checkedKeys="checkedKeys1"
    class="z-tree"
    :checkable="checkable"
    :tree-data="formateTree"
    :field-names="fieldNames1"
    :auto-expand-parent="autoExpandParent"
    :check-strictly="checkStrictly"
    :block-node="blockNode"
    :draggable="draggable"
    :default-expand-all="defaultExpandAll"
    :disabled="disabled"
    :filter-tree-node="filterTreeNode"
    :load-data="loadData"
    :loaded-keys="loadedKeys"
    :multiple="multiple"
    :selectable="selectable"
    :show-icon="showIcon"
    :show-line="showLine"
    :virtual="virtual"
  >
    <template #title="{ editFlag, title, editText, key, data, addable, editable, deleteable, parentKey }">
      <div class="z-tree-node flexDiv flexB">
        <template v-if="editFlag">
          <z-input :value="editText" @input="e => {editTitle(data,e)}">
            <template #suffix>
              <check-outlined @click="complateEdit(data)" />
              <close-outlined @click="cancleEdit(data)" />
            </template>
          </z-input>
        </template>
        <template v-else>
          <template v-if="$slots.title">
            <slot :key="key" name="title" :title="title" />
          </template>
          <template v-else>
            <span class="z-tree-title">{{ title }}</span>
          </template>
          <div class="z-tree-icon">
            <template v-if="$slots.operateArea">
              <slot :key="key" name="operateArea" :node="data" :parentKey="parentKey" />
            </template>
            <template v-else>
              <edit-outlined v-if="editable" @click="editNode(data)" />
              <plus-outlined v-if="addable" @click="addNode(data)" />
              <minus-outlined v-if="deleteable" @click="deleteNode(data, parentKey)" />
            </template>
          </div>
        </template>
      </div>
    </template>
    <template v-if="$slots.switcherIcon" #switcherIcon>
      <slot name="switcherIcon" />
    </template>
  </a-tree>
</template>

<script>
import { defineComponent } from 'vue'
import { message, Tree } from 'ant-design-vue'
export default defineComponent({
  name: 'ZTree',
  components: {
    'ATree': Tree
  },
  props: {
    isAdd: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    isDelete: {
      type: Boolean,
      default: false
    },
    treeRef: {
      type: String,
      default: 'tree'
    },
    expandedKeys: {
      type: Array,
      default: undefined
    },
    selectedKeys: {
      type: Array,
      default: undefined
    },
    checkedKeys: {
      type: Array,
      default: undefined
    },
    treeData: {
      type: Array,
      default: undefined
    },
    checkable: {
      type: Boolean,
      default: false
    },
    fieldNames: {
      type: Object,
      default() {
        return { children: 'children', title: 'title', key: 'key' }
      }
    },
    autoExpandParent: {
      type: Boolean,
      default: false
    },
    checkStrictly: {
      type: Boolean,
      default: false
    },
    blockNode: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    filterTreeNode: {
      type: Function,
      default: undefined
    },
    loadData: {
      type: Function,
      default: undefined
    },
    loadedKeys: {
      type: Array,
      default() {
        return []
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: true
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    showLine: {
      type: Boolean,
      default: false
    },
    virtual: {
      type: Boolean,
      default: true
    },
    beforeDeleteNode: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      formateTree: []
    }
  },
  computed: {
    fieldNames1: {
      get() {
        return { children: 'children', title: 'title', key: 'key', ...this.fieldNames }
      }
    },
    expandedKeys1: {
      get() {
        return this.expandedKeys
      },
      set(val) {
        this.$emit('update:expandedKeys', val)
      }
    },
    selectedKeys1: {
      get() {
        return this.selectedKeys
      },
      set(val) {
        this.$emit('update:selectedKeys', val)
      }
    },
    checkedKeys1: {
      get() {
        return this.checkedKeys
      },
      set(val) {
        this.$emit('update:checkedKeys', val)
      }
    }
  },
  watch: {
    treeData(newdata) {
      this.formateTree = this.formateTreeData(newdata)
    }
  },
  created() {
    this.formateTree = this.formateTreeData(this.treeData)
  },
  methods: {
    addNode(node) {
      const { children, title, key } = this.fieldNames1
      // const childrenData = node[children]
      const keyVal = `${node[key]}-${new Date().getTime()}`
      const newNode = {
        editFlag: true,
        title: '',
        children: [],
        editText: '',
        key: keyVal,
        firstAdd: true,
        addable: true,
        editable: !!this.isEdit,
        deleteable: !!this.isDelete,
        parentKey: node[key],
        [title]: '',
        [key]: keyVal,
        [children]: []
      }
      node[children].unshift(newNode)
      if (this.expandedKeys1) {
        this.expandedKeys1.push(node[key])
        this.$emit('update:expandedKeys', this.expandedKeys1)
      }
      this.formateTree = this.rebuildTreeData(this.formateTree, node)
      this.$emit('addNode', node)
    },
    editNode(node) { // 点击编辑按钮触发  显示编辑框
      const { key } = this.fieldNames1
      node.editFlag = true
      this.nodeKey = node[key]
      this.formateTree = this.rebuildTreeData(this.formateTree, node)
      this.$emit('editNode', node) // 传递点击事件至组件外部
    },
    deleteNode(node, parentKey) {
      if (!this.beforeDeleteNode) {
        return this.delete(node, parentKey)
      }
      const beforeDeleteNode = this.beforeDeleteNode(node, parentKey)
      if (beforeDeleteNode && beforeDeleteNode.then) {
        beforeDeleteNode.then(() => {
          this.delete(node, parentKey)
        })
      }
    },
    delete(node, parentKey) {
      const { key } = this.fieldNames1
      if (parentKey === null) {
        const targetIndex = this.formateTree.findIndex(item => item[key] === node[key])
        this.formateTree.splice(targetIndex, 1)
      } else {
        this.formateTree = this.deleteTreeNode(this.formateTree, parentKey, node[key])
      }
      this.$emit('deleteNode', node)
    },
    editTitle(node, e) { // 编辑框输入触发  同步变更输入框显示值
      this.formateTree = this.rebuildTreeData(this.formateTree, { ...node, editText: e.target.value })
    },
    complateEdit(node) { // 编辑状态 点击完成按钮触发 回填数据
      const { title } = this.fieldNames1
      if (node['editText'].length === 0) { // 首次添加且未添加任何内容 直接删除
        if (node.firstAdd) {
          const { parentKey, key } = node
          this.formateTree = this.deleteTreeNode(this.formateTree, parentKey, key)
        } else {
          message.warning('填写内容不可为空')
        }
      } else {
        node.editFlag = false
        node.firstAdd = false
        // 同时修改显示值与原始值
        node[title] = node.editText
        node['title'] = node.editText
        this.formateTree = this.rebuildTreeData(this.formateTree, node)
        this.$emit('complateEdit', node, this.formateTree)
      }
    },
    cancleEdit(node) { // 编辑状态 点击取消按钮触发 回填数据
      const { title } = this.fieldNames1
      if (node.firstAdd && node[title].length === 0) { // 首次添加且未添加任何内容 直接删除
        const { parentKey, key } = node
        this.formateTree = this.deleteTreeNode(this.formateTree, parentKey, key)
      } else {
        // 同时修改显示值与原始值
        node.editFlag = false
        node.firstAdd = false
        node['editText'] = node[title]
        this.formateTree = this.rebuildTreeData(this.formateTree, node)
        this.$emit('cancleEdit', node, this.formateTree)
      }
    },
    /**
     * @description: 数据格式化  根据字段重新赋值  并回填数据
     * @param {*} treeData type: Array<treenode> 递归对象，树节点数据
     * @param {*} parentKey type: String 父节点key
     * @return {*} 返回处理后的节点数据treeData type: Array<treenode>
     */
    formateTreeData(treeData, parentKey = null) { // treeData数据格式化， 重新编辑数据，添加相关处理操作，
      const newTree = [].concat(treeData) // 深拷贝节点
      for (let index = 0; index < newTree.length; index++) {
        let element = newTree[index]
        const { children, title, key } = this.fieldNames1 // 取出自定义字段
        const childrenData = element[children] || [] // 如果没有子集，添加空值
        const titleTxt = element[title]
        const keyTxt = element[key] || `${parentKey === null ? `${index}` : `${parentKey}-${index}`}`
        /**
         * @description: 根据条件判断是否开启编辑、删除、新增ICON 可通过treeData赋值传入进行个性化编辑
         * @param {*} isEdit type: Boolen 全局传入，当值为ture时 开启所有行编辑功能 可被单独传入的editable覆盖
         * @param {*} isAdd type: Boolen 全局传入，当值为ture时 开启新增功能 可被单独传入的editable覆盖
         * @param {*} isDelete type: Boolen 全局传入，当值为ture时 开启删除功能 deleteable
         */
        newTree[index] = { parentKey, editFlag: false, title: titleTxt, children: childrenData, editText: titleTxt, key: keyTxt, editable: !!this.isEdit, addable: !!this.isAdd, deleteable: !!this.isDelete, ...element }
        if (childrenData && childrenData.length > 0) {
          newTree[index][children] = this.formateTreeData(childrenData, keyTxt)
        }
      }
      return newTree
    },
    /**
     * @description: 重组数据  根据targetData数据变更对应节点数据  并回填数据
     * @param {*} treeData type: Array<treenode> 递归对象，树节点数据
     * @param {*} targetData type: Object<treenode> 目标节点
     * @return {*} 返回处理后的节点数据treeData type: Array<treenode>
     */
    rebuildTreeData(treeData, targetData) {
      const newTree = [].concat(treeData) // 深拷贝 避免直接操作原数据
      for (let index = 0; index < newTree.length; index++) {
        let element = newTree[index]
        const { children, key } = this.fieldNames1
        const childrenData = element[children]
        const keyTxt = element[key]
        if (keyTxt === targetData[key]) {
          newTree[index] = { ...element, ...targetData }
          break
        }
        if (childrenData && childrenData.length > 0) {
          newTree[index][children] = this.rebuildTreeData(childrenData, targetData)
        }
      }
      return newTree
    },
    /**
     * @description: 通过 parentKey 和 targetKey 确定要删除的节点，并进行删除
     * @param {*} treeData type:Array<treenode> 递归对象，树节点数据
     * @param {*} parentKey type: String 父节点key
     * @param {*} targetKey type: String 目标节点key
     * @return {*} 返回处理后的节点数据treeData type: Array<treenode>
     */
    deleteTreeNode(treeData, parentKey, targetKey) {
      const newTree = [].concat(treeData)
      const { children, key } = this.fieldNames1 // 取出自定义字段
      for (let index = 0; index < newTree.length; index++) {
        let element = newTree[index]
        let childrenData = element[children]
        if (parentKey && element[key] === parentKey) {
          const targetIndex = childrenData.findIndex(item => item[key] === targetKey)
          childrenData.splice(targetIndex, 1)
          break
        }
        if (new RegExp(parentKey).test(targetKey) && childrenData && childrenData.length > 0) {
          childrenData = this.deleteTreeNode(childrenData, parentKey, targetKey)
        }
      }
      return newTree
    }
    // check(checkedKeys, e) {
    //   this.$emit('check', checkedKeys, e)
    // },
    // dragend(e) {
    //   this.$emit('focus', e)
    // },
    // dragenter(e) {
    //   this.$emit('dragenter', e)
    // },
    // dragleave(e) {
    //   this.$emit('dragleave', e)
    // },
    // dragover(e) {
    //   this.$emit('dragover', e)
    // },
    // dragstart(e) {
    //   this.$emit('dragstart', e)
    // },
    // drop(e) {
    //   this.$emit('drop', e)
    // },
    // expand(expandedKeys, e) {
    //   this.$emit('expand', expandedKeys, e)
    // },
    // load(loadedKeys, e) {
    //   this.$emit('load', loadedKeys, e)
    // },
    // rightClick(e) {
    //   this.$emit('rightClick', e)
    // }
  }
})
</script>

<style lang="less">
@import url('./index.less');
</style>
