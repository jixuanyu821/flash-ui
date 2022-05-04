<template>
  <a-form
    ref="AForm"
    :model="model"
    :rules="rules"
    :hide-required-mark="hideRequiredMark"
    :label-align="labelAlign"
    :layout="layout"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    :colon="colon"
    :validate-on-rule-change="validateOnRuleChange"
    :scroll-to-first-error="scrollToFirstError"
    :name="name"
    :validate-trigger="validateTrigger"
    :no-style="noStyle"
  >
    <slot />
  </a-form>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ZForm',
  props: {
    model: {
      type: Object,
      default: undefined
    },
    rules: {
      type: Object,
      default: undefined
    },
    hideRequiredMark: {
      type: Boolean,
      default: false
    },
    labelAlign: {
      type: String,
      default: 'right'
    },
    layout: {
      type: String,
      default: 'horizontal'
    },
    labelCol: {
      type: Object,
      default: undefined
    },
    wrapperCol: {
      type: Object,
      default: undefined
    },
    colon: {
      type: Boolean,
      default: true
    },
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    scrollToFirstError: {
      type: [Boolean, Object],
      default: true
    },
    name: {
      type: String,
      default: undefined
    },
    validateTrigger: {
      type: [String, Array],
      default: 'change'
    },
    noStyle: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs['AForm'].validate().then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    validateFields() {
      return new Promise((resolve, reject) => {
        this.$refs['AForm'].validateFields().then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    scrollToField(name, options) {
      return this.$refs['AForm'].scrollToField(name, options)
    },
    resetFields() {
      return this.$refs['AForm'].resetFields()
    },
    clearValidate(name) {
      return this.$refs['AForm'].clearValidate(name)
    }
  }
})
</script>
