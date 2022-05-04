<template>
  <div>
    <ZPagination v-model:current="current1" :total="50" />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const current1=ref(3)
    return {
      current1
    }
  },
})
</script>
