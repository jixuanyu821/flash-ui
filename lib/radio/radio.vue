<template>
  <a-radio
    v-model:checked="checked"
    :disabled="disabled"
  >
    <slot/>
  </a-radio>
</template>
<script>
import { defineComponent, toRef } from 'vue'
export default defineComponent({
  name: 'ZRadio',
  props: {
    disabled: Boolean,
    autofocus: Boolean,
  },
  setup(props) {
    let { checked } = toRef(props)
    return {
      checked,
    }
  },
})
</script>
