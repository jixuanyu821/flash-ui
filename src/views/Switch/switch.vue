<!-- wyf 2022-3-21 -->
<template>
  <div style="margin: 20px 0">
    <h1>基础</h1>
    <z-switch v-model:checked="checked" />
    <br>
    <div style="margin-top: 24px">
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
  name: 'Switch',
  setup() {
    const checked = ref(true)
    const dataSource1 = ref([
      {
        key: '1',
        Property: 'autofocus',
        Description: '组件自动获取焦点',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '2',
        Property: 'checked(v-model)',
        Description: '指定当前是否选中',
        Type: 'checkedValue | unCheckedValue',
        Default: 'false'
      },
      {
        key: '3',
        Property: 'checkedChildren',
        Description: '选中时的内容',
        Type: 'string',
        Default: ''
      },
      {
        key: '4',
        Property: 'checkedValue',
        Description: '选中时的值',
        Type: 'boolean | string | number',
        Default: 'true'
      },
      {
        key: '5',
        Property: 'disabled',
        Description: '是否禁用',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '6',
        Property: 'loading',
        Description: '加载中的开关',
        Type: 'string',
        Default: 'default'
      },
      {
        key: '7',
        Property: 'size',
        Description: '开关大小,可选值: default small',
        Type: 'string',
        Default: 'default'
      },
      {
        key: '8',
        Property: 'unCheckedChildren',
        Description: '非选中时的内容',
        Type: 'string',
        Default: ''
      },
      {
        key: '9',
        Property: 'unCheckedValue',
        Description: '非选中时的值',
        Type: 'boolean | string | number',
        Default: 'false'
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
        Description: '变化时回调函数',
        func: 'Function(checked: boolean | string | number, event: Event)'
      },
      {
        key: '2',
        Property: 'click',
        Description: '点击时回调函数',
        func: 'Function(checked: boolean | string | number, event: Event)'
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
      checked,
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
      `<template>
  <z-switch v-model:checked="checked" />
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const checked = ref(true)
      return {
        checked
      }
    }
  })
<\/script>
    `
    )
  }
})
</script>
