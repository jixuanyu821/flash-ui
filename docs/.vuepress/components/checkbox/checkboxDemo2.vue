<template>
  <z-checkbox
    v-model:checked="checkAll"
    :indeterminate="indeterminate"
    @change="onCheckAllChange"
  >
    全选
  </z-checkbox>
  <z-divider style="margin: 10px 0" />
  checkedList : {{ checkedList }}
  <z-checkbox-group v-model:value="checkedList" :options="plainOptions" />
</template>
<script>
import { defineComponent, reactive, toRefs, watch } from 'vue'
const plainOptions = ['Apple', 'Pear', 'Orange']

export default defineComponent({
  name: 'checkboxDemo2',
  setup(){
    const state = reactive({
      indeterminate: true,
      checkAll: false,
      checkedList: ['Apple', 'Orange']
    })
    const onCheckAllChange = e => {
      Object.assign(state, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false
      })
    }
    watch(() => state.checkedList, val => {
      state.indeterminate = !!val.length && val.length < plainOptions.length
      state.checkAll = val.length === plainOptions.length
    })
    return { ...toRefs(state),
      plainOptions,
      onCheckAllChange
    }
  }
})
</script>
