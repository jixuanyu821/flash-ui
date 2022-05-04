<!--
 * @Author: jixuanyu
 * @Date: 2022-01-23 13:55:16
 * @LastEditors: jixuanyu
 * @Description: 基础范围选择
-->
<template>
  <div class="content">
    <h1>日期时间选择</h1>
    <h3>增加选择时间功能，当 showTime 为一个对象时，其属性会传递给内建的 TimePicker</h3>
    <a-space direction="vertical" :size="12">
      <z-date-picker show-time placeholder="选择时间" @change="onChange" @ok="onOk" />
      <z-range-picker
        :show-time="{ format: 'HH:mm' }"
        format="YYYY-MM-DD HH:mm"
        :placeholder="['开始时间', '结束时间']"
        @change="onRangeChange"
        @ok="onRangeOk"
      />
    </a-space>
    <div style=" overflow: hidden; margin-top: 24px">
      <textarea id="base5" cols="3" />
    </div>
  </div>
</template>
<script>
import ZDatePicker from '@lib/date-picker/date-picker'
import ZRangePicker from '@lib/date-picker/range-picker'
import { defineComponent } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
export default defineComponent({
  components: {
    ZDatePicker,
    ZRangePicker
  },
  setup() {
    const onChange = (value, dateString) => {
      console.log('Selected Time: ', value)
      console.log('Formatted Selected Time: ', dateString)
    }

    const onOk = value => {
      console.log('onOk: ', value)
    }

    const onRangeChange = (value, dateString) => {
      console.log('Selected Time: ', value)
      console.log('Formatted Selected Time: ', dateString)
    }

    const onRangeOk = value => {
      console.log('onOk: ', value)
    }
    return {
      onChange,
      onOk,
      onRangeChange,
      onRangeOk
    }
  },
  mounted() {
    let myTextarea = document.getElementById('base5')
    let CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    CodeMirrorEditor.setValue(`<template>
      <div class="content">
        <h1>日期时间选择</h1>
        <a-space direction="vertical" :size="12">
          <z-date-picker show-time placeholder="选择时间" @change="onChange" @ok="onOk" />
          <z-range-picker
            :show-time="{ format: 'HH:mm' }"
            format="YYYY-MM-DD HH:mm"
            :placeholder="['开始时间', '结束时间']"
            @change="onRangeChange"
            @ok="onRangeOk"
          />
        </a-space>
      </div>
    </template>
    <script>
    import { defineComponent } from 'vue';
    export default defineComponent({
      setup() {
        const onChange = (value, dateString) => {
          console.log('Selected Time: ', value)
          console.log('Formatted Selected Time: ', dateString)
        }

        const onOk = value => {
          console.log('onOk: ', value)
        }

        const onRangeChange = (value, dateString) => {
          console.log('Selected Time: ', value)
          console.log('Formatted Selected Time: ', dateString)
        }

        const onRangeOk = value => {
          console.log('onOk: ', value)
        }
        return {
          onChange,
          onOk,
          onRangeChange,
          onRangeOk
        }
      }
    });
    <\/script>`)
  }
})
</script>
<style scoped>
 .content{
   margin-bottom: 16px;
 }
</style>
