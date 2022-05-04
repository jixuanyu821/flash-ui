<!-- wyf 2022-2-10 -->
<template>
  <a-tag
    v-model:visible="visible1"
    v-model:checked="checked1"
    :closable="closable"
    :color="color"
    @close="close"
  >
    <slot />
    <template v-if="$slots.closeIcon" #closeIcon>
      <slot name="closeIcon" />
    </template>
    <template v-if="$slots.icon" #icon>
      <slot name="icon" />
    </template>
  </a-tag>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZTag',
  props: {
    closable: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#EBECF1'
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    visible1: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    },
    checked1: {
      get() {
        return this.checked
      },
      set(val) {
        this.$emit('update:checked', val)
      }
    }
  },
  methods: {
    close(e) {
      this.$emit('close', e)
    }
  }
})
</script>

<style lang="less">
</style>
