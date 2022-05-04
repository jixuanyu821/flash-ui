<!--
 * @Author: jixuanyu
 * @Date: 2022-01-23 13:55:16
 * @LastEditors: jixuanyu
 * @Description: 基础范围选择
-->
<template>
  <div class="content">
    <h1>无边框</h1>
    <a-space direction="vertical" :size="12">
      <z-date-picker v-model:value="value1" :bordered="false" />
      <z-date-picker v-model:value="value2" picker="week" :bordered="false" />
      <z-date-picker v-model:value="value3" picker="month" :bordered="false" />
      <z-date-picker v-model:value="value4" picker="quarter" :bordered="false" />
      <z-date-picker v-model:value="value5" picker="year" :bordered="false" />

      <z-range-picker v-model:value="value6" :bordered="false" />
      <z-range-picker v-model:value="value7" picker="week" :bordered="false" />
      <z-range-picker v-model:value="value8" picker="month" :bordered="false" />
      <z-range-picker v-model:value="value9" picker="year" :bordered="false" />
    </a-space>
    <div style=" margin-top: 24px">
      <textarea id="base3" cols="3" />
    </div>
  </div>
</template>
<script>
import ZDatePicker from '@lib/date-picker/date-picker'
import ZRangePicker from '@lib/date-picker/range-picker'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
export default defineComponent({
  components: {
    ZDatePicker,
    ZRangePicker
  },
  setup() {
    const date1 = ref()
    const date2 = ref()
    const date3 = ref()
    const date4 = ref()
    const date5 = ref()
    const date6 = ref()
    const date7 = ref()
    const date8 = ref()
    const date9 = ref()
    return {
      date1,
      date2,
      date3,
      date4,
      date5,
      date6,
      date7,
      date8,
      date9,
      locale
    }
  },
  mounted() {
    let myTextarea = document.getElementById('base3')
    let CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    CodeMirrorEditor.setValue(`<a-space direction="vertical" :size="12">
  <z-date-picker v-model:value="value1" :bordered="false" />
  <z-date-picker v-model:value="value2" picker="week" :bordered="false" />
  <z-date-picker v-model:value="value3" picker="month" :bordered="false" />
  <z-date-picker v-model:value="value4" picker="quarter" :bordered="false" />
  <z-date-picker v-model:value="value5" picker="year" :bordered="false" />

  <z-range-picker v-model:value="value6" :bordered="false" />
  <z-range-picker v-model:value="value7" picker="week" :bordered="false" />
  <z-range-picker v-model:value="value8" picker="month" :bordered="false" />
  <z-range-picker v-model:value="value9" picker="year" :bordered="false" />
</a-space>`)
  }
})
</script>
<style scoped>
 .content{
   margin-bottom: 16px;
 }
</style>
