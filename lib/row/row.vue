<!-- wyf 2022-3-28 -->
<template>
  <a-row
    :align="align"
    :gutter="gutter"
    :justify="justify"
    :wrap="wrap"
  >
    <slot />
  </a-row>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZRow',
  props: {
    align: {
      type: String,
      default: 'top'
    },
    gutter: {
      type: Number || Object || Array,
      default: 0
    },
    justify: {
      type: String,
      default: 'start'
    },
    wrap: {
      type: Boolean,
      default: false
    }
  }
})
</script>
