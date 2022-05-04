<template>
  <z-input v-model:value="value1" prefix="￥" suffix="RMB" />
  <div style="margin: 24px 0" />
  <z-input v-model:value="value2">
    <template #prefix>
      <user-outlined />
    </template>
    <template #suffix>
      <info-circle-outlined />
    </template>
  </z-input>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'InputDemo2',
  setup(){
    const value1 = ref('')
    const value2 = ref('')
    return {
      value1,
      value2
    }
  }
})
</script>
