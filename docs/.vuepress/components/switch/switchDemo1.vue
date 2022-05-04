<template>
  <z-switch v-model:checked="checked" />
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const checked = ref(true)
      return {
        checked
      }
    }
  })
</script>
    