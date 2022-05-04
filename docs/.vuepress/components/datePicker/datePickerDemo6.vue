<template>
  <z-range-picker
    :value="hackValue || value"
    :disabled-date="disabledDate"
    @change="onChange"
    @openChange="onOpenChange"
    @calendarChange="onCalendarChange"
  />
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DatePickerDemo6',
  setup(){
    const dates = ref()
    const value = ref()
    const hackValue = ref()

    const disabledDate = current => {
      if (!dates.value || dates.value.length === 0) {
        return false
      }

      const tooLate = dates.value[0] && current.diff(dates.value[0], 'days') > 7
      const tooEarly = dates.value[1] && dates.value[1].diff(current, 'days') > 7
      return tooEarly || tooLate
    }

    const onOpenChange = open => {
      if (open) {
        dates.value = []
        hackValue.value = []
      } else {
        hackValue.value = undefined
      }
    }

    const onChange = val => {
      value.value = val
    }

    const onCalendarChange = val => {
      dates.value = val
    }

    return {
      dates,
      value,
      hackValue,
      disabledDate,
      onOpenChange,
      onChange,
      onCalendarChange
    }
  }
})
</script>
