<!-- wyf 2022-3-21 -->
<template>
  <div style="margin: 20px 0">
    <h1>基础</h1>
    <z-divider />
    <z-divider>text</z-divider>
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
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Divider',
  setup() {
    const dataSource1 = ref([
      {
        key: '1',
        Property: 'dashed',
        Description: '是否虚线',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '2',
        Property: 'orientation',
        Description: '分割线标题的位置',
        Type: 'string',
        Default: 'center'
      },
      {
        key: '3',
        Property: 'orientationMargin',
        Description: '标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right	',
        Type: 'string | number',
        Default: ''
      },
      {
        key: '4',
        Property: 'plain',
        Description: '文字是否显示为普通正文样式',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '5',
        Property: 'type',
        Description: '水平还是垂直类型',
        Type: 'string: horizontal | vertical',
        Default: 'horizontal'
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
    return {
      dataSource1,
      columns1
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
      `<z-divider />
<z-divider>text</z-divider>`)
  }
})
</script>
