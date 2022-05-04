<!--
 * @Author: jixuanyu
 * @Date: 2022-04-24 15:37:29
 * @LastEditors: jixuanyu
 * @Description: file content
-->
<!--
 * @Author: jixuanyu
 * @Date: 2022-04-18 15:43:46
 * @LastEditors: jixuanyu
 * @Description: file content
-->
<template>
  <div>
    <z-tree
      :tree-data="treeData"
      :field-names="fieldNames"
    >
      <template #operateIcon="{ node, parentKey, key }">
        <z-button @click="editNode(node, parentKey, key)">编辑</z-button>
      </template>
    </z-tree>
    <z-tree
      :tree-data="treeData"
      :field-names="fieldNames"
      isAdd
      isDelete
      isEdit
      :beforeDeleteNode="beforeDeleteNode"
      @addNode="addNode"
      @editNode="editNode"
      @deleteNode="deleteNode"
      @complateEdit="complateEdit"
      @cancleEdit="cancleEdit"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { Modal } from 'ant-design-vue';

export default defineComponent({
  name: 'TreeDemo4',
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
    const beforeDeleteNode = (node, parentKey) => {
      console.log(node, parentKey,'节点 beforeDeleteNode')
      return new Promise((resolve,reject) => {
        Modal.confirm({
          title: 'Confirm',
          content: '确认删除当前节点？',
          okText: '确认',
          cancelText: '取消',
          onOk: ()=> {
            console.log('点击确认');
            resolve()
          }
        });
      })
    }
    const addNode = (node) => {
      console.log('addNode', node)
    }
    const editNode = (node, parentKey, key) => {
      console.log('editNode', node, parentKey, key)
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
      fieldNames,
      beforeDeleteNode,
      addNode,
      editNode,
      deleteNode,
      complateEdit,
      cancleEdit,
    }
  },
})
</script>
