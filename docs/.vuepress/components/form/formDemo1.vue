<template>
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
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>