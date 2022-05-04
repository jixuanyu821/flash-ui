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
      <z-date-picker v-model:value="date1" :format="dateFormat" />
      <z-date-picker v-model:value="date2" :format="dateFormatList" />
      <z-date-picker v-model:value="date3" :format="monthFormat" picker="month" />
      <z-range-picker v-model:value="date4" :format="dateFormat" />
      <z-date-picker v-model:value="date5" :format="customFormat" />
    </a-space>
    <div style=" overflow: hidden; margin-top: 24px">
      <textarea id="base4" cols="3" />
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import ZDatePicker from '@lib/date-picker/date-picker'
import ZRangePicker from '@lib/date-picker/range-picker'
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
    const dateFormat = 'YYYY/MM/DD'
    const monthFormat = 'YYYY/MM'
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
    return {
      date1: ref(dayjs('2015/01/01', dateFormat)),
      date2: ref(dayjs('01/01/2015', dateFormatList[0])),
      date3: ref(dayjs('2015/01', monthFormat)),
      date4: ref([dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]),
      date5: ref(dayjs('2015/01/01', dateFormat)),
      dateFormat,
      monthFormat,
      dateFormatList,
      customFormat: value => `custom format: ${value.format(dateFormat)}`
    }
  },
  mounted() {
    let myTextarea = document.getElementById('base4')
    let CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    CodeMirrorEditor.setValue(`<template>
  <div class="content">
    <h1>日期格式</h1>
    <a-space direction="vertical" :size="12">
      <z-date-picker v-model:value="date1" :format="dateFormat" />
      <z-date-picker v-model:value="date2" :format="dateFormatList" />
      <z-date-picker v-model:value="date3" :format="monthFormat" picker="month" />
      <z-range-picker v-model:value="date4" :format="dateFormat" />
      <z-date-picker v-model:value="date5" :format="customFormat" />
    </a-space>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    ZDatePicker,
    ZRangePicker
  },
  setup() {
    const dateFormat = 'YYYY/MM/DD'
    const monthFormat = 'YYYY/MM'
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
    return {
      date1: ref(dayjs('2015/01/01', dateFormat)),
      date2: ref(dayjs('01/01/2015', dateFormatList[0])),
      date3: ref(dayjs('2015/01', monthFormat)),
      date4: ref([dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]),
      date5: ref(dayjs('2015/01/01', dateFormat)),
      dateFormat,
      monthFormat,
      dateFormatList,
      customFormat: value => \`custom format: \${value.format(dateFormat)}\`
    }
  },
<\/script>`)
  }
})
</script>
<style scoped>
 .content{
   margin-bottom: 16px;
 }
</style>
