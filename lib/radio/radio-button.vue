<template>
  <a-radio-button :autofocus="autofocus" :value="value" :disabled="disabled">
    <slot />
  </a-radio-button>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ZRadioButton',
  props: {
    value: {
      default: '',
      type: String
    },
    disabled: Boolean,
    autofocus: Boolean
  }
})
</script>
