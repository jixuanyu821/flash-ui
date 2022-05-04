<template>
  <z-input v-model:value="value1" addon-before="Http://" addon-after=".com" />
  <div style="margin: 24px 0" />
  <z-input v-model:value="value2">
    <template #addonBefore>
      <star-outlined />
    </template>
    <template #addonAfter>
      <star-filled />
    </template>
  </z-input>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'InputDemo5',
  setup(){
    const value = ref('')
    const value1 = ref('')
    const value2 = ref('')
    return {
      value1,
      value2
    }
  }
})
</script>
