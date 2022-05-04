<!-- wyf 2022-1-24 -->
<template>
  <div>
    <h1>基础</h1>
    <z-input v-model:value="value1" />
    <br>
    <h1>icon</h1>
    <z-input v-model:value="value2">
      <template #prefix>
        <user-outlined />
      </template>
      <template #suffix>
        <info-circle-outlined />
      </template>
    </z-input>
    <br>
    <h1>禁用</h1>
    <z-input v-model:value="value3" disabled placeholder="禁用" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value1 = ref('')
    const value2 = ref('')
    const value3 = ref('')
    return {
      value1,
      value2,
      value3
    }
  }
})
</script>
