<!-- wyf 2022-3-28 -->
<template>
  <a-col
    :flex="flex"
    :offset="offset"
    :order="order"
    :pull="pull"
    :push="push"
    :span="span"
    :xxxl="xxxl"
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
    :xxl="xxl"
  >
    <slot />
  </a-col>
</template>

<script>
import { defineComponent } from 'vue'
import { Col } from 'ant-design-vue'
export default defineComponent({
  name: 'ZCol',
  components: {
    ACol: Col
  },
  props: {
    flex: {
      type: String || Number,
      default: undefined
    },
    offset: {
      type: Number,
      default: 0
    },
    order: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    span: {
      type: Number,
      default: undefined
    },
    xxxl: {
      type: Number || Object,
      default: undefined
    },
    xs: {
      type: Number || Object,
      default: undefined
    },
    sm: {
      type: Number || Object,
      default: undefined
    },
    md: {
      type: Number || Object,
      default: undefined
    },
    lg: {
      type: Number || Object,
      default: undefined
    },
    xl: {
      type: Number || Object,
      default: undefined
    },
    xxl: {
      type: Number || Object,
      default: undefined
    }
  }
})
</script>
