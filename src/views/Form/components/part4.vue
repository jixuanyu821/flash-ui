<!--
 * @Author: jixuanyu
 * @Date: 2022-02-17 17:25:05
 * @LastEditors: jixuanyu
 * @Description: file content
-->
<template>
  <div class="content">
    <h1>动态表单校验</h1>
    <z-form ref="login_form" :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol" @finish="onFinish" @finishFailed="onFailed">
      <z-form-item :rules="[{ required: true, message: 'Please input your username!' }]" name="name" label="Activity name">
        <z-input v-model:value="formState.name" />
      </z-form-item>
      <z-form-item label="Instant delivery">
        <z-switch v-model:checked="formState.delivery" />
      </z-form-item>
      <z-button type="primary" @click="addGroup">新增</z-button>
      <z-form-item label="Activity type">
        <z-checkbox-group v-model:value="formState.type">
          <z-checkbox value="1" name="type">Online</z-checkbox>
          <z-checkbox value="2" name="type">Promotion</z-checkbox>
          <z-checkbox value="3" name="type">Offline</z-checkbox>
        </z-checkbox-group>
      </z-form-item>
      <div v-for="(item,index) in formState.formList" :key="item.key">
        <div>
          <z-form-item label="value" :name="['formList', index, 'value']" :rules="[{ required: true, message: '必填' }]">
            <z-input v-model:value="item.value" />
          </z-form-item>
          <z-form-item label="name" :name="['formList', index, 'name']">
            <z-input v-model:value="item.name" />
          </z-form-item>
        </div>
      </div>
      <z-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <!-- <z-button type="primary" html-type="submit">Create</z-button> -->
        <z-button type="primary" @click="submit">Create</z-button>
        <z-button style="margin-left: 10px">Cancel</z-button>
      </z-form-item>
    </z-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const formState = reactive({
      name: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
      formList: [{
        name: '',
        value: ''
      }]
    })

    const addGroup = () => {
      formState.formList.push({
        name: '',
        value: '',
        key: new Date().getTime()
      })
    }

    const onFinish = (e) => {
      console.log(e, 'onFinish')
    }
    const onFailed = (e) => {
      console.log(e, 'onFailed')
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
      onFinish,
      onFailed,
      addGroup
    }
  },
  methods: {
    submit() {
      this.$refs.login_form.validate().then(res => {
        console.log(res)
      }).catch()
    }
  }

})
</script>
