<template>
  <a-space direction="vertical">
    <z-time-picker v-model:value="value" />
    <z-time-picker v-model:value="strValue" value-format="HH:mm:ss" />
  </a-space>
</template>
<script>
import dayjs from 'dayjs';
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const value = ref(dayjs('08:00:00', 'HH:mm:ss'));
    const strValue = ref('09:00:00');
    watch(value, () => {
      console.log(value.value);
    });
    watch(strValue, () => {
      console.log(strValue.value);
    });
    return {
      value,
      strValue,
    };
  },

});
</script>