<template>
  <z-row>
    <z-col :span="12">col-12</z-col>
    <z-col :span="12">col-12</z-col>
  </z-row>
  <z-row>
    <z-col :span="8">col-8</z-col>
    <z-col :span="8">col-8</z-col>
    <z-col :span="8">col-8</z-col>
  </z-row>
  <z-row>
    <z-col :span="6">col-6</z-col>
    <z-col :span="6">col-6</z-col>
    <z-col :span="6">col-6</z-col>
    <z-col :span="6">col-6</z-col>
  </z-row>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputDemo1',
  setup() {
    return {}
  },
})
</script>
<style scoped lang="less">
.ant-row {
  :nth-child(2n) {
    background-color: #40adff;
  }
  :nth-child(2n-1) {
    background-color: #0080ff;
  }
}
</style>
