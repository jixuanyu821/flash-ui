<!-- wyf 2022-2-10 -->
<template>
  <div class="pagination-page">
    <part1 />
    <part2 />
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
import part2 from './components/part2'
import { defineComponent, reactive } from 'vue'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  name: 'Tag',
  components: { part1, part2 },
  setup() {
    const dataSource1 = reactive([
      {
        key: '1',
        Property: 'current(v-model)',
        Description: '当前页数',
        Type: 'number',
        Default: 1
      },
      {
        key: '2',
        Property: 'pageSize(v-model)',
        Description: '每页条数',
        Type: 'number',
        Default: '-'
      },
      {
        key: '3',
        Property: 'pageSizeOptions',
        Description: '指定每页可以显示多少条',
        Type: 'array',
        Default: "['10', '20', '50', '100']"
      },
      {
        key: '4',
        Property: 'showLessItems',
        Description: '是否显示较少页面内容',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '5',
        Property: 'showQuickJumper',
        Description: '是否可以快速跳转至某页',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '6',
        Property: 'total',
        Description: '数据总数',
        Type: 'number',
        Default: 0
      },
      {
        key: '7',
        Property: 'defaultPageSize',
        Description: '默认的每页条数',
        Type: 'number',
        Default: 10
      },
      {
        key: '8',
        Property: 'hideOnSinglePage',
        Description: '只有一页时是否隐藏分页器',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '9',
        Property: 'showSizeChanger',
        Description: '是否可以改变 pageSize',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '10',
        Property: 'simple',
        Description: '当添加该属性时,显示为简单分页',
        Type: 'boolean',
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
        Property: 'showSizeChange',
        Description: 'pageSize 变化的回调',
        func: 'Function(current, size)'
      },
      {
        key: '2',
        Property: 'change',
        Description: '页码改变的回调,参数是改变后的页码及每页条数',
        func: 'Function(page, pageSize)'
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
.pagination-page {
  margin-bottom: 30px;
}
</style>
