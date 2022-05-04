<!-- wyf 2022-3-29 -->
<template>
  <div style="margin: 20px 0">
    <h1>基础</h1>
    <z-input-number v-model:value="value" :min="1" :max="10" />
    <br>
    <div style="margin-top: 24px; height: 50px; overflow: hidden">
      <textarea id="base1" cols="3" />
    </div>
    <br>
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
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'InputNumber',
  setup() {
    const value = ref(3)
    const dataSource1 = ref([
      {
        key: '1',
        Property: 'addonAfter',
        Description: '带标签的 input,设置后置标签',
        Type: 'slot',
        Default: ''
      },
      {
        key: '2',
        Property: 'addonBefore',
        Description: '带标签的 input,设置前置标签',
        Type: 'slot',
        Default: ''
      },
      {
        key: '3',
        Property: 'autofocus',
        Description: '自动获取焦点',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '4',
        Property: 'bordered',
        Description: '是否有边框',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '5',
        Property: 'controls',
        Description: '是否显示增减按钮',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '6',
        Property: 'decimalSeparator',
        Description: '小数点',
        Type: 'string',
        Default: ''
      },
      {
        key: '7',
        Property: 'defaultValue',
        Description: '初始值',
        Type: 'number',
        Default: ''
      },
      {
        key: '8',
        Property: 'disabled',
        Description: '禁用',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '9',
        Property: 'formatter',
        Description: '指定输入框展示值的格式',
        Type: 'function(value: number | string, info: { userTyping: boolean, input: string }): string',
        Default: ''
      },
      {
        key: '10',
        Property: 'keyboard',
        Description: '是否启用键盘快捷行为',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '11',
        Property: 'max',
        Description: '最大值',
        Type: 'number',
        Default: ''
      },
      {
        key: '12',
        Property: 'min',
        Description: '最小值',
        Type: 'number',
        Default: ''
      },
      {
        key: '13',
        Property: 'parser',
        Description: '指定从 formatter 里转换回数字的方式，和 formatter 搭配使用',
        Type: 'function( string): number',
        Default: ''
      },
      {
        key: '14',
        Property: 'precision',
        Description: '数值精度',
        Type: 'number',
        Default: ''
      },
      {
        key: '15',
        Property: 'prefix',
        Description: '带有前缀图标的 input',
        Type: 'slot',
        Default: ''
      },
      {
        key: '16',
        Property: 'size',
        Description: '输入框大小',
        Type: 'string',
        Default: ''
      },
      {
        key: '17',
        Property: 'step',
        Description: '每次改变步数，可以为小数',
        Type: 'number|string',
        Default: '1'
      },
      {
        key: '18',
        Property: 'stringMode',
        Description: '字符值模式，开启后支持高精度小数。同时 change 事件将返回 string 类型',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '19',
        Property: 'value(v-model)',
        Description: '当前值',
        Type: 'number',
        Default: ''
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
        Description: '变化回调',
        func: 'Function(value: number | string)'
      },
      {
        key: '2',
        Property: 'pressEnter',
        Description: '按下回车的回调',
        func: 'function(e)'
      },
      {
        key: '3',
        Property: 'step',
        Description: '点击上下箭头的回调',
        func: "(value: number, info: { offset: number, type: 'up' | 'down' }) => void"
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
      value,
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
      `<z-input-number v-model:value="value" :min="1" :max="10" />`)
  }
})
</script>
