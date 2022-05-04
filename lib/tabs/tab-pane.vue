<!-- wyf 2022-3-23 -->
<template>
  <a-tab-pane :key="key" :tab="tab" :force-render="forceRender">
    <template v-if="$slots.closeIcon" #closeIcon>
      <slot name="closeIcon" />
    </template>
    <slot />
  </a-tab-pane>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZTabPane',
  props: {
    key: {
      type: String,
      default: undefined
    },
    tab: {
      type: String,
      default: undefined
    },
    forceRender: {
      type: Boolean,
      default: undefined
    }
  }
})
</script>
