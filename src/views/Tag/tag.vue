<!-- wyf 2022-2-10 -->
<template>
  <div class="tag-page">
    <part1 />
    <part2 />
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
        Property: 'closable',
        Description: '标签是否可以关闭',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '2',
        Property: 'color',
        Description: '标签色',
        Type: 'String',
        Default: ''
      },
      {
        key: '3',
        Property: 'closeIcon',
        Description: '自定义关闭按钮',
        Type: 'slot',
        Default: ''
      },
      {
        key: '4',
        Property: 'icon',
        Description: '设置图标',
        Type: 'slot',
        Default: '-'
      },
      {
        key: '5',
        Property: 'visible(v-model)',
        Description: '是否显示标签',
        Type: 'Boolean',
        Default: 'true'
      },
      {
        key: '6',
        Property: 'checked(v-model)',
        Description: '设置标签的选中状态',
        Type: 'Boolean',
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
        Property: 'close',
        Description: '关闭时的回调',
        func: '(e) => void'
      },
      {
        key: '2',
        Property: 'change',
        Description: '点击标签时触发的回调',
        func: '(checked) => void'
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
.tag-page {
  margin-bottom: 30px;
}
</style>
