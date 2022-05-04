<template>
  <z-tabs v-model:activeKey="activeKey">
    <z-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</z-tab-pane>
    <z-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</z-tab-pane>
    <z-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</z-tab-pane>
  </z-tabs>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const activeKey = ref('1')
      return {
        activeKey
      }
    }
  })
</script>
    