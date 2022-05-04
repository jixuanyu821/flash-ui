<!-- wyf 2022-1-25 -->
<template>
  <div class="pagination-css">
    <a-pagination
      v-model:current="current1"
      v-model:page-size="pageSize1"
      :show-quick-jumper="showQuickJumper"
      :total="total"
      :show-less-items="showLessItems"
      :disabled="disabled"
      :page-size-options="pageSizeOptions"
      :show-total="showTotal"
      :default-page-size="defaultPageSize"
      :hide-on-single-page="hideOnSinglePage"
      :show-size-changer="showSizeChanger"
      :simple="simple"
      @change="change"
      @showSizeChange="showSizeChange"
    >
      <slot />
    </a-pagination>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZPagination',
  props: {
    current: {
      type: Number,
      default: undefined
    },
    total: {
      type: Number,
      default: 0
    },
    showQuickJumper: {
      type: Boolean,
      default: false
    },
    showLessItems: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: Number,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pageSizeOptions: {
      type: Array,
      default() {
        return ['10', '20', '50', '100']
      }
    },
    showTotal: {
      type: Function,
      default() {
        return undefined
      }
    },
    defaultPageSize: {
      type: Number,
      default: 10
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    showSizeChanger: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: undefined
    }
  },
  computed: {
    current1: {
      get() {
        return this.current
      },
      set(val) {
        this.$emit('update:current', val)
      }
    },
    pageSize1: {
      get() {
        return this.pageSize
      },
      set(val) {
        this.$emit('update:pageSize', val)
      }
    }
  },
  methods: {
    change(page, pageSize) {
      this.$emit('change', page, pageSize)
    },
    showSizeChange(current, pageSize) {
      this.$emit('showSizeChange', current, pageSize)
    }
  }
})
</script>

<style lang="less">
@import url('./index.less');
</style>
