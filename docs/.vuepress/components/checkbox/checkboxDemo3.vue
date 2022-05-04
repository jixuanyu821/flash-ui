<template>
  <z-checkbox v-model:checked="check1" :disabled="disabled">未选中</z-checkbox>
  <div style="margin: 5px 0" />
  <z-checkbox v-model:checked="check2" :disabled="disabled">选中</z-checkbox>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'checkboxDemo3',
  setup(){
    const check1 = ref(false)
    const check2 = ref(true)
    const disabled = ref(true)
    return {
      check1,
      check2,
      disabled
    }
  }
})
</script>
