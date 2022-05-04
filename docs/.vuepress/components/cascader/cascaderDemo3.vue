<template>
  <z-cascader
    v-model:value="value"
    :filter="{ showSearch }"
    :options="options"
    placeholder="请选择"
  />
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CascaderDemo3',
  setup(){
    const value = ref([])
    const options = ref([
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake'
              }
            ]
          }
        ]
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              },
              {
                value: 'disabled',
                label: 'disabled',
                disabled: true
              }
            ]
          }
        ]
      }
    ])
    const showSearch = (inputValue, path) => {
      return path.some(
        (option) =>
          option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      )
    }
    return {
      value,
      options,
      showSearch
    }
  }
})
</script>
