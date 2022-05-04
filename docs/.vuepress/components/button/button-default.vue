<template>
  <div class="flexDiv flewWrap">
    <div class="btn-item">
      <p>primary</p>
      <z-button type="primary">
        常规
      </z-button>
    </div>
    <div class="btn-item">
      <p>default</p>
      <z-button type="default">
        次要
      </z-button>
    </div>
    <div class="btn-item">
      <p>success</p>
      <z-button type="success">
        成功
      </z-button>
    </div>
    <div class="btn-item">
      <p>danger</p>
      <z-button type="danger">
        错误
      </z-button>
    </div>
    <div class="btn-item">
      <p>warning</p>
      <z-button type="warning">
        警告
      </z-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ButtonDemo1',
}
</script>
<style lang="less" scoped>
.btn-item {
  margin-left: 24px;
  text-align: center;
  .ant-btn {
    margin: auto;
  }
}
</style>
