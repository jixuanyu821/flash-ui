<!-- wyf 2022-1-25 -->
<template>
  <a-tree-select
    :ref="treeSelectRef"
    v-model:value="value1"
    v-model:treeExpandedKeys="treeExpandedKeys1"
    v-model:searchValue="searchValue1"
    :placeholder="placeholder"
    :tree-data="treeData"
    :multiple="multiple"
    :allow-clear="allowClear"
    tree-default-expand-all
    tree-default-expanded-keys
    :show-search="showSearch"
    :default-value="defaultValue"
    :dropdown-class-name="dropdownClassName"
    :dropdown-match-select-width="dropdownMatchSelectWidth"
    :dropdown-style="dropdownStyle"
    :filter-tree-node="filterTreeNode"
    :get-popup-container="getPopupContainer"
    :list-height="listHeight"
    :load-data="loadData"
    :tree-check-strictly="treeCheckStrictly"
    :tree-line="treeLine"
    :tree-node-filter-prop="treeNodeFilterProp"
    :tree-node-label-prop="treeNodeLabelProp"
    :virtual="virtual"
    :tree-checkable="treeCheckable"
    :label-in-value="labelInValue"
    :max-tag-count="maxTagCount"
    :replace-fields="replaceFields"
    :field-names="fieldNames"
    :tree-data-simple-mode="treeDataSimpleMode"
    @search="search"
    @select="select"
    @treeExpand="treeExpand"
    @dropdownVisibleChange="dropdownVisibleChange"
  >
    <slot />
    <template v-if="$slots.maxTagPlaceholder" #maxTagPlaceholder>
      <slot name="maxTagPlaceholder" />
    </template>
    <template v-if="$slots.suffixIcon" #suffixIcon>
      <slot name="suffixIcon" />
    </template>
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <template v-if="$slots.searchPlaceholder" #searchPlaceholder>
      <slot name="searchPlaceholder" />
    </template>
  </a-tree-select>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZTreeSelect',
  props: {
    treeSelectRef: {
      type: String,
      default: 'treeSelect'
    },
    value: {
      type: String || Array,
      default: undefined
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    treeData: {
      type: Array,
      default() {
        return []
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    showSearch: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: String || Array,
      default: undefined
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
    filterTreeNode: {
      type: Boolean || Function,
      default: undefined
    },
    getPopupContainer: {
      type: Function,
      default: undefined
    },
    listHeight: {
      type: Number,
      default: 256
    },
    loadData: {
      type: Function,
      default: undefined
    },
    treeCheckStrictly: {
      type: Boolean,
      default: false
    },
    treeExpandedKeys: {
      type: Array,
      default: undefined
    },
    treeLine: {
      type: Boolean || Object,
      default: false
    },
    treeNodeFilterProp: {
      type: String,
      default: '-'
    },
    treeNodeLabelProp: {
      type: String,
      default: '-'
    },
    virtual: {
      type: Boolean,
      default: true
    },
    treeCheckable: {
      type: Boolean,
      default: false
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    maxTagCount: {
      type: Number,
      default: undefined
    },
    searchValue: {
      type: String,
      default: undefined
    },
    replaceFields: {
      type: Object,
      default() {
        return {
          children: 'children',
          label: 'title',
          key: 'key',
          value: 'value'
        }
      }
    },
    fieldNames: {
      type: Object,
      default() {
        return {
          children: 'children',
          label: 'title',
          key: 'key',
          value: 'value'
        }
      }
    },
    treeDataSimpleMode: {
      type: Boolean || Array,
      default: false
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
    },
    treeExpandedKeys1: {
      get() {
        return this.treeExpandedKeys
      },
      set(val) {
        this.$emit('update:treeExpandedKeys', val)
      }
    },
    searchValue1: {
      get() {
        return this.searchValue
      },
      set(val) {
        this.$emit('update:searchValue', val)
      }
    }
  },
  methods: {
    search(value) {
      this.$emit('search', value)
    },
    select(value, node, extra) {
      this.$emit('select', value, node, extra)
    },
    treeExpand(expandedKeys) {
      this.$emit('treeExpand', expandedKeys)
    },
    dropdownVisibleChange(open) {
      this.$emit('dropdownVisibleChange', open)
    }
  }
})
</script>

<style lang="less">
@import url('./index.less');
</style>
