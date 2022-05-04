<template>
  <a-space direction="vertical" :size="12" style="width: 400px">
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
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DatePickerDemo3',
  setup(){
    const value1 = ref()
    const value2 = ref()
    const value3 = ref()
    const value4 = ref()
    const value5 = ref()
    const value6 = ref()
    const value7 = ref()
    const value8 = ref()
    const value9 = ref()
    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9
    }
  }
})
</script>
