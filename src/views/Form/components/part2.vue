<!--
 * @Author: jixuanyu
 * @Date: 2022-02-17 17:25:05
 * @LastEditors: jixuanyu
 * @Description: file content
-->
<template>
  <div class="content">
    <h1>基础表单</h1>
    <z-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <z-form-item label="Activity name">
        <z-input v-model:value="formState.name" />
      </z-form-item>
      <z-form-item label="Instant delivery">
        <z-switch v-model:checked="formState.delivery" />
      </z-form-item>
      <z-form-item label="Activity type">
        <z-checkbox-group v-model:value="formState.type">
          <z-checkbox value="1" name="type">Online</z-checkbox>
          <z-checkbox value="2" name="type">Promotion</z-checkbox>
          <z-checkbox value="3" name="type">Offline</z-checkbox>
        </z-checkbox-group>

      </z-form-item>
      <z-form-item label="Resources">
        <z-radio-group v-model:value="formState.resource">
          <z-radio value="1">Sponsor</z-radio>
          <z-radio value="2">Venue</z-radio>
        </z-radio-group>
      </z-form-item>
      <z-form-item label="Activity form">
        <z-input v-model:value="formState.desc" type="textarea" />
      </z-form-item>
      <z-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <z-button type="primary" @click="onSubmit">Create</z-button>
        <z-button style="margin-left: 10px">Cancel</z-button>
      </z-form-item>
    </z-form>
  </div>
</template>
<script>
import { defineComponent, reactive, toRaw } from 'vue'
export default defineComponent({
  setup() {
    const formState = reactive({
      name: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    })

    const onSubmit = () => {
      console.log('submit!', toRaw(formState))
    }

    return {
      labelCol: {
        style: {
          width: '150px'
        }
      },
      wrapperCol: {
        span: 14
      },
      formState,
      onSubmit
    }
  }

})
</script>
