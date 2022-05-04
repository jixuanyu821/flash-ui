<!--
 * @Author: jixuanyu
 * @Date: 2022-01-23 13:55:16
 * @LastEditors: jixuanyu
 * @Description: 基础范围选择
-->
<template>
  <div class="content">
    <h1>基础范围选择</h1>
    <a-space direction="vertical" :size="12">
      <z-range-picker v-model:value="date1" />
      <z-range-picker v-model:value="date2" picker="week" suffix-icon="321" />
      <z-range-picker v-model:value="date3" picker="month" />
      <z-range-picker v-model:value="date4" picker="quarter" />
      <z-range-picker v-model:value="date5" picker="year" />
    </a-space>
    <div style="height: 200px; overflow: hidden; margin-top: 24px">
      <textarea id="base2" cols="3" />
    </div>
  </div>
</template>
<script>
import ZRangePicker from '@/lib/date-picker/range-picker'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
export default defineComponent({
  components: {
    ZRangePicker
  },
  setup() {
    const date1 = ref()
    const date2 = ref()
    const date3 = ref()
    const date4 = ref()
    const date5 = ref()
    return {
      date1,
      date2,
      date3,
      date4,
      date5,
      locale
    }
  },
  mounted() {
    let myTextarea = document.getElementById('base2')
    let CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    CodeMirrorEditor.setValue(`<a-space direction="vertical" :size="12">
  <z-range-picker v-model:value="date1" />
  <z-range-picker v-model:value="date2" picker="week" suffix-icon="321" />
  <z-range-picker v-model:value="date3" picker="month" />
  <z-range-picker v-model:value="date4" picker="quarter" />
  <z-range-picker v-model:value="date5" picker="year" />
</a-space>`)
  }
})
</script>
<style scoped>
 .content{
   margin-bottom: 16px;
 }
</style>
