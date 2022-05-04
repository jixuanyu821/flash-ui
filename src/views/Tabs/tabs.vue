<!-- wyf 2022-3-24 -->
<template>
  <div style="margin: 20px 0">
    <h1>基础</h1>
    <z-tabs v-model:activeKey="activeKey">
      <z-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</z-tab-pane>
      <z-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</z-tab-pane>
      <z-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</z-tab-pane>
    </z-tabs>
    <br>
    <div style="margin-top: 24px">
      <textarea id="base1" cols="3" />
    </div>
    <br>
    <h1>Tabs参数</h1>
    <a-table
      :data-source="dataSource1"
      :columns="columns1"
      :pagination="false"
    />
    <br>
    <h1>Tabs事件</h1>
    <a-table
      :data-source="dataSource2"
      :columns="columns2"
      :pagination="false"
    />
    <br>
    <h1>Tabs插槽</h1>
    <a-table
      :data-source="dataSource3"
      :columns="columns3"
      :pagination="false"
    />
    <br>
    <h1>Tabs.TabPane 参数</h1>
    <a-table
      :data-source="dataSource4"
      :columns="columns1"
      :pagination="false"
    />
    <br>
    <h1>Tabs.TabPane 插槽</h1>
    <a-table
      :data-source="dataSource5"
      :columns="columns3"
      :pagination="false"
    />
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Tabs',
  setup() {
    const activeKey = ref('1')
    const dataSource1 = ref([
      {
        key: '1',
        Property: 'activeKey(v-model)',
        Description: '当前激活 tab 面板的 key',
        Type: 'string',
        Default: ''
      },
      {
        key: '2',
        Property: 'animated',
        Description: '是否使用动画切换 Tabs,在 `tabPosition=top',
        Type: 'bottom` 时有效',
        Default: 'boolean true, 当 type="card" 时为 false'
      },
      {
        key: '3',
        Property: 'centered',
        Description: '标签居中展示',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '4',
        Property: 'destroyInactiveTabPane',
        Description: '被隐藏时是否销毁 DOM 结构',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '5',
        Property: 'hideAdd',
        Description: '是否隐藏加号图标，在 type="editable-card" 时有效',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '6',
        Property: 'size',
        Description: '大小，提供 large default 和 small 三种大小',
        Type: 'string',
        Default: 'default'
      },
      {
        key: '7',
        Property: 'tabBarGutter',
        Description: 'tabs 之间的间隙',
        Type: 'number',
        Default: ''
      },
      {
        key: '8',
        Property: 'tabBarStyle',
        Description: 'tab bar 的样式对象',
        Type: 'object',
        Default: ''
      },
      {
        key: '9',
        Property: 'tabPosition',
        Description: '页签位置，可选值有 top right bottom left',
        Type: 'string',
        Default: 'top'
      },
      {
        key: '10',
        Property: 'type',
        Description: '页签的基本样式，可选 line、card editable-card 类型',
        Type: 'string',
        Default: 'line'
      }
    ])
    const columns1 = ref([
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
    const dataSource2 = ref([
      {
        key: '1',
        Property: 'change',
        Description: '切换面板的回调',
        func: 'Function(activeKey) {}'
      },
      {
        key: '2',
        Property: 'edit',
        Description: '新增和删除页签的回调，在 type="editable-card" 时有效',
        func: '(targetKey, action): void'
      },
      {
        key: '3',
        Property: 'tabClick',
        Description: 'tab 被点击的回调',
        func: 'Function'
      },
      {
        key: '4',
        Property: 'tabScroll',
        Description: '滚动 TabBar 是触发',
        func: "{ direction: 'left' | 'right' | 'top' | 'bottom' }"
      }
    ])
    const columns2 = ref([
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
    const columns3 = ref([
      {
        title: '插槽名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '说明',
        dataIndex: 'Description',
        key: 'Description'
      },
      {
        title: '参数',
        dataIndex: 'params',
        key: 'params'
      }
    ])
    const dataSource3 = ref([
      {
        key: '1',
        name: 'addIcon',
        Description: '自定义添加按钮',
        params: ''
      },
      {
        key: '2',
        name: 'leftExtra',
        Description: 'tab bar 上左侧额外的元素',
        params: ''
      },
      {
        key: '3',
        name: 'moreIcon',
        Description: '自定义折叠 icon',
        params: ''
      },
      {
        key: '4',
        name: 'renderTabBar',
        Description: '替换 TabBar,用于二次封装标签头',
        params: '{ DefaultTabBar }'
      },
      {
        key: '5',
        name: 'rightExtra',
        Description: 'tab bar 上右侧额外的元素',
        params: ''
      }
    ])
    const dataSource4 = ref([
      {
        key: '1',
        Property: 'forceRender',
        Description: '被隐藏时是否渲染 DOM 结构',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '2',
        Property: 'key',
        Description: '对应 activeKey',
        Type: 'string',
        Default: ''
      },
      {
        key: '3',
        Property: 'tab',
        Description: '选项卡头显示文字',
        Type: 'string',
        Default: ''
      }
    ])
    const dataSource5 = ref([
      {
        key: '1',
        name: 'closeIcon',
        Description: '自定义关闭图标，在 type="editable-card"时有效',
        params: ''
      }
    ])
    return {
      activeKey,
      dataSource1,
      columns1,
      dataSource2,
      columns2,
      columns3,
      dataSource3,
      dataSource4,
      dataSource5
    }
  },
  mounted() {
    let myTextarea1 = document.getElementById('base1')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea1, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<template>
  <z-tabs v-model:activeKey="activeKey">
    <z-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</z-tab-pane>
    <z-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</z-tab-pane>
    <z-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</z-tab-pane>
  </z-tabs>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const activeKey = ref('1')
      return {
        activeKey
      }
    }
  })
<\/script>
    `
    )
  }
})
</script>
