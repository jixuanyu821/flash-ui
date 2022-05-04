<template>
  <a-radio-group
    v-model:value="value"
    :disabled="disabled"
  >
    <slot />
  </a-radio-group>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ZRadioGroup',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    buttonStyle: {
      type: String,
      default: 'outline'
    },
    name: {
      type: String,
      default: ''
    },
    option: {
      type: [Array, String],
      default() {
        return ''
      }
    },
    optionType: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
})
</script>
