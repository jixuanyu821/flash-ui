<template>
  <z-radio-group v-model:value="check1">
    <z-radio-button value="1">选项一</z-radio-button>
    <z-radio-button value="2">选项2</z-radio-button>
  </z-radio-group>
  <div style="margin: 5px 0" />
  <z-radio-group v-model:value="check2" style="margin-top:20px">
    <z-radio-button value="a">选项a</z-radio-button>
    <z-radio-button value="b" disabled>选项b</z-radio-button>
    <z-radio-button value="c">选项c</z-radio-button>
    <z-radio-button value="d">选项d</z-radio-button>
  </z-radio-group>
  <div style="margin: 5px 0" />
  <z-radio-group v-model:value="check3" style="margin-top:20px" disabled>
    <z-radio-button value="a">选项a</z-radio-button>
    <z-radio-button value="b" disabled>选项b</z-radio-button>
    <z-radio-button value="c">选项c</z-radio-button>
    <z-radio-button value="d">选项d</z-radio-button>
  </z-radio-group>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RadioDemo3',
  setup(){
    const check1 = ref(false)
    const check2 = ref('a')
    const check3 = ref('a')
    return {
      check1,
      check2,
      check3
    }
  }
})
</script>
