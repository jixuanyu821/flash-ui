<!-- wyf 2022-3-17 -->
<template>
  <a-divider
    :dashed="dashed"
    :orientation="orientation"
    :orientation-margin="orientationMargin"
    :plain="plain"
    :type="type"
  >
    <slot />
  </a-divider>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZDivider',
  props: {
    dashed: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      default: 'center'
    },
    orientationMargin: {
      type: String || Number,
      default: undefined
    },
    plain: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'horizontal'
    }
  }
})
</script>
