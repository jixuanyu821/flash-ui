<template>
  <div>
    <ZPagination v-model:current="current" :total="50" show-quick-jumper />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const current=ref(2)
    return {current}
  },
})
</script>
