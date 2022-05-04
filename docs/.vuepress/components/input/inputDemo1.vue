<template>
  <z-input v-model:value="value" />
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'InputDemo1',
  setup(){
    const value = ref('')
    return {
      value
    }
  }
})
</script>
