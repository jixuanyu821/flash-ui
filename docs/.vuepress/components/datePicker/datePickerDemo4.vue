<template>
  <a-space direction="vertical" :size="12" style="width: 400px">
    <z-date-picker v-model:value="value1" />
    <z-date-picker v-model:value="value2" disabled picker="month" />
    <z-range-picker v-model:value="value3" disabled />
    <z-range-picker v-model:value="value4" :disabled="[false, true]" />
  </a-space>
</template>
<script>
import { defineComponent, ref } from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'DatePickerDemo4',
  setup(){
    const dateFormat = 'YYYY-MM-DD'
    const value1 = ref(dayjs('2015-06-06', dateFormat))
    const value2 = ref(dayjs('2015-06', 'YYYY-MM'))
    const value3 = ref([dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)])
    const value4 = ref([dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)])
    return {
      value1,
      value2,
      value3,
      value4
    }
  }
})
</script>
