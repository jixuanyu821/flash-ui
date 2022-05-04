<!-- wyf 2022-3-30 -->
<template>
  <a-input-number
    v-model:value="value1"
    :autofocus="autofocus"
    :bordered="bordered"
    :controls="controls"
    :decimal-separator="decimalSeparator"
    :default-value="defaultValue"
    :disabled="disabled"
    :formatter="formatter"
    :keyboard="keyboard"
    :max="max"
    :min="min"
    :parser="parser"
    :precision="precision"
    :size="size"
    :step="step"
    :string-mode="stringMode"
  >
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>
    <template v-if="$slots.addonAfter" #addonAfter>
      <slot name="addonAfter" />
    </template>
    <template v-if="$slots.addonBefore" #addonBefore>
      <slot name="addonBefore" />
    </template>
    <slot />
  </a-input-number>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZInputNumber',
  props: {
    value: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    decimalSeparator: {
      type: String,
      default: undefined
    },
    defaultValue: {
      type: Number,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    formatter: {
      type: Function,
      default: undefined
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    max: {
      type: Number,
      default: undefined
    },
    min: {
      type: Number,
      default: undefined
    },
    parser: {
      type: Function,
      default: undefined
    },
    precision: {
      type: Number,
      default: undefined
    },
    size: {
      type: String,
      default: undefined
    },
    step: {
      type: Number || String,
      default: 1
    },
    stringMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    value1: {
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
