<!-- wyf 2022-3-30 -->
<template>
  <div style="margin: 20px 0">
    <h1>基础</h1>

    <br>
    <div style="margin-top: 24px">
      <textarea id="base1" cols="3" />
    </div>
    <br>
    <!-- <h1>参数</h1>
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
    /> -->
    <br>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ConfigProvider',
  setup() {
    const dataSource1 = ref([
      {
        key: '1',
        Property: 'afterClose',
        Description: 'Modal 完全关闭后的回调',
        Type: 'function',
        Default: ''
      },
      {
        key: '2',
        Property: 'bodyStyle',
        Description: 'Modal body 样式',
        Type: 'object',
        Default: '{}'
      },
      {
        key: '3',
        Property: 'cancelButtonProps',
        Description: 'cancel 按钮 props',
        Type: '',
        Default: ''
      },
      {
        key: '4',
        Property: 'cancelText',
        Description: '取消按钮文字',
        Type: 'string | slot',
        Default: '取消'
      },
      {
        key: '5',
        Property: 'centered',
        Description: '垂直居中展示 Modal',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '6',
        Property: 'closable',
        Description: '是否显示右上角的关闭按钮',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '7',
        Property: 'closeIcon',
        Description: '自定义关闭图标',
        Type: 'slot',
        Default: ''
      },
      {
        key: '8',
        Property: 'confirmLoading',
        Description: '确定按钮 loading',
        Type: 'boolean',
        Default: ''
      },
      {
        key: '9',
        Property: 'destroyOnClose',
        Description: '关闭时销毁 Modal 里的子元素',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '10',
        Property: 'dialogClass',
        Description: '可用于设置浮层的类名',
        Type: 'string',
        Default: ''
      },
      {
        key: '11',
        Property: 'dialogStyle',
        Description: '可用于设置浮层的样式，调整浮层位置等',
        Type: 'object',
        Default: ''
      },
      {
        key: '12',
        Property: 'footer',
        Description: '底部内容，当不需要默认底部按钮时，可以设为 :footer="null"',
        Type: 'string|slot',
        Default: '确定取消按钮'
      },
      {
        key: '13',
        Property: 'forceRender',
        Description: '强制渲染 Modal',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '14',
        Property: 'getContainer',
        Description: '指定 Modal 挂载的 HTML 节点',
        Type: '(instance): HTMLElement',
        Default: '() => document.body'
      },
      {
        key: '15',
        Property: 'keyboard',
        Description: '是否支持键盘 esc 关闭',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '16',
        Property: 'mask',
        Description: '是否展示遮罩',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '17',
        Property: 'maskClosable',
        Description: '点击蒙层是否允许关闭',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '18',
        Property: 'maskStyle',
        Description: '遮罩样式',
        Type: 'object',
        Default: '{}'
      },
      {
        key: '19',
        Property: 'okButtonProps',
        Description: 'ok 按钮 props',
        Type: '',
        Default: ''
      },
      {
        key: '20',
        Property: 'okText',
        Description: '确认按钮文字',
        Type: 'string|slot',
        Default: '确认'
      },
      {
        key: '21',
        Property: 'okType',
        Description: '确认按钮类型',
        Type: 'string',
        Default: 'primary'
      },
      {
        key: '22',
        Property: 'title',
        Description: '标题',
        Type: 'string|slot',
        Default: ''
      },
      {
        key: '23',
        Property: 'visible(v-model)',
        Description: '对话框是否可见',
        Type: 'boolean',
        Default: ''
      },
      {
        key: '24',
        Property: 'width',
        Description: '宽度',
        Type: 'string|number',
        Default: '520'
      },
      {
        key: '25',
        Property: 'wrapClassName',
        Description: '对话框外层容器的类名',
        Type: 'string',
        Default: ''
      },
      {
        key: '26',
        Property: 'zIndex',
        Description: '设置 Modal 的 z-index',
        Type: 'Number',
        Default: '1000'
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
        Property: 'cancel',
        Description: '点击遮罩层或右上角叉或取消按钮的回调',
        func: 'function(e)'
      },
      {
        key: '2',
        Property: 'ok',
        Description: '点击确定回调',
        func: 'function(e)'
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
    return {
      dataSource1,
      columns1,
      dataSource2,
      columns2
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
      ``
    )
  }
})
</script>
