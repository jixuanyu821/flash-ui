<!--
 * @Author: jixuanyu
 * @Date: 2022-02-17 17:25:05
 * @LastEditors: jixuanyu
 * @Description: file content
-->
<template>
  <div class="content">
    <h1>基础表单</h1>
    <z-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <z-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <z-input v-model:value="formState.username" />
      </z-form-item>
      <z-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <z-password v-model:value="formState.password" />
      </z-form-item>

      <z-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <z-checkbox v-model:checked="formState.remember">Remember me</z-checkbox>
      </z-form-item>

      <z-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <z-button type="primary" html-type="submit">Submit</z-button>
      </z-form-item>
    </z-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const formState = reactive({
      username: '',
      password: '',
      remember: true
    })

    const onFinish = values => {
      console.log('Success:', values)
    }

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo)
    }

    return {
      formState,
      onFinish,
      onFinishFailed
    }
  }

})
</script>
