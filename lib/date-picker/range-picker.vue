<template>
  <a-range-picker
    v-model:value="timeDate"
    :locale="locale"
    :allow-clear="allowClear"
    :autofocus="autofocus"
    :bordered="bordered"
    :disabled="disabled"
    :disabled-date="disabledDate"
    :dropdown-class-name="dropdownClassName"
    :input-read-only="inputReadOnly"
    :mode="mode"
    :open="open"
    :picker="picker"
    :placeholder="placeholder"
    :popup-style="popupStyle"
    :size="size"
    :show-time="showTime"
    :value-format="valueFormat"
  >
    <template v-if="$slots.dateRender" #dateRender="{ current, today, info }">
      <slot :current="current" :today="today" :info="info" name="dateRender">
        <div class="ant-picker-cell-inner">{{ current.date() }}</div>
      </slot>
    </template>
    <template v-if="$slots.renderExtraFooter" #renderExtraFooter>
      <slot name="renderExtraFooter" />
    </template>
    <template v-if="$slots.separator" #separator>
      <slot name="separator">
        <SwapRightOutlined />
      </slot>
    </template>
    <template v-if="$slots.suffixIcon" #suffixIcon>
      <slot v-if="suffixIcon != undefined" name="suffixIcon">{{ suffixIcon }}</slot>
      <slot v-else name="suffixIcon">
        <CalendarOutlined />
      </slot>
    </template>
  </a-range-picker>
</template>
<script>

import { SwapRightOutlined, CalendarOutlined } from '@ant-design/icons-vue'
export default {
  name: 'ZRangePicker',
  components: {
    SwapRightOutlined,
    CalendarOutlined
  },
  props: {
    value: {
      type: [String, Object],
      default: undefined
    },
    allowClear: Boolean,
    autofocus: Boolean,
    bordered: {
      type: Boolean,
      default: undefined
    },
    disabledDate: {
      type: Function,
      default: undefined
    },
    dropdownClassName: {
      type: String,
      default: undefined
    },
    inputReadOnly: Boolean,
    mode: {
      type: String,
      default: undefined
    },
    open: {
      type: String,
      default: undefined
    },
    picker: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: [String, Array],
      default: undefined
    },
    popupStyle: {
      type: Object,
      default: undefined
    },
    size: {
      type: String,
      default: undefined
    },
    suffixIcon: {
      type: String,
      default: undefined
    },
    valueFormat: {
      type: String,
      default: undefined
    },
    allowEmpty: {
      type: Array,
      default: undefined
    },
    defaultPickerValue: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Array,
      default: undefined
    },
    disabledTime: {
      type: Function,
      default: undefined
    },
    format: {
      type: String,
      default: undefined
    },
    ranges: {
      type: Object,
      default: undefined
    },
    showTime: {
      type: [Object, Boolean],
      default: undefined
    }
  },
  computed: {
    timeDate: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      }
    }
  }
}
</script>
