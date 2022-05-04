<template>
  <z-tree-select
    v-model:value="value"
    style="width: 200px"
    :tree-data="treeData"
    tree-default-expand-all
  />
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TreeSelectDemo1',
  setup(){
    const value = ref('')
    const treeData = ref([
      {
        title: 'parent 1',
        value: 'parent 1',
        children: [
          {
            title: 'parent 1-0',
            value: 'parent 1-0',
            children: [
              {
                title: 'my leaf',
                value: 'leaf1'
              },
              {
                title: 'your leaf',
                value: 'leaf2'
              }
            ]
          },
          {
            title: 'parent 1-1',
            value: 'parent 1-1'
          }
        ]
      }
    ])
    return {
      value,
      treeData
    }
  }
})
</script>
