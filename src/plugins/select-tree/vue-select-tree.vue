<template>
  <el-popover v-model="visible"
              class="z-select-tree"
              :disabled="disabled"
              placement="bottom"
              :width="width">
    <el-input v-model="filterTxt" class="z-select-input" size="medium ">
      <el-button slot="append" icon="el-icon-search" @click="filterTree" />
      <!-- <el-button slot="suffix" style="border:none;" size="mini" icon="el-icon-search" @click="filterTree" /> -->
    </el-input>
    <el-scrollbar>
      <z-tree
        ref="tree"
        :lazy="lazy"
        :node-key="nodeKey"
        :only-child="onlyChild"
        :class-name="'z-select-tree'"
        :load="loadNode"
        :show-checkbox="showCheckbox"
        :props="props"
        :check-on-click-node="multiple"
        :tree-data="treeDatas"
        @checkChange="checkChange"
        @nodeClick="nodeClick" />
    </el-scrollbar>
    <el-input v-if="!showCheckbox" slot="reference" :disabled="disabled" v-model="valueName" clearable :suffix-icon="visible?'el-icon-arrow-up':'el-icon-arrow-down'" @clear="clearValue" />
    <div v-else slot="reference" class="el-input" :class="{'is-disabled':disabled}">
      <div class="el-input__inner nowrap">
        <div class="flexDiv" style="height:100%">
          <el-tag v-if="valueNameArr && valueNameArr.length>0" size="small" type="info">{{ valueNameArr[0][props.label] }}</el-tag>
          <el-tag v-if="valueNameArr && valueNameArr.length>1" size="small" type="info" style="margin-left:8px;">+1</el-tag>
          <!-- <el-tag v-for="(item, index) in valueNameArr" :key="index" size="small" type="info">{{ item[props.value?props.value:props.label] }}</el-tag> -->
        </div>
        <i :class="visible?'el-icon-arrow-up':'el-icon-arrow-down'" />
      </div>
    </div>
  </el-popover>
</template>
<script>
import ZTree from '../tree/vue-tree'
import { Input, Tree, Popover, Button,Scrollbar } from 'element-ui'
import Vue from 'vue'
Vue.use(Tree)
Vue.use(Input)
Vue.use(Popover)
Vue.use(Button)
Vue.use(Scrollbar)

export default {
  name: 'ZSelectTree',
  components: {
    ZTree
  },
  model: {
    prop: 'treeValue',
    event: 'valueChange'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
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
    showCheckbox: {
      type: Boolean,
      default: false
    },
    multiple: { // 多选
      type: Boolean,
      default: false
    },
    nodeKey: {
      type: String,
      default: 'id'
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
    treeValue: { // 组件id 外部组件使用v-model绑定
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
      // valueId: this.value,
      valueName: '',
      valueNameArr: []
    }
  },
  watch: {
    treeData (val) {
      if (this.isFullName) {
        this.treeDatas = this.formateTree('', val, this.props, true)
      } else {
        this.treeDatas = val
      }
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(this.treeValue.split(','))
        const checkNodes = this.treeValue.split(',').map((id) => {
          return this.getNode(id)
        })
        const keywordValue = this.props.value ? this.props.value : this.props.label
        if (checkNodes) {
          const valueName = checkNodes.map(val => val['data'][keywordValue]).join(',')
          this.valueName = valueName
          this.$emit('getValueName', valueName)
        }
      })
    },
    treeValue(val) {
      if (val === '') {
        this.valueName = ''
        this.$emit('getValueName', '')
        this.valueNameArr = []
        this.$refs.tree.setCheckedKeys([])
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
      this.valueName = data[keywordValue]
      this.$emit('valueChange', data[keywordId])
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
    },
    getCheckedNodes () {
      return this.$refs.tree.getCheckedNode()
    },
    checkChange (checkData, isChecked, childCheck) {
      this.$emit('checkChange',checkData, isChecked, childCheck)
      const checkNodes = this.getCheckedNodes() // 获取所有选中节点（包含子节点）
      let childIds = [] // 获取所有子节点Id  用作过滤
      const child = this.props.children
      const id = this.props.id
      if (checkNodes.length > 0) {
        for (let i = 0; i < checkNodes.length; i++) {
          if (checkNodes[i][child] && checkNodes[i][child].length > 0) {
            childIds = childIds.concat(this.getChildIds(checkNodes[i][child])) // 获取所有包含子节点的数组
          }
        }
      }
      const filterNodes = checkNodes.filter(val => { // 在选中节点中过滤掉子节点数组
        return childIds.indexOf(val[id]) === -1
      })
      this.valueNameArr = filterNodes // 展示到dom上
      this.$emit('showNodes',filterNodes)
      const keywordValue = this.props.value ? this.props.value : this.props.label
      const keywordId = this.props.id ? this.props.id : this.props.label
      this.$emit('valueChange', checkNodes.map(val=> val[keywordId]).join(','))
      this.$emit('getValueName', checkNodes.map(val => val[keywordValue]))
    },
    getChildIds (arr) {
      let ids = []
      const child = this.props.children
      const id = this.props.id
      for (var i = 0; i < arr.length; i++) {
        const node = arr[i]
        ids.push(node[id])
        if (node[child] && node[child].length > 0) {
          ids = ids.concat(this.getChildIds(node[child]), child)
        }
      }
      return ids
    }
  }
}
</script>
<style lang="scss">
.el-popover{
  .z-select-tree{
    margin-top: 8px;
    min-height: 200px;
    max-height: 350px;
  }
}
.el-input__inner.nowrap{
  position: relative;
  [class*=" el-icon-"], [class^=el-icon-]{
    position: absolute;
    right: 8px;
    top: 12px;
  }
}
</style>
