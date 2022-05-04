<template>
  <z-radio v-model:checked="check2" :disabled="disabled">单选</z-radio>
  <div style="margin: 5px 0"></div>
  <z-radio v-model:checked="check3" :disabled="!disabled">禁用</z-radio>
  <div style="margin: 5px 0"></div>
  <z-button @click="toggleDisabled">切换</z-button>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RadioDemo2',
  setup(){
    const check2 = ref(false)
    const check3 = ref(false)
    const disabled = ref(false)
    const toggleDisabled = () => {
      disabled.value = !disabled.value
    }
    return {
      check2,
      check3,
      disabled,
      toggleDisabled
    }
  }
})
</script>
