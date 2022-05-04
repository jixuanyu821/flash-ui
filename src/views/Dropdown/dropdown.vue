<!-- wyf 2022-2-14 -->
<template>
  <div class="dropdown-page">
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
    <br>
    <h1>Dropdown.Button参数</h1>
    <a-table
      :data-source="dataSource3"
      :columns="columns1"
      :pagination="false"
    />
    <br>
    <h1>Dropdown.Button事件</h1>
    <a-table
      :data-source="dataSource4"
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
  name: 'Dropdown',
  components: { part1 },
  setup() {
    const dataSource1 = reactive([
      {
        key: '1',
        Property: 'disabled',
        Description: '菜单是否禁用',
        Type: 'boolean',
        Default: ''
      },
      {
        key: '2',
        Property: 'getPopupContainer',
        Description: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
        Type: 'Function(triggerNode)',
        Default: ''
      },
      {
        key: '3',
        Property: 'overlay(v-slot)',
        Description: '菜单',
        Type: 'menu',
        Default: ''
      },
      {
        key: '4',
        Property: 'overlayClassName',
        Description: '下拉根元素的类名称',
        Type: 'string',
        Default: '-'
      },
      {
        key: '5',
        Property: 'overlayStyle',
        Description: '下拉根元素的样式',
        Type: 'object',
        Default: ''
      },
      {
        key: '6',
        Property: 'placement',
        Description: '菜单弹出位置: bottomLeft bottomCenter bottomRight topLeft topCenter topRight',
        Type: 'String',
        Default: 'bottomLeft'
      },
      {
        key: '7',
        Property: 'trigger',
        Description: '触发下拉的行为, 移动端不支持 hover',
        Type: 'Array<click|hover|contextmenu>',
        Default: "['hover']"
      },
      {
        key: '8',
        Property: 'visible(v-model)',
        Description: '菜单是否显示',
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
        Property: 'visibleChange',
        Description: '菜单显示状态改变时调用，参数为 visible',
        func: 'function(visible)'
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
        Property: 'disabled',
        Description: '菜单是否禁用',
        Type: 'boolean',
        Default: ''
      },
      {
        key: '2',
        Property: 'icon',
        Description: '右侧的 icon',
        Type: 'slot',
        Default: ''
      },
      {
        key: '3',
        Property: 'overlay(v-slot)',
        Description: '菜单',
        Type: 'menu',
        Default: ''
      },
      {
        key: '4',
        Property: 'size',
        Description: '按钮大小，和 Button 一致',
        Type: 'string',
        Default: 'default'
      },
      {
        key: '5',
        Property: 'type',
        Description: '按钮类型，和 Button 一致',
        Type: 'string',
        Default: 'default'
      },
      {
        key: '6',
        Property: 'placement',
        Description: '菜单弹出位置: bottomLeft bottomCenter bottomRight topLeft topCenter topRight',
        Type: 'String',
        Default: 'bottomLeft'
      },
      {
        key: '7',
        Property: 'trigger',
        Description: '触发下拉的行为, 移动端不支持 hover',
        Type: 'Array<click|hover|contextmenu>',
        Default: "['hover']"
      },
      {
        key: '8',
        Property: 'visible(v-model)',
        Description: '菜单是否显示',
        Type: 'boolean',
        Default: '-'
      }
    ])
    const dataSource4 = reactive([
      {
        key: '1',
        Property: 'click',
        Description: '点击左侧按钮的回调，和 Button 一致',
        func: 'function'
      },
      {
        key: '2',
        Property: 'visibleChange',
        Description: '菜单显示状态改变时调用，参数为 visible',
        func: 'function(visible)'
      }
    ])
    return {
      dataSource1,
      columns1,
      dataSource2,
      columns2,
      dataSource3,
      dataSource4
    }
  }
})
</script>

<style lang="less">
.dropdown-page {
  margin-bottom: 30px;
}
</style>
