<!--
 * @Author: jixuanyu
 * @Date: 2022-01-23 13:55:16
 * @LastEditors: jixuanyu
 * @Description: 基础范围选择
-->
<template>
  <div class="content">
    <h1>选择不超过七天的范围</h1>
    <h3>这里举例如何用 onCalendarChange 和 disabledDate 来限制动态的日期区间选择。</h3>
    <z-range-picker
      :value="hackValue || value"
      :disabled-date="disabledDate"
      @change="onChange"
      @openChange="onOpenChange"
      @calendarChange="onCalendarChange"
    />
    <div style=" overflow: hidden; margin-top: 24px">
      <textarea id="base7" cols="3" />
    </div>
  </div>
</template>
<script>
// import dayjs from 'dayjs'
import { defineComponent, ref } from 'vue'
import ZRangePicker from '@lib/date-picker/range-picker'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
export default defineComponent({
  components: {
    ZRangePicker
  },
  setup() {
    const dates = ref()
    const value = ref()
    const hackValue = ref()

    const disabledDate = current => {
      if (!dates.value || dates.value.length === 0) {
        return false
      }

      const tooLate = dates.value[0] && current.diff(dates.value[0], 'days') > 7
      const tooEarly = dates.value[1] && dates.value[1].diff(current, 'days') > 7
      return tooEarly || tooLate
    }

    const onOpenChange = open => {
      if (open) {
        dates.value = []
        hackValue.value = []
      } else {
        hackValue.value = undefined
      }
    }

    const onChange = val => {
      value.value = val
    }

    const onCalendarChange = val => {
      dates.value = val
    }

    return {
      dates,
      value,
      hackValue,
      disabledDate,
      onOpenChange,
      onChange,
      onCalendarChange
    }
  },
  mounted() {
    let myTextarea = document.getElementById('base7')
    let CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    CodeMirrorEditor.setValue(`<template>
  <div class="content">
    <h1>日期时间选择</h1>
    <z-range-picker
      :value="hackValue || value"
      :disabled-date="disabledDate"
      @change="onChange"
      @openChange="onOpenChange"
      @calendarChange="onCalendarChange"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const dates = ref()
    const value = ref()
    const hackValue = ref()

    const disabledDate = current => {
      if (!dates.value || dates.value.length === 0) {
        return false
      }

      const tooLate = dates.value[0] && current.diff(dates.value[0], 'days') > 7
      const tooEarly = dates.value[1] && dates.value[1].diff(current, 'days') > 7
      return tooEarly || tooLate
    }

    const onOpenChange = open => {
      if (open) {
        dates.value = []
        hackValue.value = []
      } else {
        hackValue.value = undefined
      }
    }

    const onChange = val => {
      value.value = val
    }

    const onCalendarChange = val => {
      dates.value = val
    }

    return {
      dates,
      value,
      hackValue,
      disabledDate,
      onOpenChange,
      onChange,
      onCalendarChange
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
