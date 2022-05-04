<template>
  <z-select v-model:value="value" style="width: 200px">
    <z-select-option
      v-for="(item, index) in options"
      :key="index"
      :value="item.key"
    >
      {{ item.name }}
    </z-select-option>
  </z-select>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SelectDemo2',
  setup(){
    const value = ref('')
    const options = ref([
      {
        key: 'rose',
        name: 'Rose'
      },
      {
        key: 'jenny',
        name: 'Jenny'
      }
    ])
    return {
      value,
      options
    }
  }
})
</script>
