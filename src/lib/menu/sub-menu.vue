<!-- wyf 2022-3-1 -->
<template>
  <a-sub-menu
    :key="keyVal"
    :popup-class-name="popupClassName"
    :title="title"
    :disabled="disabled"
    @titleClick="titleClick"
  >
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <template v-if="$slots.icon" #icon>
      <slot name="icon" />
    </template>
    <template v-if="$slots.expandIcon" #expandIcon>
      <slot name="expandIcon" />
    </template>
    <slot />
  </a-sub-menu>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZSubMenu',
  props: {
    keyVal: {
      type: String,
      default: undefined
    },
    popupClassName: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    titleClick(e) {
      this.$emit('titleClick', e)
    }
  }
})
</script>

<style lang="less">
@import url('./index.less');
</style>
