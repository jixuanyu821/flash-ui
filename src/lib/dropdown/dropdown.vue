<!-- wyf 2022-3-14 -->
<template>
  <a-dropdown
    :disabled="disabled"
    :get-popup-container="getPopupContainer"
    :overlay-class-name="overlayClassName"
    :overlay-style="overlayStyle"
    :placement="placement"
    :trigger="trigger"
    :visible="visible"
    @visibleChange="visibleChange"
  >
    <template v-if="$slots.overlay" #overlay>
      <slot name="overlay" />
    </template>
    <slot />
  </a-dropdown>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZDropdown',
  props: {
    getPopupContainer: {
      type: Function,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    overlayClassName: {
      type: String,
      default: undefined
    },
    overlayStyle: {
      type: Object,
      default: undefined
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
