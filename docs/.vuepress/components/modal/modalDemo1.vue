<template>
  <z-button type="primary" @click="showModal">Open Modal</z-button>
  <z-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </z-modal>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const visible = ref(false)
      const showModal=()=>{
        visible.value=true
      }
      return {
        visible,
        showModal
      }
    }
  })
</script>
    