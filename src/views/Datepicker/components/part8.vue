<!--
 * @Author: jixuanyu
 * @Date: 2022-01-23 13:55:16
 * @LastEditors: jixuanyu
 * @Description: 基础范围选择
-->
<template>
  <div class="content">
    <h1>不可选择日期和时间</h1>
    <h3>可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用</h3>
    <a-space direction="vertical" :size="12">
      <z-date-picker
        v-model:value="value1"
        format="YYYY-MM-DD HH:mm:ss"
        :disabled-date="disabledDate"
        :disabled-time="disabledDateTime"
        :show-time="{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }"
      />
      <z-date-picker v-model:value="value2" :disabled-date="disabledDate" picker="month" />
      <z-range-picker v-model:value="value3" :disabled-date="disabledDate" />
      <z-range-picker
        v-model:value="value4"
        style="width: 400px"
        :disabled-date="disabledDate"
        :disabled-time="disabledRangeTime"
        :show-time="{
          hideDisabledOptions: true,
          defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
        }"
        format="YYYY-MM-DD HH:mm:ss"
      />
    </a-space>
    <div style=" overflow: hidden; margin-top: 24px">
      <textarea id="base8" cols="3" />
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
    ZRangePicker,
    ZDatePicker
  },
  setup() {
    const range = (start, end) => {
      const result = []

      for (let i = start; i < end; i++) {
        result.push(i)
      }

      return result
    }

    const disabledDate = current => {
      // Can not select days before today and today
      return current && current < dayjs().endOf('day')
    }

    const disabledDateTime = () => {
      return {
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56]
      }
    }

    const disabledRangeTime = (_, type) => {
      if (type === 'start') {
        return {
          disabledHours: () => range(0, 60).splice(4, 20),
          disabledMinutes: () => range(30, 60),
          disabledSeconds: () => [55, 56]
        }
      }

      return {
        disabledHours: () => range(0, 60).splice(20, 4),
        disabledMinutes: () => range(0, 31),
        disabledSeconds: () => [55, 56]
      }
    }

    return {
      dayjs,
      value1: ref(),
      value2: ref(),
      value3: ref(),
      value4: ref(),
      disabledDate,
      disabledDateTime,
      disabledRangeTime
    }
  },
  mounted() {
    let myTextarea = document.getElementById('base8')
    let CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    CodeMirrorEditor.setValue(`<template>
  <div class="content">
    <a-space direction="vertical" :size="12">
      <z-date-picker
        v-model:value="value1"
        format="YYYY-MM-DD HH:mm:ss"
        :disabled-date="disabledDate"
        :disabled-time="disabledDateTime"
        :show-time="{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }"
      />
      <z-date-picker v-model:value="value2" :disabled-date="disabledDate" picker="month" />
      <z-range-picker v-model:value="value3" :disabled-date="disabledDate" />
      <z-range-picker
        v-model:value="value4"
        style="width: 400px"
        :disabled-date="disabledDate"
        :disabled-time="disabledRangeTime"
        :show-time="{
          hideDisabledOptions: true,
          defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
        }"
        format="YYYY-MM-DD HH:mm:ss"
      />
    </a-space>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const range = (start, end) => {
      const result = []

      for (let i = start; i < end; i++) {
        result.push(i)
      }

      return result
    }

    const disabledDate = current => {
      // Can not select days before today and today
      return current && current < dayjs().endOf('day')
    }

    const disabledDateTime = () => {
      return {
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56]
      }
    }

    const disabledRangeTime = (_, type) => {
      if (type === 'start') {
        return {
          disabledHours: () => range(0, 60).splice(4, 20),
          disabledMinutes: () => range(30, 60),
          disabledSeconds: () => [55, 56]
        }
      }

      return {
        disabledHours: () => range(0, 60).splice(20, 4),
        disabledMinutes: () => range(0, 31),
        disabledSeconds: () => [55, 56]
      }
    }

    return {
      dayjs,
      value1: ref(),
      value2: ref(),
      value3: ref(),
      value4: ref(),
      disabledDate,
      disabledDateTime,
      disabledRangeTime
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
