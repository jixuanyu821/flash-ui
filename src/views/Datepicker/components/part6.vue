<!--
 * @Author: jixuanyu
 * @Date: 2022-01-23 13:55:16
 * @LastEditors: jixuanyu
 * @Description: 基础范围选择
-->
<template>
  <div class="content">
    <h1>禁用</h1>
    <h3>选择框的不可用状态</h3>
    <a-space direction="vertical" :size="12">
      <z-date-picker v-model:value="date1" />
      <z-date-picker v-model:value="date2" disabled picker="month" />
      <z-range-picker v-model:value="date3" disabled />
      <z-range-picker v-model:value="date4" :disabled="[false, true]" />
    </a-space>
    <div style=" overflow: hidden; margin-top: 24px">
      <textarea id="base6" cols="3" />
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { defineComponent, ref } from 'vue'
import ZDatePicker from '@/lib/date-picker/date-picker'
import ZRangePicker from '@/lib/date-picker/range-picker'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
export default defineComponent({
  components: {
    ZDatePicker,
    ZRangePicker
  },
  setup() {
    const dateFormat = 'YYYY-MM-DD'
    return {
      date1: ref(dayjs('2015-06-06', dateFormat)),
      date2: ref(dayjs('2015-06', 'YYYY-MM')),
      date3: ref([dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)]),
      date4: ref([dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)])
    }
  },
  mounted() {
    let myTextarea = document.getElementById('base6')
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
      <z-date-picker v-model:value="date1" />
      <z-date-picker v-model:value="date2" disabled picker="month" />
      <z-range-picker v-model:value="date3" disabled />
      <z-range-picker v-model:value="date4" :disabled="[false, true]" />
    </a-space>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const dateFormat = 'YYYY-MM-DD'
    return {
      date1: ref(dayjs('2015-06-06', dateFormat)),
      date2: ref(dayjs('2015-06', 'YYYY-MM')),
      date3: ref([dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)]),
      date4: ref([dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)])
    }
  },
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
