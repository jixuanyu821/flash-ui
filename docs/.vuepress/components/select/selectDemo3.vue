<template>
  <z-select v-model:value="value" style="width: 200px" :options="options" mode="tags" />
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SelectDemo3',
  setup(){
    const value = ref([])
    const options = ref([
      {
        value: 'jack',
        label: 'Jack'
      },
      {
        value: 'lucy',
        label: 'Lucy'
      },
      {
        value: 'tom',
        label: 'Tom'
      }
    ])
    return {
      value,
      options
    }
  }
})
</script>
