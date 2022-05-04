<template>
  <a-checkbox v-model:checked="check" :disabled="disabled" :indeterminate="indeterminate" :autofocus="autofocus">
    <slot />
  </a-checkbox>
</template>
<script>
// import { defineComponent, toRef } from 'vue'
import { Checkbox } from 'ant-design-vue'
export default {
  name: 'ZCheckbox',
  components: {
    ACheckbox: Checkbox
  },
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    checked: {
      type: [String, Boolean],
      default: undefined
    }
  },
  computed: {
    check: {
      get() {
        return this.checked
      },
      set(val) {
        this.$emit('update:checked', val)
      }
    }
  }
}
</script>
