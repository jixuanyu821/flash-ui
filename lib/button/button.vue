<!-- wyf 2022-1-18 -->
<template>
  <a-button
    :type="type"
    :size="size"
    :disabled="disabled"
    :block="block"
    :ghost="ghost"
    :href="href"
    :loading="loading"
    :shape="shape"
    :target="target"
  >
    <slot />
    <template #icon>
      <slot name="icon" />
    </template>
  </a-button>
</template>

<script>
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
// const Group = Button.Group
export default defineComponent({
  name: 'ZButton',
  components: {
    AButton: Button
    // AButtonGroup: Group
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'middle'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: undefined
    },
    target: {
      type: String,
      default: undefined
    }
  }
})
</script>
