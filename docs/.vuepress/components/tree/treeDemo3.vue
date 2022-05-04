<!--
 * @Author: jixuanyu
 * @Date: 2022-04-18 15:43:46
 * @LastEditors: jixuanyu
 * @Description: file content
-->
<template>
  <z-tree
    :tree-data="treeData"
    :field-names="fieldNames"
    isAdd
    isDelete
    isEdit
    @addNode="addNode"
    @editNode="editNode"
    @deleteNode="deleteNode"
    @complateEdit="complateEdit"
    @cancleEdit="cancleEdit"
  />
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'TreeDemo3',
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
    const treeData1 = ref([
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
    const addNode = (node) => {
      console.log('addNode', node)
    }
    const editNode = (node) => {
      console.log('editNode', node)
    }
    const deleteNode = (node) => {
      console.log('deleteNode', node)
    }
    const complateEdit = (node) => {
      console.log('complateEdit', node)
    }
    const cancleEdit = (node) => {
      console.log('cancleEdit', node)
    }
    return {
      treeData,
      treeData1,
      fieldNames,
      addNode,
      editNode,
      deleteNode,
      complateEdit,
      cancleEdit,
    }
  },
})
</script>
