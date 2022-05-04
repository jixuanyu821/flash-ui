<!-- wyf 2022-3-14 -->
<template>
  <a-dropdown-button
    :disabled="disabled"
    :size="size"
    :type="type"
    :placement="placement"
    :trigger="trigger"
    :visible="visible"
    @visibleChange="visibleChange"
  >
    <template v-if="$slots.overlay" #overlay>
      <slot name="overlay" />
    </template>
    <template v-if="$slots.icon" #icon>
      <slot name="icon" />
    </template>
    <slot />
  </a-dropdown-button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZDropdownButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'default'
    },
    placement: {
      type: String,
      default: 'bottomLeft'
    },
    trigger: {
      type: Array,
      default() {
        return ['hover']
      }
    },
    visible: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    visibleChange(e) {
      this.$emit('visibleChange', e)
    }
  }
})
</script>

<style lang="less">
@import "./index.less";
</style>
