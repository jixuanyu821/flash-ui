<!-- wyf 2022-2-16 -->
<template>
  <a-table
    :data-source="dataSource"
    :columns="columns"
    :pagination="pagination"
    :bordered="bordered"
    :scroll="scroll"
    :row-class-name="rowClassName"
    :row-selection="rowSelection"
    :loading="loading"
    :components="components"
    @resizeColumn="resizeColumn"
  >
    <template v-if="$slots.bodyCell" #bodyCell="{ column ,text, record, index }">
      <slot name="bodyCell" :column="column" :text="text" :record="record" :index="index" />
    </template>
    <template v-if="$slots.headerCell" #headerCell="{ title, column }">
      <slot name="headerCell" :title="title" :column="column" />
    </template>
    <template v-if="$slots.title" #title>
      <slot v-if="title !== undefined" name="title">{{ title }}</slot>
      <slot v-else name="title" />
    </template>
    <template v-if="$slots.footer" #footer>
      <slot v-if="footer !== undefined" name="footer">{{ footer }}</slot>
      <slot v-else name="footer" />
    </template>
  </a-table>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZTableSelect',
  props: {
    dataSource: {
      type: Array,
      default() {
        return []
      }
    },
    columns: {
      type: Array,
      default: undefined
    },
    pagination: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    scroll: {
      type: Object,
      default: undefined
    },
    rowClassName: {
      type: String,
      default: undefined
    },
    title: {
      type: Function,
      default: undefined
    },
    loading: {
      type: Boolean || Object,
      default: false
    },
    components: {
      type: Object,
      default: undefined
    },
    rowSelection: {
      type: Object,
      default() {
        return null
      }
    }
  },
  methods: {
    resizeColumn(w, col) {
      this.$emit('resizeColumn', w, col)
    }
  }
})
</script>

<style lang="less">
@import url('./index.less');
</style>
