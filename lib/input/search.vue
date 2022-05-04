<!-- wyf 2022-1-20 -->
<template>
  <a-input-search
    v-model:value="iptValue"
    :disabled="disabled"
    :placeholder="placeholder"
    :allow-clear="allowClear"
    :loading="loading"
    :enter-button="enterButton"
    @search="search"
  >
    <template v-if="$slots.enterButton" #enterButton>
      <slot name="enterButton" />
    </template>
  </a-input-search>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZSearch',
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
    loading: {
      type: Boolean,
      default: false
    },
    enterButton: {
      type: Boolean,
      default: false
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
    search(value, event) {
      this.$emit('search', value, event)
    }
  }
})
</script>
