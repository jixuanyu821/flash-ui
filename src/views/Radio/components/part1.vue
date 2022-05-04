<!--
 * @Author: jixuanyu
 * @Date: 2022-01-23 13:55:16
 * @LastEditors: jixuanyu
 * @Description: 基础单选
-->
<template>
  <div class="content">
    <h1>基础</h1>
    <z-radio v-model:checked="check">单选</z-radio>
    <div style="height: 50px; overflow: hidden; margin-top: 24px">
      <textarea id="base1" cols="3" />
    </div>
  </div>
</template>
<script>
import ZRadio from '@lib/radio/radio.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
export default defineComponent({
  components: {
    ZRadio
  },
  setup() {
    const check = ref(false)
    return {
      check
    }
  },
  mounted() {
    let myTextarea1 = document.getElementById('base1')
    let CodeMirrorEditor1 = CodeMirror.fromTextArea(myTextarea1, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    CodeMirrorEditor1.setValue(`<ZRadio v-model:checked="check" >单选</ZRadio>`)
  }
})
</script>
<style scoped>
 .content{
   margin-bottom: 16px;
 }
</style>
