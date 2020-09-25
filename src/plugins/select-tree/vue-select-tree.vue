<template>
  <el-popover v-model="visible"
              class="z-select-tree"
              placement="bottom"
              :width="width">
    <el-input v-model="filterTxt" class="z-select-input" size="medium ">
      <el-button slot="append" icon="el-icon-search" @click="filterTree" />
      <!-- <el-button slot="suffix" style="border:none;" size="mini" icon="el-icon-search" @click="filterTree" /> -->
    </el-input>
    <z-tree
      ref="tree"
      :lazy="lazy"
      :only-child="onlyChild"
      :class-name="'z-select-tree'"
      :load="loadNode"
      :props="props"
      :tree-data="treeDatas"
      @nodeClick="nodeClick" />
    <el-input slot="reference" v-model="valueName" clearable :suffix-icon="visible?'el-icon-arrow-up':'el-icon-arrow-down'" @clear="clearValue" />
  </el-popover>
</template>
<script>
import ZTree from '../tree/vue-tree'
import { Input, Tree, Popover, Button } from 'element-ui'
import Vue from 'vue'
Vue.use(Tree)
Vue.use(Input)
Vue.use(Popover)
Vue.use(Button)
export default {
  name: 'ZSelectTree',
  components: {
    ZTree
  },
  model: {
    prop: 'value',
    event: 'valueChange'
  },
  props: {
    width: {
      default: '240',
      type: String
    },
    treeData: {
      type: Array,
      default () {
        return []
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    isFullName: { // 是否开启自动拼接  true开启 输入框会自动显示全部字段 此时props的value为必传
      type: Boolean,
      default: false
    },
    breakKey: { // 默认分割符 支持自定义分隔符
      type: String,
      default: ' - '
    },
    loadNode: {
      type: Function,
      default: undefined
    },
    props: {
      type: Object,
      default () {
        return {
          id: 'id',
          children: 'children',
          label: 'label'
          // value: 'label'// input框取值用，默认和label取相同值
        }
      }
    },
    value: { // 组件id
      default: '',
      type: String
    },
    onlyChild: { // 是否开启只能选择子节点模式
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: false,
      filterTxt: '',
      treeDatas: [],
      selectNode: {},
      valueName: ''
    }
  },
  watch: {
    treeData (val) {
      if (this.isFullName) {
        this.treeDatas = this.formateTree('', val, this.props, true)
      } else {
        this.treeDatas = val
      }
    },
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  created () {
    if (this.isFullName) {
      this.treeDatas = this.formateTree('', this.treeData, this.props, true)
    } else {
      this.treeDatas = this.treeData
    }
  },
  methods: {
    filterTree () {
      this.$refs.tree.filter(this.filterTxt)
    },
    nodeClick (data) {
      this.visible = false
      this.selectNode = data
      const keywordValue = this.props.value ? this.props.value : this.props.label
      const keywordId = this.props.id ? this.props.id : this.props.label
      this.value = data[keywordId]
      this.$emit('valueChange', data[keywordId])
      this.valueName = data[keywordValue]
      this.$emit('getValueName', data[keywordValue])
    },
    clearValue () {
      this.$emit('update:value', '')
      this.valueName = ''
      this.$emit('getValueName', '')
    },
    formateTree (parentName, arr, opt = { value: 'value', label: 'label', children: 'children' }, isFirst = false) {
      for (let i = 0; i < arr.length; i++) {
        const dataObj = arr[i]
        dataObj[opt.value] = parentName + (isFirst ? '' : this.breakKey) + dataObj[opt.label]
        if (dataObj[opt.children] && dataObj[opt.children].length > 0) {
          dataObj[opt.children] = this.formateTree(dataObj[opt.value], dataObj[opt.children], opt)
        }
      }
      return arr
    }
  }
}
</script>
<style lang="scss">
.el-popover{
  .el-tree.z-select-tree{
    margin-top: 8px;
    min-height: 200px;
  }
}
</style>
