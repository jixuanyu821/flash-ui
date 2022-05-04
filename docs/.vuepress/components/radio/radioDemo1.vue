<template>
  <z-radio v-model:checked="check">单选</z-radio>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RadioDemo1',
  setup(){
    const check = ref(false)
    return {
      check
    }
  }
})
</script>
