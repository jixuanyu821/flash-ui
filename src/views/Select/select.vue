<!-- wyf 2022-1-24 -->
<template>
  <div class="select-page">
    <part1 />
    <h3>其他相关demo可以参考ant-design</h3>
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
        Property: 'bordered',
        Description: '是否有边框',
        Type: 'Boolean',
        Default: 'true'
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
        Property: 'options',
        Description: '下拉框数据',
        Type: 'array',
        Default: '-'
      },
      {
        key: '7',
        Property: 'showSearch',
        Description: '可输入选择',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '8',
        Property: 'firstActiveValue',
        Description: '默认高亮的选项',
        Type: 'string|string[]',
        Default: ''
      },
      {
        key: '9',
        Property: 'defaultOpen',
        Description: '是否默认展开下拉菜单',
        Type: 'Boolean',
        Default: '-'
      },
      {
        key: '10',
        Property: 'autoClearSearchValue',
        Description: '是否在选中项后清空搜索框,只在 mode 为 multiple 或 tags 时有效。',
        Type: 'Boolean',
        Default: 'true'
      },
      {
        key: '11',
        Property: 'autofocus',
        Description: '默认获取焦点',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '12',
        Property: 'defaultActiveFirstOption',
        Description: '是否默认高亮第一个选项。',
        Type: 'Boolean',
        Default: 'true'
      },
      {
        key: '13',
        Property: 'dropdownClassName',
        Description: '下拉菜单的 className 属性',
        Type: 'string',
        Default: '-'
      },
      {
        key: '14',
        Property: 'dropdownMatchSelectWidth',
        Description: '下拉菜单和选择器同宽。默认将设置 min-width,当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动',
        Type: 'Boolean | number',
        Default: 'true'
      },
      {
        key: '15',
        Property: 'dropdownStyle',
        Description: '下拉菜单的 style 属性',
        Type: 'object',
        Default: '-'
      },
      {
        key: '16',
        Property: 'dropdownMenuStyle',
        Description: 'dropdown 菜单自定义样式',
        Type: 'object',
        Default: 'false'
      },
      {
        key: '17',
        Property: 'getPopupContainer',
        Description: '菜单渲染父节点。默认渲染到 body 上,如果你遇到菜单滚动定位问题,试试修改为滚动的区域,并相对其定位。',
        Type: 'Function(triggerNode)',
        Default: '() => document.body'
      },
      {
        key: '18',
        Property: 'optionFilterProp',
        Description: '搜索时过滤对应的 option 属性,不支持 children',
        Type: 'string',
        Default: '-'
      },
      {
        key: '19',
        Property: 'showArrow',
        Description: '是否显示下拉小箭头',
        Type: 'Boolean',
        Default: 'true'
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
        Description: '失去焦点时回调',
        func: 'function'
      },
      {
        key: '4',
        Property: 'deselect',
        Description: '取消选中时调用,参数为选中项的 value (或 key) 值,仅在 multiple 或 tags 模式下生效',
        func: 'function(value,option:Option)'
      },
      {
        key: '5',
        Property: 'inputKeyDown',
        Description: '键盘按下时回调',
        func: 'function'
      },
      {
        key: '6',
        Property: 'mouseenter',
        Description: '鼠标移入时回调',
        func: 'function'
      },
      {
        key: '7',
        Property: 'mouseleave',
        Description: '鼠标移出时回调',
        func: 'function'
      },
      {
        key: '8',
        Property: 'popupScroll',
        Description: '下拉列表滚动时的回调',
        func: 'function'
      },
      {
        key: '9',
        Property: 'search',
        Description: '文本框值变化时回调',
        func: 'function(value: string)'
      },
      {
        key: '10',
        Property: 'select',
        Description: '被选中时调用,参数为选中项的 value (或 key) 值',
        func: 'function(value, option:Option)'
      },
      {
        key: '11',
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
.select-page {
  margin-bottom: 30px;
}
</style>
