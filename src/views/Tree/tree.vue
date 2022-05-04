<!-- wyf 2022-2-28 -->
<template>
  <div class="tree-page">
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
    <h1>TreeNode</h1>
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
  name: 'Tree',
  components: { part1 },
  setup() {
    const dataSource1 = reactive([
      {
        key: '1',
        Property: 'blockNode',
        Description: '是否节点占据一行',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '2',
        Property: 'treeData',
        Description: 'treeNodes 数据,如果设置则不需要手动构造 TreeNode 节点(key 在整个树范围内唯一)',
        Type: 'TreeNode[]',
        Default: '-'
      },
      {
        key: '3',
        Property: 'fieldNames',
        Description: '替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段',
        Type: 'object',
        Default: "{children:'children', title:'title', key:'key' }"
      },
      {
        key: '4',
        Property: 'autoExpandParent',
        Description: '是否自动展开父节点',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '5',
        Property: 'checkable',
        Description: '节点前添加 Checkbox 复选框',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '6',
        Property: 'checkedKeys(v-model)',
        Description: '(受控)选中复选框的树节点(注意:父子节点有关联,如果传入父节点 key,则子节点自动选中;相应当子节点 key 都传入,父节点也自动选中。当设置checkable和checkStrictly,它是一个有checked和halfChecked属性的对象,并且父子节点的选中与否不再关联',
        Type: 'string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}',
        Default: '[]'
      },
      {
        key: '7',
        Property: 'checkStrictly',
        Description: 'checkable 状态下节点选择完全受控(父子节点选中状态不再关联)',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '8',
        Property: 'defaultExpandAll',
        Description: '默认展开所有树节点, 如果是异步数据,需要在数据返回后再实例化,建议用 v-if="data.length";当有 expandedKeys 时,defaultExpandAll 将失效',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '9',
        Property: 'disabled',
        Description: '将树禁用',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '10',
        Property: 'draggable',
        Description: '设置节点可拖拽',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '11',
        Property: 'expandedKeys(v-model)',
        Description: '(受控)展开指定的树节点',
        Type: 'string[] | number[]',
        Default: '[]'
      },
      {
        key: '12',
        Property: 'filterTreeNode',
        Description: '按需筛选树节点(高亮),返回 true',
        Type: 'function(node)',
        Default: '-'
      },
      {
        key: '13',
        Property: 'loadData',
        Description: '异步加载数据',
        Type: 'function(node)',
        Default: '-'
      },
      {
        key: '14',
        Property: 'loadedKeys',
        Description: '(受控)已经加载的节点,需要配合 loadData 使用',
        Type: 'string[] | number[]',
        Default: '[]'
      },
      {
        key: '15',
        Property: 'multiple',
        Description: '支持点选多个节点(节点本身)',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '16',
        Property: 'selectable',
        Description: '是否可选中',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '17',
        Property: 'selectedKeys(v-model)',
        Description: '(受控)设置选中的树节点',
        Type: 'string[] | number[]',
        Default: '[]'
      },
      {
        key: '18',
        Property: 'showIcon',
        Description: '是否展示 TreeNode title 前的图标,没有默认样式,如设置为 true,需要自行定义图标相关样式	',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '19',
        Property: 'switcherIcon',
        Description: '自定义树节点的展开/折叠图标',
        Type: 'slot',
        Default: '-'
      },
      {
        key: '20',
        Property: 'showLine',
        Description: '是否展示连接线',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '21',
        Property: 'title',
        Description: '自定义标题',
        Type: 'slot',
        Default: '-'
      },
      {
        key: '22',
        Property: 'virtual',
        Description: '设置 false 时关闭虚拟滚动',
        Type: 'boolean',
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
        Property: 'check',
        Description: '点击复选框触发',
        func: 'function(checkedKeys, e:{checked: bool, checkedNodes, node, event})'
      },
      {
        key: '2',
        Property: 'dragend',
        Description: 'dragend 触发时调用',
        func: 'function({event, node})'
      },
      {
        key: '3',
        Property: 'dragenter',
        Description: 'dragenter 触发时调用',
        func: 'function({event, node, expandedKeys})'
      },
      {
        key: '4',
        Property: 'dragleave',
        Description: 'dragleave 触发时调用',
        func: 'function({event, node})'
      },
      {
        key: '5',
        Property: 'dragover',
        Description: 'dragover 触发时调用',
        func: 'function({event, node})'
      },
      {
        key: '6',
        Property: 'dragstart',
        Description: '开始拖拽时调用',
        func: 'function({event, node})'
      },
      {
        key: '7',
        Property: 'drop',
        Description: 'drop 触发时调用',
        func: 'function({event, node, dragNode, dragNodesKeys})'
      },
      {
        key: '8',
        Property: 'expand',
        Description: '展开/收起节点时触发',
        func: 'function(expandedKeys, {expanded: bool, node})'
      },
      {
        key: '9',
        Property: 'load',
        Description: '节点加载完毕时触发',
        func: 'function(loadedKeys, {event, node})'
      },
      {
        key: '10',
        Property: 'rightClick',
        Description: '响应右键点击',
        func: 'function({event, node})'
      },
      {
        key: '11',
        Property: 'select',
        Description: '点击树节点触发',
        func: 'function(selectedKeys, e:{selected: bool, selectedNodes, node, event})'
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
        Property: 'class',
        Description: '节点的 class',
        Type: 'string',
        Default: '-'
      },
      {
        key: '2',
        Property: 'style',
        Description: '节点的 style',
        Type: 'string|object',
        Default: '-'
      },
      {
        key: '3',
        Property: 'checkable',
        Description: '当树为 checkable 时,设置独立节点是否展示 Checkbox',
        Type: 'boolean',
        Default: '-'
      },
      {
        key: '4',
        Property: 'disableCheckbox',
        Description: '禁掉 checkbox',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '5',
        Property: 'disabled',
        Description: '禁掉响应',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '6',
        Property: 'icon',
        Description: '自定义图标。可接收组件,props 为当前节点 props',
        Type: 'slot',
        Default: '-'
      },
      {
        key: '7',
        Property: 'isLeaf',
        Description: '设置为叶子节点(设置了loadData时有效)',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '8',
        Property: 'key',
        Description: '被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意:整个树范围内的所有节点的 key 值不能重复!',
        Type: 'string | number',
        Default: '内部计算出的节点位置'
      },
      {
        key: '9',
        Property: 'selectable',
        Description: '设置节点是否可被选中',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '10',
        Property: 'title',
        Description: '标题',
        Type: 'string',
        Default: '--'
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
        key: 'Description',
        width: 400
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
.tree-page {
  margin-bottom: 30px;
}
</style>
