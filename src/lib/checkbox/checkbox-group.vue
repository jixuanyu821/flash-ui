<template>
  <a-checkbox-group
    v-model:value="checkValue"
    :name="name"
    :options="options"
    :disabled="disabled"
  >
    <!-- eslint-disable-next-line vue/no-template-shadow -->
    <template v-if="$slots.label" #label="{ value }">
      <slot name="label" :value="value" />
    </template>
  </a-checkbox-group>
</template>
<script>
// import { defineComponent, toRef } from 'vue'
import { Checkbox } from 'ant-design-vue'
const Group = Checkbox.Group
export default {
  name: 'ZCheckboxGroup',
  components: {
    ACheckboxGroup: Group
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: Boolean,
    name: {
      type: String,
      default: undefined
    },
    options: {
      type: Array,
      default: undefined
    }
  },
  computed: {
    checkValue: {
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
