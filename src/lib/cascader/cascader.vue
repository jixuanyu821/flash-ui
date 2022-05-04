<!-- wyf 2022-1-25 -->
<template>
  <a-cascader
    :ref="cascaderRef"
    v-model:value="value1"
    :options="options"
    :placeholder="placeholder"
    :allow-clear="allowClear"
    :multiple="multiple"
    :expand-trigger="expandTrigger"
    :max-tag-count="maxTagCount"
    :field-names="fieldNames"
    :show-search="{ filter }"
    :load-data="loadData"
    :change-on-select="changeOnSelect"
    :autofocus="autofocus"
    :default-value="defaultValue"
    :get-popup-container="getPopupContainer"
    :dropdown-class-name="dropdownClassName"
    :dropdown-style="dropdownStyle"
    :open="open"
    :placement="placement"
    :tag-render="tagRender"
    :search-value="searchValue"
    @dropdownVisibleChange="dropdownVisibleChange"
    @search="search"
  >
    <template v-if="$slots.notFoundContent" #notFoundContent>
      <slot name="notFoundContent" />
    </template>
    <template v-if="$slots.suffixIcon" #suffixIcon>
      <slot name="suffixIcon" />
    </template>
    <template v-if="$slots.expandIcon" #expandIcon>
      <slot name="expandIcon" />
    </template>
    <template v-if="$slots.maxTagPlaceholder" #maxTagPlaceholder>
      <slot name="maxTagPlaceholder" />
    </template>
    <template v-if="$slots.displayRender" #displayRender="{labels, selectedOptions}">
      <slot name="displayRender" :labels="labels" :selectedOptions="selectedOptions" />
    </template>
  </a-cascader>
</template>

<script>
import { defineComponent } from 'vue'
import { Cascader } from 'ant-design-vue'
export default defineComponent({
  name: 'ZCascader',
  components: {
    ACascader: Cascader
  },
  props: {
    cascaderRef: {
      type: String,
      default: 'cascader'
    },
    value: {
      type: Array,
      default: undefined
    },
    options: {
      type: Array,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    expandTrigger: {
      type: String,
      default: 'click'
    },
    maxTagCount: {
      type: String,
      default: 'responsive'
    },
    multiple: {
      type: Boolean,
      default: undefined
    },
    fieldNames: {
      type: Object,
      default: undefined
    },
    filter: {
      type: Object || Boolean,
      default: undefined
    },
    loadData: {
      type: Function,
      default: undefined
    },
    changeOnSelect: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: Array,
      default() {
        return []
      }
    },
    getPopupContainer: {
      type: Function,
      default: undefined
    },
    dropdownClassName: {
      type: String,
      default: undefined
    },
    dropdownStyle: {
      type: Object,
      default: undefined
    },
    open: {
      type: Boolean,
      default: undefined
    },
    placement: {
      type: String,
      default: 'bottomLeft'
    },
    tagRender: {
      type: Function,
      default: undefined
    },
    searchValue: {
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
  },
  methods: {
    dropdownVisibleChange(value) {
      this.$emit('dropdownVisibleChange', value)
    },
    search(value) {
      this.$emit('search', value)
    }
  }
})
</script>

<style lang="less">
@import url('./index.less');
</style>
