<!-- wyf 2022-2-28 -->
<template>
  <div class="tree-ctn">
    <h1>基础</h1>
    <ZTree :tree-data="treeData" :field-names="fieldNames" />
    <ZTree v-model:expandedKeys="expandedKeys" :tree-data="treeData" :field-names="fieldNames" is-add is-delete is-edit @addNode="addNode" @deleteNode="deleteNode" @editNode="editNode" />
    <ZTree :tree-data="treeData1" :field-names="fieldNames" is-add is-delete is-edit @addNode="addNode" @deleteNode="deleteNode" @editNode="editNode" />
    <div style="margin-top: 24px">
      <textarea id="base1" cols="3" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const fieldNames = ref({
      title: 'name'
    })
    const treeData = ref([
      {
        name: 'parent 1',
        addable: true,
        deleteable: true,
        children: [
          {
            name: 'parent 1-0',
            children: [
              {
                name: 'leaf'
              },
              {
                name: 'leaf1'
              }
            ]
          },
          {
            name: 'parent 1-1',
            children: [
              {
                name: 'sss'
              }
            ]
          }
        ]
      }
    ])
    const treeData1 = ref([
      {
        name: 'parent 1',
        addable: false,
        deleteable: false,
        children: [
          {
            name: 'parent 1-0',
            children: [
              {
                name: 'leaf'
              },
              {
                name: 'leaf1'
              }
            ]
          },
          {
            name: 'parent 1-1',
            children: [
              {
                name: 'sss'
              }
            ]
          }
        ]
      }
    ])
    const addNode = (title, key) => {
      console.log('add', title, key)
    }
    const deleteNode = (title, key) => {
      console.log('delete', title, key)
    }
    const editNode = (title, key) => {
      console.log('edit', title, key)
    }
    const expandedKeys = ref([])

    return {
      treeData,
      treeData1,
      expandedKeys,
      addNode,
      deleteNode,
      editNode,
      fieldNames
    }
  }
})
</script>

<style lang="less">
.tree-ctn {
  margin: 20px 0;
}
</style>
