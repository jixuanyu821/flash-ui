<template>
  <a-space direction="vertical" :size="12" style="width: 400px">
    <z-range-picker v-model:value="value1" />
    <z-range-picker v-model:value="value2" show-time />
    <z-range-picker v-model:value="value3" picker="week" />
    <z-range-picker v-model:value="value4" picker="month" />
    <z-range-picker v-model:value="value5" picker="year" />
  </a-space>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DatePickerDemo2',
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
      value5
    }
  }
})
</script>
