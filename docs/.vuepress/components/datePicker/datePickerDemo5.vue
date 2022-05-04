<template>
  <a-space direction="vertical" :size="12" style="width: 400px">
    <z-date-picker show-time placeholder="选择时间" @change="onChange" @ok="onOk" />
    <z-range-picker
      :show-time="{ format: 'HH:mm' }"
      format="YYYY-MM-DD HH:mm"
      :placeholder="['开始时间', '结束时间']"
      @change="onRangeChange"
      @ok="onRangeOk"
    />
  </a-space>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DatePickerDemo5',
  setup(){
    const onChange = (value, dateString) => {
      console.log('Selected Time: ', value)
      console.log('Formatted Selected Time: ', dateString)
    }

    const onOk = value => {
      console.log('onOk: ', value)
    }

    const onRangeChange = (value, dateString) => {
      console.log('Selected Time: ', value)
      console.log('Formatted Selected Time: ', dateString)
    }

    const onRangeOk = value => {
      console.log('onOk: ', value)
    }
    return {
      onChange,
      onOk,
      onRangeChange,
      onRangeOk
    }
  }
})
</script>
