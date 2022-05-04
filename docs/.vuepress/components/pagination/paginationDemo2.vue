<template>
  <ZPagination
    v-model:current="current"
    v-model:pageSize="pageSize"
    show-size-changer
    @showSizeChange="onShowSizeChange"
    :total="total"
  >
  </ZPagination>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const current = ref(2)
      const total = ref(500)
      const pageSizeRef = ref(10)
      const onShowSizeChange = (current, pageSize) => {
      console.log(current, pageSize);
    }
      return {
        current,
        total,
        pageSize: pageSizeRef,
        onShowSizeChange
      }
    }
  })
</script>
    