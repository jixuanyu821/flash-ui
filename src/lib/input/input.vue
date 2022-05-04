<!-- wyf 2022-1-20 -->
<template>
  <a-input
    :ref="inputRef"
    v-model:value="iptValue"
    :disabled="disabled"
    :placeholder="placeholder"
    :allow-clear="allowClear"
    :bordered="bordered"
    :default-value="defaultValue"
  >
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>
    <template v-if="$slots.suffix" #suffix>
      <slot name="suffix" />
    </template>
    <template v-if="$slots.addonAfter" #addonAfter>
      <slot name="addonAfter" />
    </template>
    <template v-if="$slots.addonBefore" #addonBefore>
      <slot name="addonBefore" />
    </template>
    <slot />
  </a-input>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZInput',
  props: {
    inputRef: {
      type: String,
      default: 'inputRef'
    },
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
    bordered: {
      type: Boolean,
      default: true
    },
    defaultValue: {
      type: String,
      default: undefined
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
