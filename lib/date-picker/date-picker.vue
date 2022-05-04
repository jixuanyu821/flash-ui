<template>
  <a-date-picker
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
    :value-format="valueFormat"
    :default-picker-value="defaultPickerValue"
    :disabled-time="disabledTime"
    :format="format"
    :show-now="showNow"
    :show-time="showTime"
    :show-today="showToday"
  >
    <template v-if="$slots.dateRender" #dateRender="{ current,today }">
      <slot :current="current" :today="today" name="dateRender">
        <div v-if="picker === 'quarter'" class="ant-picker-cell-inner">{{ current.quarter() }}</div>
        <div v-else-if="picker === 'year'" class="ant-picker-cell-inner">{{ current.year() }}</div>
        <div v-else class="ant-picker-cell-inner">{{ current.date() }}</div>
      </slot>
    </template>
    <template v-if="$slots.monthCellRender" #monthCellRender="{ current,locale }">
      <slot :current="current" :locale="locale" name="monthCellRender">
        <div class="ant-picker-cell-inner">{{ current.month() + 1 }}月</div>
      </slot>
    </template>
    <template v-if="$slots.renderExtraFooter" #renderExtraFooter>
      <slot name="renderExtraFooter" />
    </template>
    <template v-if="$slots.suffixIcon" #suffixIcon>
      <slot v-if="suffixIcon != undefined" name="suffixIcon">{{ suffixIcon }}</slot>
      <slot v-else name="suffixIcon">
        <calendar-outlined />
      </slot>
    </template>
  </a-date-picker>
</template>
<script>

import { CalendarOutlined } from '@ant-design/icons-vue'

export default {
  name: 'ZDatePicker',
  components: {
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
    disabled: Boolean,
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
      default: 'date'
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
    defaultPickerValue: {
      type: String,
      default: undefined
    },
    disabledTime: {
      type: Function,
      default: undefined
    },
    format: {
      type: Function,
      default: undefined
    },
    showNow: Boolean,
    showTime: {
      type: [Object, Boolean],
      default: undefined
    },
    showToday: Boolean
  },
  // data() {
  //   return {
  //     localeL: locale,
  //     dayjs
  //   }
  // },
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
