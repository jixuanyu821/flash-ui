<!-- wyf 2022-2-16 -->
<template>
  <div class="table-page">
    <part1 />
    <part2 />
    <part3 />
    <part4 />
    <part5 />
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
    <h1>Column</h1>
    <h4>列描述数据对象,是 columns 中的一项,Column 使用相同的 API</h4>
    <a-table
      :data-source="dataSource3"
      :columns="columns3"
      :pagination="false"
    />
    <br>
    <h1>rowSelection</h1>
    <h4>选择功能的配置。</h4>
    <a-table
      :data-source="dataSource4"
      :columns="columns4"
      :pagination="false"
    />
  </div>
</template>

<script>
import part1 from './components/part1'
import part2 from './components/part2'
import part3 from './components/part3'
import part4 from './components/part4'
import part5 from './components/part5'
import { defineComponent, reactive } from 'vue'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  name: 'Tag',
  components: { part1, part2, part3, part4, part5 },
  setup() {
    const dataSource1 = reactive([
      {
        key: '1',
        Property: 'bordered',
        Description: '是否展示外边框和列边框',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '2',
        Property: 'columns',
        Description: '表格列的配置描述,具体项见下表',
        Type: 'array',
        Default: '-'
      },
      {
        key: '3',
        Property: 'dataSource',
        Description: '数据数组',
        Type: 'object[]',
        Default: '-'
      },
      {
        key: '4',
        Property: 'loading',
        Description: '页面是否加载中',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '5',
        Property: 'pagination',
        Description: '分页器,参考配置项或 pagination文档,设为 false 时不展示和进行分页',
        Type: 'object',
        Default: '-'
      },
      {
        key: '6',
        Property: 'rowClassName',
        Description: '表格行的类名',
        Type: 'Function(record, index):string',
        Default: '-'
      },
      {
        key: '7',
        Property: 'rowSelection',
        Description: '列表项是否可选择,配置项',
        Type: 'object',
        Default: 'null'
      },
      {
        key: '8',
        Property: 'scroll',
        Description: '表格是否可滚动,也可以指定滚动区域的宽、高,配置项',
        Type: 'object',
        Default: '-'
      },
      {
        key: '9',
        Property: 'title',
        Description: '表格标题',
        Type: 'Function(currentPageData)|v-slot:title="currentPageData"',
        Default: '-'
      },
      {
        key: '10',
        Property: 'footer',
        Description: '表格尾部',
        Type: 'Function(currentPageData)|v-slot:footer="currentPageData"',
        Default: ''
      },
      {
        key: '11',
        Property: 'bodyCell',
        Description: '个性化单元格',
        Type: 'v-slot:bodyCell="{text, record, index, column}"',
        Default: '-'
      },
      {
        key: '12',
        Property: 'headerCell',
        Description: '个性化头部单元格',
        Type: 'v-slot:headerCell="{title, column}"',
        Default: '-'
      },
      {
        key: '13',
        Property: 'components',
        Description: '覆盖默认的 table 元素',
        Type: 'object',
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
        Property: 'resizeColumn',
        Description: '拖动列时触发',
        func: 'Function(width, column)'
      },
      {
        key: '2',
        Property: 'change',
        Description: '分页、排序、筛选变化时触发',
        func: 'Function(pagination, filters, sorter, { currentDataSource })'
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
        Property: 'align',
        Description: '设置列的对齐方式',
        Type: 'left | right | center',
        Default: 'left'
      },
      {
        key: '2',
        Property: 'colSpan',
        Description: '表头列合并,设置为 0 时,不渲染',
        Type: 'number',
        Default: ''
      },
      {
        key: '3',
        Property: 'dataIndex',
        Description: '列数据在数据项中对应的路径,支持通过数组查询嵌套路径',
        Type: 'string | string[]',
        Default: '-'
      },
      {
        key: '4',
        Property: 'defaultSortOrder',
        Description: '默认排序顺序',
        Type: 'ascend | descend',
        Default: '-'
      },
      {
        key: '5',
        Property: 'ellipsis',
        Description: '超过宽度将自动省略,暂不支持和排序筛选一起使用。设置为 true 或 { showTitle?: boolean } 时,表格布局将变成 tableLayout="fixed"',
        Type: 'boolean | { showTitle?: boolean }',
        Default: 'false'
      },
      {
        key: '6',
        Property: 'fixed',
        Description: '列是否固定,可选 true(等效于 left) left | right',
        Type: 'boolean|string',
        Default: 'false'
      },
      {
        key: '7',
        Property: 'key',
        Description: 'Vue 需要的 key,如果已经设置了唯一的 dataIndex,可以忽略这个属性',
        Type: 'string',
        Default: '-'
      },
      {
        key: '8',
        Property: 'sorter',
        Description: '排序函数,本地排序使用一个函数(参考 Array.sort 的 compareFunction),需要服务端排序可设为 true',
        Type: 'Function|boolean',
        Default: '-'
      },
      {
        key: '9',
        Property: 'width',
        Description: '列宽度',
        Type: 'string|number',
        Default: '-'
      },
      {
        key: '10',
        Property: 'minWidth',
        Description: '拖动列最小宽度,会受到表格自动调整分配宽度影响',
        Type: 'number',
        Default: '50'
      },
      {
        key: '11',
        Property: 'maxWidth',
        Description: '拖动列最大宽度,会受到表格自动调整分配宽度影响',
        Type: 'number',
        Default: ''
      },
      {
        key: '12',
        Property: 'resizable',
        Description: '是否可拖动调整宽度,此时 width 必须是 number 类型',
        Type: 'boolean',
        Default: '-'
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
    const dataSource4 = reactive([
      {
        key: '1',
        Property: 'checkStrictly',
        Description: 'checkable 状态下节点选择完全受控(父子数据选中状态不再关联)',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '2',
        Property: 'columnWidth',
        Description: '自定义列表选择框宽度',
        Type: 'string|number',
        Default: '-'
      },
      {
        key: '3',
        Property: 'columnTitle',
        Description: '自定义列表选择框标题',
        Type: '自定义列表选择框标题',
        Default: '-'
      },
      {
        key: '4',
        Property: 'fixed',
        Description: '把选择框列固定在左边',
        Type: 'boolean',
        Default: '-'
      },
      {
        key: '5',
        Property: 'getCheckboxProps',
        Description: '选择框的默认属性配置',
        Type: 'Function(record)',
        Default: '-'
      },
      {
        key: '6',
        Property: 'hideSelectAll',
        Description: '隐藏全选勾选框与自定义选择项',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '7',
        Property: 'preserveSelectedRowKeys',
        Description: '当数据被删除时仍然保留选项的 key',
        Type: 'boolean',
        Default: '-'
      },
      {
        key: '8',
        Property: 'hideDefaultSelections',
        Description: '去掉『全选』『反选』两个默认选项',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '9',
        Property: 'selectedRowKeys',
        Description: '指定选中项的 key 数组,需要和 onChange 进行配合',
        Type: 'string[]',
        Default: '[]'
      },
      {
        key: '10',
        Property: 'selections',
        Description: '自定义选择项 配置项, 设为 true 时使用默认选择项',
        Type: 'object[] | boolean	',
        Default: 'true'
      },
      {
        key: '11',
        Property: 'type',
        Description: '多选/单选,checkbox or radio',
        Type: 'string',
        Default: 'checkbox'
      },
      {
        key: '12',
        Property: 'onChange',
        Description: '选中项发生变化时的回调',
        Type: 'Function(selectedRowKeys, selectedRows)',
        Default: '-'
      },
      {
        key: '13',
        Property: 'onSelect',
        Description: '用户手动选择/取消选择某列的回调',
        Type: 'Function(record, selected, selectedRows, nativeEvent)',
        Default: '-'
      },
      {
        key: '14',
        Property: 'onSelectAll',
        Description: '用户手动选择/取消选择所有列的回调',
        Type: 'Function(selected, selectedRows, changeRows)',
        Default: '-'
      },
      {
        key: '15',
        Property: 'onSelectInvert',
        Description: '用户手动选择反选的回调',
        Type: 'Function(selectedRows)',
        Default: '-'
      },
      {
        key: '16',
        Property: 'onSelectNone',
        Description: '用户清空选择的回调',
        Type: 'function()	',
        Default: '-'
      }
    ])
    const columns4 = reactive([
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
      columns3,
      dataSource4,
      columns4
    }
  }
})
</script>

<style lang="less">
.table-page {
  margin-bottom: 30px;
  padding-right: 20px;
}
</style>
