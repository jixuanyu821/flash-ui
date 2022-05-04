<!-- wyf 2022-1-20 -->
<template>
  <a-textarea
    v-model:value="iptValue"
    :disabled="disabled"
    :placeholder="placeholder"
    :show-count="showCount"
    :maxlength="maxlength"
    :allow-clear="allowClear"
    :autosize="autosize"
    @pressEnter="pressEnter"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZTextarea',
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
    showCount: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 10000
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: Boolean || Object,
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
  },
  methods: {
    pressEnter(e) {
      this.$emit('pressEnter', e)
    }
  }
})
</script>
