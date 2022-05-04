<template>
  <ZTag>Tag 1</ZTag>
  <ZTag><a href="https://www.baidu.com">百度</a></ZTag>
  <ZTag closable @close="close">可关闭</ZTag>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TagDemo1',
  setup() {
    const close = (e) => {
      console.log(e)
    }
    return { close }
  },
})
</script>

