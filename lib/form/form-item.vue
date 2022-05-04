<template>
  <a-form-item
    :name="name"
    :rules="rules"
    :auto-link="autoLink"
    :colon="colon"
    :has-feedback="hasFeedback"
    :label-col="labelCol"
    :label-align="labelAlign"
    :required="required"
    :validate-status="validateStatus"
    :wrapper-col="wrapperCol"
    :label="label"
    :extra="extra"
    :help="help"
    :validate-first="validateFirst"
    :validate-trigger="validateTrigger"
  >
    <slot />
    <template v-if="$slots.extra" #extra>
      <slot v-if="extra === undefined" name="extra" />
    </template>
    <template v-if="$slots.help" #help>
      <slot v-if="help === undefined" name="help" />
    </template>
    <template v-if="$slots.label" #label>
      <slot v-if="label === undefined" name="label" />
    </template>
  </a-form-item>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ZFormItem',
  props: {
    name: {
      type: [String, Array],
      default: undefined
    },
    rules: {
      type: [Object, Array],
      default: undefined
    },
    autoLink: {
      type: Boolean,
      default: true
    },
    colon: {
      type: Boolean,
      default: true
    },
    extra: {
      type: String,
      default: undefined
    },
    hasFeedback: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: undefined
    },
    htmlFor: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: undefined
    },
    labelCol: {
      type: Object,
      default: undefined
    },
    labelAlign: {
      type: String,
      default: 'right'
    },
    required: {
      type: Boolean,
      default: false
    },
    validateStatus: {
      type: String,
      default: undefined
    },
    wrapperCol: {
      type: Object,
      default: undefined
    },
    validateFirst: {
      type: Boolean,
      default: false
    },
    validateTrigger: {
      type: [String, Array],
      default: 'change'
    }
  }
})
</script>
