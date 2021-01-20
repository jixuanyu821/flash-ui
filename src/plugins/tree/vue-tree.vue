<template>
  <el-tree
    ref="tree"
    class="f-tree"
    :class="className"
    :data="treeData"
    :load="load"
    :lazy="lazy"
    :indent="14"
    :show-checkbox="showCheckbox"
    :node-key="nodeKey"
    :current-node-key="currentNodeKey"
    :default-expanded-keys="defaultExpended"
    :default-expand-all="defaultExpandAll"
    :expand-on-click-node="clickNodeExpand"
    highlight-current
    :check-on-click-node="checkOnClickNode"
    :props="props"
    :filter-node-method="filterNode"
    :check-strictly="checkStrictly"
    @check-change="checkChange"
    @node-click="nodeClick"
  >
    <span slot-scope="{ node, data }">
       {{data.editable}}
      <span class="node-label" v-if="editModel">
        <span v-if="!data.editable">{{ node.label }} {{data.editable}}</span>
        <el-input v-model="data.label" v-else></el-input>
      </span>
      <span
        class="node-label"
        v-else
        :class="{ 'is-disabled': node.disabled }"
        >{{ node.label }}</span
      >
      <div class="self-btns">
        <i
          v-show="editBtn"
          class="el-icon-edit-outline btn-item"
          @click.stop="() => editNode(node, data)"
        />
        <i
          v-show="addBtn"
          class="el-icon-plus btn-item"
          @click.stop="() => addNode(data, node)"
        />
        <i
          v-show="deleteBtn"
          class="el-icon-delete btn-item"
          @click.stop="() => deleteNode(node, data)"
        />
        <slot name="btn" :data="data" :node="node"></slot>
      </div>
    </span>
  </el-tree>
</template>
<script>
import { Tree } from 'element-ui'
import Vue from 'vue'
Vue.use(Tree)

export default {
  name: 'FTree',
  props: {
    className: {
      type: String,
      default: '',
    },
    treeData: {
      required: true,
      type: Array,
    },
    load: {
      type: Function,
      default: undefined,
    },
    nodeKey: {
      type: String,
      default: 'id',
    },
    props: {
      type: Object,
      default() {
        return {
          children: 'children',
          label: 'label',
        }
      },
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    clickNodeExpand: {
      type: Boolean,
      default: false,
    },
    checkOnClickNode: {
      type: Boolean,
      default: false,
    },
    defaultExpended: {
      type: Array,
      default() {
        return []
      },
    },
    defaultExpandAll: {
      type: Boolean,
      default: false,
    },
    currentNodeKey: {
      type: String,
      default: '0',
    },
    addBtn: {
      type: Boolean,
      default: false,
    },
    deleteBtn: {
      type: Boolean,
      default: false,
    },
    editBtn: {
      type: Boolean,
      default: false,
    },
    checkStrictly: {
      type: Boolean,
      default: false,
    },
    onlyChild: {
      // 是否开启只能选择子节点模式
      type: Boolean,
      default: false,
    },
    editModel: {
      // 编辑模式
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  watch: {
    treeData: function(val) {
      if (this.onlyChild) {
        this.treeData = this.onlyChildNode(val)
      }
      if (this.editModel) {
        this.treeData = this.editModelNode(val)
      }
    },
  },
  created() {
    if (this.onlyChild) {
      this.treeData = this.onlyChildNode(this.treeData)
    }
    if (this.editModel) {
      this.treeData = this.editModelNode(this.treeData)
    }
  },
  methods: {
    getNode(data) {
      return this.$refs.tree.getNode(data)
    },
    editModelNode(arr) {
      const children = this.props.children || 'children'
      for (let i = 0; i < arr.length; i++) {
        let opt = arr[i]
        let originData = {} // 存储原始数据
        for (const key in opt) {
          if (key !== children) {
            // 遍历不含子集的数据 赋值给originData
            originData[key] = opt[key]
          }
        }
        Object.assign(opt, { originData, 'editable': false })
        if (opt[children] && opt[children].length > 0) {
          opt[children] = this.editModelNode(opt[children])
        }
      }
      return arr
    },
    onlyChildNode(arr) {
      const children = this.props.children || 'children'
      for (let i = 0; i < arr.length; i++) {
        const opt = arr[i]
        if (opt[children] && opt[children].length > 0) {
          if (!Object.prototype.hasOwnProperty.call(opt, 'disabled')) {
            this.$set(opt, 'disabled', true)
          }
          opt[children] = this.onlyChildNode(opt[children])
        }
      }
      return arr
    },
    // 过滤节点
    filterNode(value, data) {
      if (!value) return true
      return data[this.props.label].indexOf(value) !== -1
    },
    // 过滤函数
    filter(val) {
      this.$refs.tree.filter(val)
    },
    // 树节点点击事件
    nodeClick(data, node, tree) {
      if (data['disabled']) return
      this.$emit('nodeClick', data, node, tree)
    },
    // 编辑节点击事件
    editNode(node, data) {
      if(this.editModel){
        let nodeData =  this.refreshView(data,this.treeData,true )
        this.$set(this.treeData,nodeData['index'],nodeData['data'])
        console.log(this.treeData)
      } else {
        this.$emit('editNode', node, data)
      }
    },
    // 刷新编辑节点的视图
    refreshView(data,dataArr,flag){
      const id = this.props.id || 'id'
      const children = this.props.children || 'children'
      let dataIndex = 0
      for(let index = 0;index<dataArr.length;index++){
        let opt = dataArr[index]
        dataIndex = index
        if(opt[id]=== data[id]){
          Object.assign(dataArr[index],{'editable':flag})
          return {index:dataIndex, data:dataArr[dataIndex]}
        }
        if (opt[children] && opt[children].length > 0) {
          this.refreshView(data,opt[children],flag )
        }
      }
    },
    // 添加节点击事件
    addNode(data, node) {
      this.$emit('addNode', data, node)
    },
    // 删除节点击事件
    deleteNode(node, data) {
      this.$emit('deleteNode', node, data)
    },
    // 通过key设置选中的节点
    setCheckedKeys(keys, leafOnly) {
      this.$refs.tree.setCheckedKeys(keys, leafOnly)
    },
    // 通过nodes、keys获取当前选中
    getCheckedNode(leafOnly = false, includeHalfChecked = false) {
      return this.$refs.tree.getCheckedNodes(leafOnly, includeHalfChecked)
    },
    getCheckedKey(leafOnly = false) {
      return this.$refs.tree.getCheckedKeys(leafOnly)
    },
    // 获取当前被选中节点的 data，若没有节点被选中则返回 null
    getCurrentNode() {
      return this.$refs.tree.getCurrentNode()
    },
    // 获取复选框选中状态变更的节点
    checkChange(checkData, isChecked, childCheck) {
      this.$emit('checkChange', checkData, isChecked, childCheck)
    },
  },
}
</script>
<style lang="scss">
@import './variables.scss';

.f-tree {
  .node-label {
    font-size: 14px;
    &.is-disabled {
      cursor: no-drop;
    }
  }
  .self-btns {
    position: absolute;
    top: 3px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 16px;
    color: $menuActiveText;
    right: 20px;
    .btn-item {
      display: inline-block;
      font-weight: 600;
      margin-left: 5px;
    }
  }
  .el-tree-node__content {
    position: relative;
    &:hover {
      .self-btns {
        display: inline-block;
        .btn-item {
          &:hover {
            transform: scale(1.3);
          }
        }
      }
    }
  }
}
</style>
