<template>
  <z-select
    v-model:value="value"
    style="width: 200px"
    :options="options"
    show-search
    :filter-option="filterOption"
  />
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SelectDemo4',
  setup(){
    const value = ref('')
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
    const filterOption = (input, option) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    return {
      value,
      options,
      filterOption
    }
  }
})
</script>
