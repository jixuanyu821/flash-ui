<!-- wyf 2022-3-30 -->
<template>
  <a-time-picker
    v-model:value="value1"
    :allow-clear="allowClear"
    :autofocus="autofocus"
    :bordered="bordered"
    :clear-text="clearText"
    :disabled="disabled"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    :format="format"
    :get-popup-container="getPopupContainer"
    :hide-disabled-options="hideDisabledOptions"
    :hour-step="hourStep"
    :input-read-only="inputReadOnly"
    :minute-step="minuteStep"
    :placeholder="placeholder"
    :popup-class-name="popupClassName"
    :popup-style="popupStyle"
    :second-step="secondStep"
    :show-now="showNow"
    :use12-hours="use12Hours"
    :value-format="valueFormat"
  >
    <template v-if="$slots.clearIcon" #clearIcon>
      <slot name="clearIcon" />
    </template>
    <template v-if="$slots.renderExtraFooter" #renderExtraFooter>
      <slot name="renderExtraFooter" />
    </template>
    <template v-if="$slots.suffixIcon" #suffixIcon>
      <slot name="suffixIcon" />
    </template>
    <slot />
  </a-time-picker>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZTimePicker',
  props: {
    value: {
      type: String,
      default: ''
    },
    allowClear: {
      type: Boolean,
      default: true
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: true
    },
    clearText: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledHours: {
      type: Function,
      default: undefined
    },
    disabledMinutes: {
      type: Function,
      default: undefined
    },
    disabledSeconds: {
      type: Function,
      default: undefined
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    getPopupContainer: {
      type: Function,
      default: undefined
    },
    hideDisabledOptions: {
      type: Boolean,
      default: false
    },
    hourStep: {
      type: Number,
      default: 1
    },
    inputReadOnly: {
      type: Boolean,
      default: false
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String || Array,
      default: '请选择时间'
    },
    popupClassName: {
      type: String,
      default: undefined
    },
    popupStyle: {
      type: Object,
      default: undefined
    },
    secondStep: {
      type: Number,
      default: 1
    },
    showNow: {
      type: Boolean,
      default: undefined
    },
    use12Hours: {
      type: Boolean,
      default: false
    },
    valueFormat: {
      type: String,
      default: undefined
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
  }
})
</script>
