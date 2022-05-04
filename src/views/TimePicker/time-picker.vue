<!-- wyf 2022-3-29 -->
<template>
  <div style="margin: 20px 0">
    <h1>基础</h1>
    <z-time-picker v-model:value="value" @openChange="openChange" />
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
  name: 'TimePicker',
  setup() {
    const value = ref('')
    const dataSource1 = ref([
      {
        key: '1',
        Property: 'allowClear',
        Description: '是否展示清除按钮',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '2',
        Property: 'autofocus',
        Description: '自动获取焦点',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '3',
        Property: 'bordered',
        Description: '是否有边框',
        Type: 'boolean',
        Default: 'true'
      },
      {
        key: '4',
        Property: 'clearIcon',
        Description: '自定义的清除图标',
        Type: 'slot',
        Default: ''
      },
      {
        key: '5',
        Property: 'clearText',
        Description: '清除按钮的提示文案',
        Type: 'string',
        Default: 'clear'
      },
      {
        key: '6',
        Property: 'disabled',
        Description: '禁用全部操作',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '7',
        Property: 'disabledHours',
        Description: '禁止选择部分小时选项',
        Type: 'function()',
        Default: ''
      },
      {
        key: '8',
        Property: 'disabledMinutes',
        Description: '禁止选择部分分钟选项',
        Type: 'function(selectedHour)',
        Default: ''
      },
      {
        key: '9',
        Property: 'disabledSeconds',
        Description: '禁止选择部分秒选项',
        Type: 'function(selectedHour, selectedMinute)',
        Default: ''
      },
      {
        key: '10',
        Property: 'format',
        Description: '展示的时间格式',
        Type: 'string',
        Default: 'HH:mm:ss'
      },
      {
        key: '11',
        Property: 'getPopupContainer',
        Description: '定义浮层的容器，默认为 body 上新建 div',
        Type: 'function(trigger)',
        Default: ''
      },
      {
        key: '12',
        Property: 'hideDisabledOptions',
        Description: '隐藏禁止选择的选项',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '13',
        Property: 'hourStep',
        Description: '小时选项间隔',
        Type: 'number',
        Default: '1'
      },
      {
        key: '14',
        Property: 'inputReadOnly',
        Description: '设置输入框为只读（避免在移动设备上打开虚拟键盘）',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '15',
        Property: 'minuteStep',
        Description: '分钟选项间隔',
        Type: 'number',
        Default: '1'
      },
      {
        key: '16',
        Property: 'open(v-model)',
        Description: '面板是否打开',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '17',
        Property: 'placeholder',
        Description: '没有值的时候显示的内容',
        Type: 'string | [string, string]',
        Default: '请选择时间'
      },
      {
        key: '18',
        Property: 'popupClassName',
        Description: '弹出层类名',
        Type: 'string',
        Default: ''
      },
      {
        key: '19',
        Property: 'popupStyle',
        Description: '弹出层样式对象',
        Type: 'object',
        Default: ''
      },
      {
        key: '20',
        Property: 'renderExtraFooter',
        Description: '选择框底部显示自定义的内容',
        Type: 'slot',
        Default: ''
      },
      {
        key: '21',
        Property: 'secondStep',
        Description: '秒选项间隔',
        Type: 'number',
        Default: '1'
      },
      {
        key: '22',
        Property: 'showNow',
        Description: '面板是否显示“此刻”按钮',
        Type: 'boolean',
        Default: ''
      },
      {
        key: '23',
        Property: 'suffixIcon',
        Description: '自定义的选择框后缀图标',
        Type: 'slot',
        Default: ''
      },
      {
        key: '24',
        Property: 'use12Hours',
        Description: '使用 12 小时制，为 true 时 format 默认为 h:mm:ss a',
        Type: 'boolean',
        Default: 'false'
      },
      {
        key: '25',
        Property: 'value(v-model)',
        Description: '当前时间',
        Type: 'dayjs',
        Default: ''
      },
      {
        key: '26',
        Property: 'valueFormat',
        Description: '可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 dayjs 对象',
        Type: 'string',
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
        Description: '时间发生变化的回调',
        func: 'function(time: dayjs | string, timeString: string): void'
      },
      {
        key: '2',
        Property: 'openChange',
        Description: '面板打开/关闭时的回调',
        func: '(open: boolean): void'
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
      `<a-time-picker v-model:value="value" />`)
  },
  methods: {
    openChange(e) {
      // console.log(e, '00000')
    }
  }
})
</script>

