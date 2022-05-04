<!-- wyf 2022-3-1 -->
<template>
  <a-menu-item :key="keyVal" :title="title" :disabled="disabled">
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <template v-if="$slots.icon" #icon>
      <slot name="icon" />
    </template>
    <slot />
  </a-menu-item>
</template>

<script>
import { defineComponent } from 'vue'
import { MenuItem } from 'ant-design-vue'
export default defineComponent({
  name: 'ZMenuItem',
  components: {
    'AMenuItem': MenuItem
  },
  props: {
    keyVal: {
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
  }
})
</script>

<style lang="less">
@import url('./index.less');
</style>
