<template>
  <z-space>
    <z-input-number v-model:value="value" :min="1" :max="10" />
    <z-button type="primary" @click="value = 99">Reset</z-button>
  </z-space>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref(99);
    return {
      value,
    };
  },

});
</script>