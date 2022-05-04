<!-- wyf 2022-3-28 -->
<template>
  <div style="margin: 20px 0">
    <h1>基础</h1>
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
    </a-row>
    <br>
    <div style="margin-top: 24px">
      <textarea id="base1" cols="3" />
    </div>
    <br>
    <h1>Row参数</h1>
    <a-table
      :data-source="dataSource1"
      :columns="columns1"
      :pagination="false"
    />
    <br>
    <h1>Col参数</h1>
    <a-table
      :data-source="dataSource2"
      :columns="columns1"
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
  name: 'Grid',
  setup() {
    const dataSource1 = ref([
      {
        key: '1',
        Property: 'align',
        Description: 'flex 布局下的垂直对齐方式: top middle bottom',
        Type: 'string',
        Default: 'top'
      },
      {
        key: '2',
        Property: 'gutter',
        Description: '栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距](1.5.0 后支持)',
        Type: 'number/object/array',
        Default: '0'
      },
      {
        key: '3',
        Property: 'justify',
        Description: 'flex 布局下的水平排列方式: start end center space-around space-between',
        Type: 'string',
        Default: 'start'
      },
      {
        key: '4',
        Property: 'wrap',
        Description: '取消按钮文字',
        Type: 'boolean',
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
        Property: 'flex',
        Description: 'flex 布局填充',
        Type: 'string|number',
        Default: ''
      },
      {
        key: '2',
        Property: 'offset',
        Description: '栅格左侧的间隔格数，间隔内不可以有栅格',
        Type: 'number',
        Default: '0'
      },
      {
        key: '3',
        Property: 'order',
        Description: '栅格顺序,flex 布局模式下有效',
        Type: 'number',
        Default: '0'
      },
      {
        key: '4',
        Property: 'pull',
        Description: '栅格向左移动格数',
        Type: 'number',
        Default: '0'
      },
      {
        key: '5',
        Property: 'push',
        Description: '栅格向右移动格数',
        Type: 'number',
        Default: '0'
      },
      {
        key: '6',
        Property: 'span',
        Description: '栅格占位格数，为 0 时相当于 display: none',
        Type: 'number',
        Default: ''
      },
      {
        key: '7',
        Property: 'xxxl',
        Description: '≥2000px 响应式栅格，可为栅格数或一个包含其他属性的对象',
        Type: 'number|object',
        Default: ''
      },
      {
        key: '8',
        Property: 'xs',
        Description: '<576px 响应式栅格，可为栅格数或一个包含其他属性的对象',
        Type: 'number|object',
        Default: ''
      },
      {
        key: '9',
        Property: 'sm',
        Description: '≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象',
        Type: 'number|object',
        Default: ''
      },
      {
        key: '10',
        Property: 'md',
        Description: '≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
        Type: 'number|object',
        Default: ''
      },
      {
        key: '11',
        Property: 'lg',
        Description: '≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象',
        Type: 'number|object',
        Default: ''
      },
      {
        key: '12',
        Property: 'xl',
        Description: '≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象',
        Type: 'number|object',
        Default: ''
      },
      {
        key: '13',
        Property: 'xxl',
        Description: '≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象',
        Type: 'number|object',
        Default: ''
      }
    ])
    return {
      dataSource1,
      columns1,
      dataSource2
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
      `<a-row :gutter="16">
  <a-col class="gutter-row" :span="6">
    <div class="gutter-box">col-6</div>
  </a-col>
  <a-col class="gutter-row" :span="6">
    <div class="gutter-box">col-6</div>
  </a-col>
  <a-col class="gutter-row" :span="6">
    <div class="gutter-box">col-6</div>
  </a-col>
  <a-col class="gutter-row" :span="6">
    <div class="gutter-box">col-6</div>
  </a-col>
</a-row>
    `)
  }
})
</script>

<style lang="less" scoped>
.ant-row {
  width: 100%;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
</style>
