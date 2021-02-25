<template>
  <el-tree
    ref="tree"
    class="f-tree"
    :class="className"
    :data="treeDatas"
    :load="load"
    :lazy="lazy"
    :indent="14"
    :show-checkbox="showCheckbox"
    :node-key="nodeKey"
    :current-node-key="currentNodeKey"
    :default-expanded-keys="expendNodes"
    :default-expand-all="defaultExpandAll"
    :expand-on-click-node="clickNodeExpand"
    highlight-current
    :check-on-click-node="checkOnClickNode"
    :props="props"
    :filter-node-method="filterNode"
    :check-strictly="checkStrictly"
    @check-change="checkChange"
    @node-expand="nodeExpand"
    @node-click="nodeClick"
  >
    <span slot-scope="{ node, data }">
      <span class="node-label" v-if="editModel">
        <span v-if="!data.editable">{{ data[props.label] }}</span>
        <el-input v-model="data[props.label]" v-else></el-input>
      </span>
      <span
        class="node-label"
        v-else
        :class="{ 'is-disabled': node.disabled }"
        >{{ node.label }}</span
      >
      <div class="self-btns">
        <i
          v-show="editBtn  && !data.editable"
          class="el-icon-edit-outline btn-item"
          @click.stop="() => editNode(node, data)"
        />
        <i
          v-show="addBtn  && !data.editable"
          class="el-icon-plus btn-item"
          @click.stop="() => addNode(data, node)"
        />
        <i
          v-show="deleteBtn && !data.editable"
          class="el-icon-delete btn-item"
          @click.stop="() => deleteNode(node, data)"
        />
        <i
          v-show="data.editable"
          class="el-icon-check btn-item"
          @click.stop="() => checkNode(node, data)"
        />
        <i
          v-show="data.editable"
          class="el-icon-close btn-item"
          @click.stop="() => cancelNode(node, data)"
        />
        <slot v-show="!data.editable" name="btn" :data="data" :node="node"></slot>
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
    return {
      nodeFlag: false,
      treeDatas: [],
      expendNodes:[]
    }
  },
  watch: {
    treeData: function(val) {
      if (this.onlyChild) {
        this.treeDatas = this.onlyChildNode(val)
      }
      if (this.editModel && !this.nodeFlag) {
        this.treeDatas = this.editModelNode(val)
      }
    },
    defaultExpended: function (val) {
      this.expendNodes = [...this.expendNodes,val]
    }
  },
  created() {
    if (this.onlyChild) {
      this.treeDatas = this.onlyChildNode(this.treeData)
    }
    if (this.editModel) {
      this.treeDatas = this.editModelNode(this.treeData)
    }
    this.expendNodes = [...this.defaultExpended]
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
        Object.assign(opt, { originData, editable: false })
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
    setOriginData(arr) {
      const children = this.props.children || 'children'
      for (let i = 0; i < arr.length; i++) {
        const opt = arr[i]
        let originData = JSON.parse(JSON.stringify(opt))
        delete originData[children]
        Object.assign(opt, { originData: originData, editFlag: false })
        if (opt[children] && opt[children].length > 0) {
          opt[children] = this.setOriginData(opt[children])
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
    nodeExpand(data){
      this.expendNodes.push(data[this.nodeKey])
    },
    /**
     * @description: 用于手动设置节点参数
     * @param {data} 节点想要变更的数据 如果是节点数据同名参数将会覆盖
     */ 
    setNode(data){
      let arr = this.setNodeData(data,this.treeDatas)
      this.treeDatas = JSON.parse(JSON.stringify(arr))
    },
    // 递归方式变更节点
    setNodeData(data,Arr){
      let id = this.nodeKey || 'id'
      let dataArr = JSON.parse(JSON.stringify(Arr))
      const children = this.props.children || 'children'
      for (let index = 0; index < dataArr.length; index++) {
        let opt = dataArr[index]
        if (opt[id] === data[id]) {
          Object.assign(dataArr[index],data)
          break
        }
        if (opt[children] && opt[children].length > 0) {
          opt[children] = this.setNodeData(data, opt[children])
        }
      }
      return dataArr
    },
    // 添加节点击事件
    addNode(data, node) {
      this.$emit('addNode', data, node)
    },
    // 删除节点击事件
    deleteNode(node, data) {
      this.$emit('deleteNode', node, data)
    },
    // 编辑节点击事件
    editNode(node, data) {
      if (this.editModel) {
        this.nodeFlag = true
        this.setNode({...data, editable:true})
      } else {
        this.$emit('editNode', node, data)
      }
    },
    // 确定按钮点击事件
    checkNode(node, data) {
      this.nodeFlag = false
      data.originData[this.props.label] = data[this.props.label]
      this.setNode({...data,editable:false})
      this.$emit('checkNode',node,data)
    },
    // 取消按钮点击事件
    cancelNode(node, data) {
      this.nodeFlag = false
      data[this.props.label] = data.originData[this.props.label]
      this.setNode({...data,editable:false})
      this.$emit('cancelNode',node,data)
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
    top: 5px;
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
    height: 30px;
    .el-input__inner{
      height: 26px;
    }
    &:hover {
      .self-btns {
        display: inline-block;
      }
    }
    .btn-item {
      transition: all  0.2s ease-in;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
}
</style>
