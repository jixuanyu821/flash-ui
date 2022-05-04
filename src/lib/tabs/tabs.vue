<!-- wyf 2022-3-23 -->
<template>
  <a-tabs
    v-model:activeKey="activeKey1"
    :animated="animated"
    :centered="centered"
    :destroy-inactive-tab-pane="destroyInactiveTabPane"
    :hide-add="hideAdd"
    :size="size"
    :tab-bar-gutter="tabBarGutter"
    :tab-bar-style="tabBarStyle"
    :tab-position="tabPosition"
    :type="type"
    @change="change"
    @edit="edit"
    @tabClick="tabClick"
    @tabScroll="tabScroll"
  >
    <template v-if="$slots.addIcon" #addIcon>
      <slot name="addIcon" />
    </template>
    <template v-if="$slots.leftExtra" #leftExtra>
      <slot name="leftExtra" />
    </template>
    <template v-if="$slots.moreIcon" #moreIcon>
      <slot name="moreIcon" />
    </template>
    <template v-if="$slots.renderTabBar" #renderTabBar>
      <slot name="renderTabBar" />
    </template>
    <template v-if="$slots.rightExtra" #rightExtra>
      <slot name="rightExtra" />
    </template>
    <slot />
  </a-tabs>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZTabs',
  props: {
    activeKey: {
      type: String,
      default: ''
    },
    animated: {
      type: Boolean,
      default: undefined
    },
    centered: {
      type: Boolean,
      default: false
    },
    destroyInactiveTabPane: {
      type: Boolean,
      default: false
    },
    hideAdd: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    tabBarGutter: {
      type: Number,
      default: undefined
    },
    tabBarStyle: {
      type: Object,
      default: undefined
    },
    tabPosition: {
      type: String,
      default: 'top'
    },
    type: {
      type: String,
      default: 'line'
    }
  },
  computed: {
    activeKey1: {
      get() {
        return this.activeKey
      },
      set(val) {
        this.$emit('update:activeKey', val)
      }
    }
  },
  methods: {
    change(activeKey) {
      this.$emit('change', activeKey)
    },
    edit(targetKey, action) {
      this.$emit('edit', targetKey, action)
    },
    tabClick(e) {
      this.$emit('tabClick', e)
    },
    tabScroll(e) {
      this.$emit('tabScroll', e)
    }
  }
})
</script>
