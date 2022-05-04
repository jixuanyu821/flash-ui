<!--
 * @Author: jixuanyu
 * @Date: 2022-01-23 13:55:16
 * @LastEditors: jixuanyu
 * @Description: 基础单选
-->
<template>
  <div class="content">
    <h1>禁用</h1>
    <div>
      <z-checkbox v-model:checked="check1" :disabled="disabled">未选中</z-checkbox>
      <br>
      <z-checkbox v-model:checked="check2" :disabled="disabled">选中</z-checkbox>
      <br>
    </div>
    <div style="margin-top:24px">
      <textarea id="base3" cols="3" />
    </div>
  </div>
</template>
<script>
import ZCheckbox from '@lib/checkbox/checkbox.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
export default defineComponent({
  components: {
    ZCheckbox
  },
  setup() {
    const check1 = ref(false)
    const check2 = ref(true)
    const disabled = ref(true)
    return {
      check1,
      check2,
      disabled
    }
  },
  mounted() {
    let myTextarea3 = document.getElementById('base3')
    let CodeMirrorEditor3 = CodeMirror.fromTextArea(myTextarea3, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    CodeMirrorEditor3.setValue(
      `<template>
  <div class="content">
    <h1>禁用</h1>
    <div>
      <z-checkbox v-model:checked="check1" :disabled="disabled">未选中</z-checkbox>
      <br>
      <z-checkbox v-model:checked="check2" :disabled="disabled">选中</z-checkbox>
      <br>
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const check1 = ref(false)
      const check2 = ref(true)
      const disabled = ref(true)
      return {
        check1,
        check2,
        disabled
      }
    },
  })
<\/script>`
    )
  }
})
</script>
<style scoped>
 .content{
   margin-bottom: 16px;
 }
</style>
