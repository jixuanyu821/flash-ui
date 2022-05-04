<template>
  <z-password v-model:value="value" />
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'InputDemo3',
  setup(){
    const value = ref('')
    return {
      value
    }
  }
})
</script>
