<!-- wyf 2022-2-28 -->
<template>
  <div class="menu-page">
    <part1 />
    <h3>其他相关demo可以参考ant-design</h3>
    <h1>Menu 参数</h1>
    <a-table
      :data-source="dataSource1"
      :columns="columns1"
      :pagination="false"
    />
    <br>
    <h1>Menu 事件</h1>
    <a-table
      :data-source="dataSource2"
      :columns="columns2"
      :pagination="false"
    />
    <br>
    <h1>Menu.Item 参数</h1>
    <a-table
      :data-source="dataSource3"
      :columns="columns1"
      :pagination="false"
    />
    <br>
    <h1>Menu.SubMenu 参数</h1>
    <a-table
      :data-source="dataSource4"
      :columns="columns1"
      :pagination="false"
    />
    <br>
    <h4>Menu.SubMenu 的子元素必须是 MenuItem 或者 SubMenu.</h4>
    <h4>SubMenu 必须传递 key,如不传递,该 SubMenu 下子元素将提前渲染,而且部分场景无法进行有效高亮。</h4>
    <br>
    <h1>SubMenu 事件</h1>
    <a-table
      :data-source="dataSource5"
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
  name: 'Menu',
  components: { part1 },
  setup() {
    const dataSource1 = reactive([
      {
        key: '1',
        Property: 'forceSubMenuRender',
        Description: '在子菜单展示之前就渲染进 DOM',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '2',
        Property: 'inlineCollapsed',
        Description: 'inline 时菜单是否收起状态',
        Type: 'boolean',
        Default: '-'
      },
      {
        key: '3',
        Property: 'inlineIndent',
        Description: 'inline 模式的菜单缩进宽度',
        Type: 'number',
        Default: '24'
      },
      {
        key: '4',
        Property: 'mode',
        Description: '菜单类型,现在支持垂直、水平、和内嵌模式三种',
        Type: 'boovertical | horizontal | inline',
        Default: 'inline'
      },
      {
        key: '5',
        Property: 'multiple',
        Description: '是否允许多选',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '6',
        Property: 'openKeys(v-model)',
        Description: '当前展开的 SubMenu 菜单项 key 数组',
        Type: 'string[]',
        Default: ''
      },
      {
        key: '7',
        Property: 'selectable',
        Description: '是否允许选中',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '8',
        Property: 'selectedKeys(v-model)',
        Description: '当前选中的菜单项 key 数组',
        Type: 'string[]',
        Default: ''
      },
      {
        key: '9',
        Property: 'subMenuCloseDelay',
        Description: '用户鼠标离开子菜单后关闭延时,单位:秒',
        Type: 'number',
        Default: '0.1'
      },
      {
        key: '10',
        Property: 'subMenuOpenDelay',
        Description: '用户鼠标进入子菜单后开启延时,单位:秒',
        Type: 'number',
        Default: '0'
      },
      {
        key: '11',
        Property: 'theme',
        Description: '主题颜色',
        Type: 'string: light dark',
        Default: 'light'
      },
      {
        key: '12',
        Property: 'overflowedIndicator',
        Description: '自定义 Menu 折叠时的图标',
        Type: 'DOM',
        Default: '<span>···</span>'
      },
      {
        key: '13',
        Property: 'triggerSubMenuAction',
        Description: '修改 Menu 子菜单的触发方式',
        Type: 'click | hover',
        Default: 'hover'
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
        Property: 'click',
        Description: '点击 MenuItem 调用此函数',
        func: 'function({ item, key, keyPath })'
      },
      {
        key: '2',
        Property: 'deselect',
        Description: '取消选中时调用,仅在 multiple 生效',
        func: 'function({ item, key, selectedKeys })'
      },
      {
        key: '3',
        Property: 'openChange',
        Description: 'SubMenu 展开/关闭的回调',
        func: 'function(openKeys: string[])'
      },
      {
        key: '4',
        Property: 'select',
        Description: '被选中时调用',
        func: 'function({ item, key, selectedKeys })'
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
        Description: '是否禁用',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '2',
        Property: 'keyVal',
        Description: 'item 的唯一标志',
        Type: 'string',
        Default: ''
      },
      {
        key: '3',
        Property: 'title',
        Description: '设置收缩时展示的悬浮标题',
        Type: 'string/slot',
        Default: ''
      },
      {
        key: '4',
        Property: 'icon',
        Description: '菜单图标',
        Type: 'slot',
        Default: ''
      }
    ])
    const dataSource4 = reactive([
      {
        key: '1',
        Property: 'popupClassName',
        Description: '子菜单样式',
        Type: 'string',
        Default: ''
      },
      {
        key: '2',
        Property: 'disabled',
        Description: '是否禁用',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '3',
        Property: 'keyVal',
        Description: '唯一标志, 必填',
        Type: 'string',
        Default: ''
      },
      {
        key: '4',
        Property: 'title',
        Description: '子菜单项值',
        Type: 'string|slot',
        Default: ''
      },
      {
        key: '5',
        Property: 'expandIcon',
        Description: '自定义 Menu 展开收起图标',
        Type: 'slot',
        Default: '箭头图标'
      },
      {
        key: '6',
        Property: 'icon',
        Description: '菜单图标',
        Type: 'slot',
        Default: ''
      }
    ])
    const dataSource5 = reactive([
      {
        key: '1',
        Property: 'titleClick',
        Description: '点击子菜单标题',
        func: '({ key, domEvent })'
      }
    ])
    return {
      dataSource1,
      columns1,
      dataSource2,
      columns2,
      dataSource3,
      dataSource4,
      dataSource5
    }
  }
})
</script>

<style lang="less">
.menu-page {
  margin-bottom: 30px;
}
</style>
