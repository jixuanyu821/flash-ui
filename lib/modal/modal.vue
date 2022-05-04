<!-- wyf 2022-3-28 -->
<template>
  <a-modal
    v-model:visible="visible1"
    :title="title"
    :after-close="afterClose"
    :body-style="bodyStyle"
    :cancel-button-props="cancelButtonProps"
    :cancel-text="cancelText"
    :centered="centered"
    :closable="closable"
    :confirm-loading="confirmLoading"
    :destroy-on-close="destroyOnClose"
    :dialog-class="dialogClass"
    :dialog-style="dialogStyle"
    :footer="footer"
    :force-render="forceRender"
    :get-container="getContainer"
    :keyboard="keyboard"
    :mask="mask"
    :mask-closable="maskClosable"
    :mask-style="maskStyle"
    :ok-button-props="okButtonProps"
    :ok-text="okText"
    :ok-type="okType"
    :width="width"
    :wrap-class-name="wrapClassName"
    :z-index="zIndex"
  >
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <template v-if="$slots.closeIcon" #closeIcon>
      <slot name="closeIcon" />
    </template>
    <template v-if="$slots.cancelText" #cancelText>
      <slot name="cancelText" />
    </template>
    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
    <template v-if="$slots.okText" #okText>
      <slot name="okText" />
    </template>
    <slot />
  </a-modal>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZModal',
  props: {
    visible: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    afterClose: {
      type: Function,
      default: undefined
    },
    bodyStyle: {
      type: Object,
      default: undefined
    },
    cancelButtonProps: {
      type: Object,
      default: undefined
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    centered: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    confirmLoading: {
      type: Boolean,
      default: undefined
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    dialogClass: {
      type: String,
      default: undefined
    },
    dialogStyle: {
      type: Object,
      default: undefined
    },
    footer: {
      type: String,
      default: undefined
    },
    forceRender: {
      type: Boolean,
      default: false
    },
    getContainer: {
      type: Function,
      default: undefined
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    maskStyle: {
      type: Object,
      default: undefined
    },
    okButtonProps: {
      type: Object,
      default: undefined
    },
    okText: {
      type: String,
      default: '确定'
    },
    okType: {
      type: String,
      default: 'primary'
    },
    width: {
      type: String || Number,
      default: 520
    },
    wrapClassName: {
      type: String,
      default: undefined
    },
    zIndex: {
      type: Number,
      default: 1000
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
    }
  }
})
</script>
