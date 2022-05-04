<!-- wyf 2022-1-25 -->
<template>
  <div class="tree-select-page">
    <part1 />
    <h1>参数</h1>
    <a-table
      :data-source="dataSource1"
      :columns="columns1"
      :pagination="false"
    />
    <br>
    <h1>事件</h1>
    <a-table
      :data-source="dataSource2"
      :columns="columns2"
      :pagination="false"
    />
  </div>
</template>

<script>
import part1 from './components/part1'
import { defineComponent, reactive } from 'vue'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  name: 'Select',
  components: { part1 },
  setup() {
    const dataSource1 = reactive([
      {
        key: '1',
        Property: 'value(v-model)',
        Description: '输入框内容',
        Type: 'String',
        Default: ''
      },
      {
        key: '2',
        Property: 'placeholder',
        Description: '提示语',
        Type: 'String',
        Default: ''
      },
      {
        key: '3',
        Property: 'disabled',
        Description: '是否禁用',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '4',
        Property: 'allowClear',
        Description: '可以点击清除图标删除内容',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '5',
        Property: 'mode',
        Description: '设置 Select 的模式为多选或标签',
        Type: 'multiple | tags | combobox',
        Default: ''
      },
      {
        key: '6',
        Property: 'showSearch',
        Description: '可输入选择',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '7',
        Property: 'defaultValue',
        Description: '指定默认选中的条目',
        Type: 'string/string[]',
        Default: '-'
      },
      {
        key: '8',
        Property: 'dropdownClassName',
        Description: '下拉菜单的 className 属性',
        Type: 'string',
        Default: '-'
      },
      {
        key: '9',
        Property: 'dropdownMatchSelectWidth',
        Description: '下拉菜单和选择器同宽。默认将设置 min-width,当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动',
        Type: 'boolean | number	',
        Default: 'true'
      },
      {
        key: '10',
        Property: 'dropdownStyle',
        Description: '下拉菜单的样式',
        Type: 'object',
        Default: '-'
      },
      {
        key: '11',
        Property: 'filterTreeNode',
        Description: '是否根据输入项进行筛选,默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值	',
        Type: 'boolean|Function(inputValue: string, treeNode: TreeNode) (函数需要返回 bool 值)',
        Default: 'Function'
      },
      {
        key: '12',
        Property: 'getPopupContainer',
        Description: '菜单渲染父节点。默认渲染到 body 上,如果你遇到菜单滚动定位问题,试试修改为滚动的区域,并相对其定位。	',
        Type: 'Function(triggerNode)',
        Default: '() => document.body'
      },
      {
        key: '13',
        Property: 'listHeight',
        Description: '设置弹窗滚动高度',
        Type: 'number',
        Default: '256'
      },
      {
        key: '14',
        Property: 'loadData',
        Description: '异步加载数据',
        Type: 'function(node)',
        Default: '-'
      },
      {
        key: '15',
        Property: 'treeCheckStrictly',
        Description: 'checkable 状态下节点选择完全受控(父子节点选中状态不再关联),会使得 labelInValue 强制为 true',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '16',
        Property: 'treeLine',
        Description: '是否展示线条样式',
        Type: 'boolean | object',
        Default: 'false'
      },
      {
        key: '17',
        Property: 'treeNodeFilterProp',
        Description: '输入项过滤对应的 treeNode 属性',
        Type: 'string',
        Default: '-'
      },
      {
        key: '18',
        Property: 'treeNodeLabelProp',
        Description: '作为显示的 prop 设置',
        Type: 'string',
        Default: '-'
      },
      {
        key: '19',
        Property: 'virtual',
        Description: '设置 false 时关闭虚拟滚动',
        Type: 'Boolean',
        Default: 'true'
      },
      {
        key: '20',
        Property: 'treeCheckable',
        Description: '显示 checkbox',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '21',
        Property: 'labelInValue',
        Description: '是否把每个选项的 label 包装到 value 中，会把 value 类型从 string 变为 {value: string, label: VNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '22',
        Property: 'maxTagCount',
        Description: '最多显示多少个 tag',
        Type: 'number',
        Default: '-'
      },
      {
        key: '23',
        Property: 'searchValue',
        Description: '搜索框的值,可以通过 search 事件获取用户输入',
        Type: 'string',
        Default: '-'
      },
      {
        key: '24',
        Property: 'replaceFields',
        Description: '替换 treeNode 中 title,value,key,children 字段为 treeData 中对应的字段',
        Type: 'object',
        Default: "{children:'children', label:'title', key:'key', value: 'value' }"
      },
      {
        key: '25',
        Property: 'fieldNames',
        Description: '替换 treeNode 中 title,value,key,children 字段为 treeData 中对应的字段',
        Type: 'object',
        Default: "{children:'children', label:'title', key:'key', value: 'value' }"
      },
      {
        key: '26',
        Property: 'treeDataSimpleMode',
        Description: "使用简单格式的 treeData,具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', label:'test1',...},...], pId 是父节点的 id)",
        Type: 'false|Array<{ id: string, pId: string, rootPId: null }>',
        Default: 'false'
      }
    ])
    const columns1 = reactive([
      {
        title: '参数',
        dataIndex: 'Property',
        key: 'Property'
      },
      {
        title: '说明',
        dataIndex: 'Description',
        key: 'Description'
      },
      {
        title: '类型',
        dataIndex: 'Type',
        key: 'Type'
      },
      {
        title: '默认值',
        dataIndex: 'Default',
        key: 'Default'
      }
    ])
    const dataSource2 = reactive([
      {
        key: '1',
        Property: 'change',
        Description: '选择框内容变化时的回调',
        func: 'function(value, option:Option/Array<Option>)'
      },
      {
        key: '2',
        Property: 'focus',
        Description: '获得焦点时回调',
        func: 'function'
      },
      {
        key: '3',
        Property: 'blur',
        Description: '失去焦点的时回调',
        func: 'function'
      },
      {
        key: '4',
        Property: 'search',
        Description: '文本框值变化时回调',
        func: 'function(value: string)'
      },
      {
        key: '5',
        Property: 'select',
        Description: '被选中时调用',
        func: 'function(value, node, extra)'
      },
      {
        key: '6',
        Property: 'treeExpand',
        Description: '展开节点时调用',
        func: 'function(expandedKeys)'
      },
      {
        key: '7',
        Property: 'dropdownVisibleChange',
        Description: '展开下拉菜单的回调',
        func: 'function(open)'
      }
    ])
    const columns2 = reactive([
      {
        title: '事件',
        dataIndex: 'Property',
        key: 'Property'
      },
      {
        title: '说明',
        dataIndex: 'Description',
        key: 'Description'
      },
      {
        title: '回调参数',
        dataIndex: 'func',
        key: 'func'
      }
    ])
    return {
      dataSource1,
      columns1,
      dataSource2,
      columns2
    }
  }
})
</script>

<style lang="less">
.tree-select-page {
  margin-bottom: 30px;
}
</style>
