<!-- wyf 2022-1-20 -->
<template>
  <a-input-password
    v-model:value="iptValue"
    :disabled="disabled"
    :placeholder="placeholder"
    :allow-clear="allowClear"
    :visibility-toggle="visibilityToggle"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZPassword',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    visibilityToggle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    iptValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      }
    }
  }
})
</script>
