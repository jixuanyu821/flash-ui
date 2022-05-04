<template>
  <a-select-option :value="value" :disabled="disabled">
    <slot />
  </a-select-option>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ZSelectOption',
  props: {
    value: {
      default: '',
      type: String
    },
    disabled: Boolean
  }
})
</script>
