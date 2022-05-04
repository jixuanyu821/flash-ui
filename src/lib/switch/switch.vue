<!--
 * @Author: jixuanyu
 * @Date: 2022-02-24 09:55:21
 * @LastEditors: jixuanyu
 * @Description: file content
-->
<template>
  <a-switch
    v-model:checked="check"
    :autofocus="autofocus"
    :checked-children="checkedChildren"
    :checked-value="checkedValue"
    :disabled="disabled"
    :loading="loading"
    :size="size"
    :un-checked-children="unCheckedChildren"
    :un-checked-value="unCheckedValue"
  />
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ZSwitch',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    checkedChildren: {
      type: String,
      default: undefined
    },
    checkedValue: {
      type: Boolean || String || Number,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    unCheckedChildren: {
      type: String,
      default: undefined
    },
    unCheckedValue: {
      type: Boolean || String || Number,
      default: false
    }
  },
  computed: {
    check: {
      get() {
        return this.checked
      },
      set(val) {
        this.$emit('update:checked', val)
      }
    }
  }
})
</script>
