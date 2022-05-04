<template>
  <div class="gutter-example">
    <z-row :gutter="16">
      <z-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </z-col>
      <z-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </z-col>
      <z-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </z-col>
      <z-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </z-col>
    </z-row>
  </div>
</template>

<style scoped>
.gutter-example :deep(.ant-row > div) {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
</style>