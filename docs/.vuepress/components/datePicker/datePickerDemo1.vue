<template>
  <a-space direction="vertical" :size="12" style="width: 240px">
    <z-date-picker v-model:value="value1" />
    <z-date-picker v-model:value="value2" picker="week" />
    <z-date-picker v-model:value="value3" picker="month" />
    <z-date-picker v-model:value="value4" picker="quarter" />
    <z-date-picker v-model:value="value5" picker="year" />
  </a-space>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'DatePickerDemo1',
  setup(){
    const value1 = ref()
    const value2 = ref()
    const value3 = ref()
    const value4 = ref()
    const value5 = ref()
    return {
      value1,
      value2,
      value3,
      value4,
      value5,
    }
  }
})
</script>
