<template>
  <z-tree
    :tree-data="treeData"
    :field-names="fieldNames"
    v-model:expandedKeys="expandedKeys"
    isAdd
    isDelete
    isEdit
  />
  <z-tree
    :tree-data="treeData1"
    :field-names="fieldNames"
    isAdd
    isDelete
    isEdit
  />
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TreeDemo2',
  setup() {
    const expandedKeys = ref([])
    const treeData = ref([
      {
        name: 'parent 1',
        key: '0-0',
        addable: true,
        deleteable: true,
        children: [
          {
            name: 'parent 1-0',
            key: '0-0-0',
            children: [
              {
                name: 'leaf',
                key: '0-0-0-0',
              },
              {
                name: 'leaf',
                key: '0-0-0-1',
              },
            ],
          },
          {
            name: 'parent 1-1',
            key: '0-0-1',
            children: [
              {
                key: '0-0-1-0',
                name: 'sss',
              },
            ],
          },
        ],
      },
    ])
    const treeData1 = ref([
      {
        name: 'parent 1',
        key: '0-0',
        addable: false,
        deleteable: false,
        children: [
          {
            name: 'parent 1-0',
            deleteable: false,
            key: '0-0-0',
            children: [
              {
                name: 'leaf',
                key: '0-0-0-0',
              },
              {
                name: 'leaf',
                key: '0-0-0-1',
              },
            ],
          },
          {
            name: 'parent 1-1',
            addable: false,
            key: '0-0-1',
            children: [
              {
                key: '0-0-1-0',
                name: 'sss',
              },
            ],
          },
        ],
      },
    ])
    const fieldNames = ref({
      title: 'name',
    })
    return {
      expandedKeys,
      treeData,
      treeData1,
      fieldNames,
    }
  },
})
</script>
