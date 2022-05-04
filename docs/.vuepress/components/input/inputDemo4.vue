<template>
  <z-textarea v-model:value="value" />
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'InputDemo4',
  setup(){
    const value = ref('')
    return {
      value
    }
  }
})
</script>
