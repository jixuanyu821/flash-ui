<!-- wyf 2022-3-1 -->
<template>
  <a-menu
    :ref="menuRef"
    v-model:openKeys="openKeys1"
    v-model:selectedKeys="selectedKeys1"
    class="menu-css"
    :mode="mode"
    :theme="theme"
    :force-sub-menu-render="forceSubMenuRender"
    :inline-collapsed="inlineCollapsed"
    :inline-indent="inlineIndent"
    :multiple="multiple"
    :selectable="selectable"
    :sub-menu-close-delay="subMenuCloseDelay"
    :sub-menu-open-delay="subMenuOpenDelay"
    :overflowed-indicator="overflowedIndicator"
    :trigger-sub-menu-action="triggerSubMenuAction"
    @deselect="deselect"
    @openChange="openChange"
    @select="select"
  >
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <template v-if="$slots.switcherIcon" #switcherIcon>
      <slot name="switcherIcon" />
    </template>
    <slot />
  </a-menu>
</template>

<script>
import { defineComponent } from 'vue'
import { Menu } from 'ant-design-vue'
export default defineComponent({
  name: 'ZMenu',
  components: {
    'AMenu': Menu
  },
  props: {
    menuRef: {
      type: String,
      default: 'menu'
    },
    openKeys: {
      type: Array,
      default() {
        return []
      }
    },
    selectedKeys: {
      type: Array,
      default() {
        return []
      }
    },
    mode: {
      type: String,
      default: 'inline'
    },
    theme: {
      type: String,
      default: 'light'
    },
    forceSubMenuRender: {
      type: Boolean,
      default: false
    },
    inlineCollapsed: {
      type: Boolean,
      default: undefined
    },
    inlineIndent: {
      type: Number,
      default: 24
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: true
    },
    subMenuCloseDelay: {
      type: Number,
      default: 0.01
    },
    subMenuOpenDelay: {
      type: Number,
      default: 0
    },
    overflowedIndicator: {
      type: Function,
      default: undefined
    },
    triggerSubMenuAction: {
      type: String,
      default: 'hover'
    }
  },
  computed: {
    openKeys1: {
      get() {
        return this.openKeys
      },
      set(val) {
        this.$emit('update:openKeys', val)
      }
    },
    selectedKeys1: {
      get() {
        return this.selectedKeys
      },
      set(val) {
        this.$emit('update:selectedKeys', val)
      }
    }
  }
})
</script>

<style lang="less">
@import url('./index.less');
</style>
