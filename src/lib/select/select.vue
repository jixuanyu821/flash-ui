<!-- wyf 2022-1-24 -->
<template>
  <a-select
    :ref="refSelect"
    v-model:value="value1"
    :placeholder="placeholder"
    :disabled="disabled"
    :mode="mode"
    :options="options"
    :show-search="showSearch"
    :allow-clear="allowClear"
    :bordered="bordered"
    :first-active-value="firstActiveValue"
    :default-open="defaultOpen"
    :auto-clear-search-value="autoClearSearchValue"
    :autofocus="autofocus"
    :default-active-first-option="defaultActiveFirstOption"
    :dropdown-class-name="dropdownClassName"
    :dropdown-match-select-width="dropdownMatchSelectWidth"
    :dropdown-style="dropdownStyle"
    :dropdown-menu-style="dropdownMenuStyle"
    :get-popup-container="getPopupContainer"
    :option-filter-prop="optionFilterProp"
    :show-arrow="showArrow"
    @deselect="deselect"
    @inputKeyDown="inputKeyDown"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @popupScroll="popupScroll"
    @search="search"
    @select="select"
    @dropdownVisibleChange="dropdownVisibleChange"
  >
    <slot />
    <template v-if="$slots.suffixIcon" #suffixIcon>
      <slot name="suffixIcon" />
    </template>
    <template v-if="$slots.removeIcon" #removeIcon>
      <slot name="removeIcon" />
    </template>
    <template v-if="$slots.clearIcon" #clearIcon>
      <slot name="clearIcon" />
    </template>
    <template v-if="$slots.dropdownRender" #dropdownRender="{ menuNode: menu }">
      <slot name="dropdownRender" :menu="menu" />
    </template>
    <template v-if="$slots.maxTagPlaceholder" #maxTagPlaceholder>
      <slot name="maxTagPlaceholder" />
    </template>
    <template v-if="$slots.notFoundContent" #notFoundContent>
      <slot name="notFoundContent" />
    </template>
    <template v-if="$slots.menuItemSelectedIcon" #menuItemSelectedIcon>
      <slot name="menuItemSelectedIcon" />
    </template>
    <template v-if="$slots.tagRender" #tagRender>
      <slot name="tagRender" />
    </template>
  </a-select>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZSelect',
  props: {
    value: {
      type: String || Array,
      default: undefined
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: undefined
    },
    refSelect: {
      type: String,
      default: 'select'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: ''
    },
    showSearch: {
      type: Boolean,
      default: false
    },
    firstActiveValue: {
      type: Array,
      default: undefined
    },
    defaultOpen: {
      type: Boolean,
      default: undefined
    },
    autoClearSearchValue: {
      type: Boolean,
      default: true
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: true
    },
    dropdownClassName: {
      type: String,
      default: undefined
    },
    dropdownMatchSelectWidth: {
      type: Boolean || Number,
      default: undefined
    },
    dropdownStyle: {
      type: Object,
      default: undefined
    },
    dropdownMenuStyle: {
      type: Object,
      default: undefined
    },
    getPopupContainer: {
      type: Function,
      default: undefined
    },
    optionFilterProp: {
      type: String,
      default: undefined
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    value1: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      }
    }
  },
  methods: {
    deselect(value) {
      this.$emit('deselect', value)
    },
    inputKeyDown(e) {
      this.$emit('inputKeyDown', e)
    },
    mouseenter(e) {
      this.$emit('mouseenter', e)
    },
    mouseleave(e) {
      this.$emit('mouseleave', e)
    },
    popupScroll(e) {
      this.$emit('popupScroll', e)
    },
    search(value) {
      this.$emit('search', value)
    },
    select(value) {
      this.$emit('select', value)
    },
    dropdownVisibleChange(value) {
      this.$emit('dropdownVisibleChange', value)
    }
  }
})
</script>

<style lang="less">
</style>
