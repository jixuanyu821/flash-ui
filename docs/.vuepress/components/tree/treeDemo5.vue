<template>
  <div>
    <z-tree
      :tree-data="treeData"
      :field-names="fieldNames"
    >
      <template #operateArea="{ node, parentKey, key }">
        <edit-outlined @click="editNode(node, parentKey, key)"/>
      </template>
    </z-tree>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TreeDemo5',
  setup() {
    const treeData = ref([
      {
        name: 'parent 1',
        key: '0-0',
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
    const fieldNames = ref({
      title: 'name',
    })
    const editNode = (node, parentKey, key) => {
      console.log('editNode', node, parentKey, key)
    }
    return {
      treeData,
      fieldNames,
      editNode,
    }
  },
})
</script>
