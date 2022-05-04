<!-- wyf 2022-3-30 -->
<template>
  <a-config-provider
    :auto-insert-space-in-button="autoInsertSpaceInButton"
    :component-size="componentSize"
    :csp="csp"
    :direction="direction"
    :dropdown-match-select-width="dropdownMatchSelectWidth"
    :form="form"
    :get-popup-container="getPopupContainer"
    :get-target-container="getTargetContainer"
    :input="input"
    :locale="locale"
    :page-header="pageHeader"
    :prefix-cls="prefixCls"
    :space="space"
    :transform-cell-text="transformCellText"
    :virtual="virtual"
  >
    <template v-if="$slots.renderEmpty" #renderEmpty>
      <slot name="renderEmpty" />
    </template>
    <slot />
  </a-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
export default defineComponent({
  name: 'ZConfigProvider',
  components: {
    AConfigProvider: ConfigProvider
  },
  props: {
    autoInsertSpaceInButton: {
      type: Boolean,
      default: true
    },
    componentSize: {
      type: String,
      default: undefined
    },
    csp: {
      type: Object,
      default: undefined
    },
    direction: {
      type: String,
      default: 'ltr'
    },
    dropdownMatchSelectWidth: {
      type: Number || Boolean,
      default: undefined
    },
    form: {
      type: Object,
      default: undefined
    },
    getPopupContainer: {
      type: Function,
      default: undefined
    },
    getTargetContainer: {
      type: Function,
      default: undefined
    },
    input: {
      type: Object,
      default: undefined
    },
    locale: {
      type: Object,
      default: undefined
    },
    pageHeader: {
      type: Object,
      default: undefined
    },
    prefixCls: {
      type: String,
      default: 'ant'
    },
    space: {
      type: Object,
      default: undefined
    },
    transformCellText: {
      type: Function,
      default: undefined
    },
    virtual: {
      type: Boolean,
      default: undefined
    }
  }
})
</script>
