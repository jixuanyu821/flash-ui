<template>
  <z-checkbox v-model:checked="check">单选</z-checkbox>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'checkboxDemo1',
  setup(){
    const check = ref(false)
    return {
      check
    }
  }
})
</script>
