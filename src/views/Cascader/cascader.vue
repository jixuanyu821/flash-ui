<!-- wyf 2022-1-25 -->
<template>
  <div class="cascader-page">
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
    <br>
    <h1>showSearch </h1>
    <h4>showSearch 为对象时,其中的字段:</h4>
    <a-table
      :data-source="dataSource3"
      :columns="columns3"
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
        Property: 'multiple',
        Description: '是否多选',
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
        Property: 'expandTrigger',
        Description: '次级菜单的展开方式,可选 click 和 hover',
        Type: 'string',
        Default: 'click'
      },
      {
        key: '7',
        Property: 'fieldNames',
        Description: '自定义 options 中 label name children 的字段',
        Type: 'object',
        Default: "{ label: 'label', value: 'value', children: 'children' }"
      },
      {
        key: '8',
        Property: 'showSearch',
        Description: '在选择框中显示搜索框',
        Type: 'boolean | object',
        Default: '-'
      },
      {
        key: '9',
        Property: 'loadData',
        Description: '用于动态加载选项,无法与 showSearch 一起使用',
        Type: '(selectedOptions) => void',
        Default: '-'
      },
      {
        key: '10',
        Property: 'changeOnSelect',
        Description: '当此项为 true 时,点选每级菜单选项值都会发生变化,具体见上面的演示',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '11',
        Property: 'displayRender',
        Description: '选择后展示的渲染函数,可使用 #displayRender="{labels, selectedOptions}"',
        Type: '({labels, selectedOptions}) => VNode',
        Default: "labels => labels.join(' / ')"
      },
      {
        key: '12',
        Property: 'autofocus',
        Description: '自动获取焦点',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '13',
        Property: 'defaultValue',
        Description: '默认的选中项',
        Type: 'string[] | number[]',
        Default: '[]'
      },
      {
        key: '14',
        Property: 'getPopupContainer',
        Description: '菜单渲染父节点。默认渲染到 body 上,如果你遇到菜单滚动定位问题,试试修改为滚动的区域,并相对其定位。	',
        Type: 'Function(triggerNode)',
        Default: '() => document.body'
      },
      {
        key: '14',
        Property: 'dropdownClassName',
        Description: '自定义浮层类名',
        Type: 'string',
        Default: '-'
      },
      {
        key: '15',
        Property: 'dropdownStyle',
        Description: '自定义浮层样式',
        Type: 'object',
        Default: '-'
      },
      {
        key: '16',
        Property: 'open',
        Description: '控制浮层显隐',
        Type: 'boolean',
        Default: '-'
      },
      {
        key: '17',
        Property: 'placement',
        Description: '浮层预设位置:  bottomLeft bottomRight topLeft topRight',
        Type: 'string',
        Default: 'bottomLeft'
      },
      {
        key: '18',
        Property: 'tagRender',
        Description: '自定义 tag 内容,多选时生效',
        Type: '(props) => ReactNode',
        Default: '-'
      },
      {
        key: '19',
        Property: 'searchValue',
        Description: '设置搜索的值,需要与 showSearch 配合使用',
        Type: 'string',
        Default: '-'
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
        Description: '选择完成后的回调',
        func: '(value, selectedOptions) => void'
      },
      {
        key: '2',
        Property: 'dropdownVisibleChange',
        Description: '显示/隐藏浮层的回调',
        func: '(value) => void'
      },
      {
        key: '3',
        Property: 'search',
        Description: '监听搜索,返回输入的值',
        func: '(value) => void'
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
    const dataSource3 = reactive([
      {
        key: '1',
        Property: 'filter',
        Description: '接收 inputValue path 两个参数,当 path 符合筛选条件时,应返回 true,反之则返回 false',
        Type: 'function(inputValue, path): boolean',
        Default: ''
      },
      {
        key: '2',
        Property: 'limit',
        Description: '搜索结果展示数量',
        Type: 'number | false',
        Default: '50'
      },
      {
        key: '3',
        Property: 'matchInputWidth',
        Description: '搜索结果列表是否与输入框同宽',
        Type: 'boolean',
        Default: ''
      },
      {
        key: '4',
        Property: 'render',
        Description: '用于渲染 filter 后的选项,可使用 #showSearchRender="{inputValue, path}"',
        Type: 'function({inputValue, path}): VNode',
        Default: ''
      },
      {
        key: '5',
        Property: 'sort',
        Description: '用于排序 filter 后的选项',
        Type: 'function(a, b, inputValue)',
        Default: ''
      }
    ])
    const columns3 = reactive([
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
    return {
      dataSource1,
      columns1,
      dataSource2,
      columns2,
      dataSource3,
      columns3
    }
  }
})
</script>

<style lang="less">
.cascader-page {
  margin-bottom: 30px;
}
</style>
