<template>
  <a-input-group :compact="compact">
    <slot />
  </a-input-group>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ZInputGroup',
  props: {
    compact: {
      type: Boolean,
      default: true
    }
  }
})
</script>
