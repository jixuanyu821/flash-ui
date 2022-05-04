<!--
 * @Author: jixuanyu
 * @Date: 2022-01-23 13:55:16
 * @LastEditors: jixuanyu
 * @Description: 基础单选
-->
<template>
  <div class="content">
    <h1>多选</h1>
    <div>
      <z-checkbox-group
        v-model:value="value1"
        name="checkboxgroup"
        :options="plainOptions"
      />
      <br>
      <br>
      <z-checkbox-group v-model:value="value2" :options="plainOptions" />
      <br>
      <br>
      <z-checkbox-group v-model:value="value3" :options="options" />
      <br>
      <br>
      <z-checkbox-group v-model:value="value3" :options="optionsWithDisabled">
        <template #label="{ value }">
          <span style="color: red">{{ value }}</span>
        </template>
      </z-checkbox-group>
    </div>
    <div style="margin-top: 24px">
      <textarea id="base4" cols="3" />
    </div>
  </div>
</template>
<script>
import ZCheckboxGroup from '@lib/checkbox/checkbox-group'
import { defineComponent, reactive, toRefs } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true }
]
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false }
]
export default defineComponent({
  components: {
    ZCheckboxGroup
  },
  setup() {
    const state = reactive({
      value1: [],
      value2: ['Apple'],
      value3: ['Pear']
    })
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      ...toRefs(state)
    }
  },
  mounted() {
    let myTextarea3 = document.getElementById('base4')
    let CodeMirrorEditor3 = CodeMirror.fromTextArea(myTextarea3, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    CodeMirrorEditor3.setValue(
      `<template>
  <div class="content">
    <div>
      <z-checkbox-group
        v-model:value="value1"
        name="checkboxgroup"
        :options="plainOptions"
      />
      <br>
      <br>
      <z-checkbox-group v-model:value="value2" :options="plainOptions" />
      <br>
      <br>
      <z-checkbox-group v-model:value="value3" :options="options" />
      <br>
    </div>
  </div>
</template>
<script>
  const plainOptions = ['Apple', 'Pear', 'Orange']
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ]
  export default defineComponent({
    components: {
      ZCheckboxGroup
    },
    setup() {
      const state = reactive({
        value1: [],
        value2: ['Apple'],
        value3: ['Pear']
      })
      return {
        plainOptions,
        options,
        ...toRefs(state)
      }
    },
  })
<\/script>`
    )
  }
})
</script>
<style scoped>
.content {
  margin-bottom: 16px;
}
</style>
