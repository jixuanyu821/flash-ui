<template>
  <z-checkbox-group
    v-model:value="value1"
    name="checkboxgroup"
    :options="plainOptions"
  />
  <div style="margin: 10px 0" />
  <z-checkbox-group v-model:value="value2" :options="plainOptions" />
  <div style="margin: 10px 0" />
  <z-checkbox-group v-model:value="value3" :options="options" />
  <div style="margin: 10px 0" />
  <z-checkbox-group v-model:value="value3" :options="optionsWithDisabled">
    <template #label="{ value }">
      <span style="color: red">{{ value }}</span>
    </template>
  </z-checkbox-group>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true }
]
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false }
]

export default defineComponent({
  name: 'checkboxDemo4',
  setup(){
    const state = reactive({
      value1: [],
      value2: ['Apple'],
      value3: ['Pear']
    })
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      ...toRefs(state)
    }
  }
})
</script>
