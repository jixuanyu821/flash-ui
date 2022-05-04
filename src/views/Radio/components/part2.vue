<!--
 * @Author: jixuanyu
 * @Date: 2022-01-23 13:55:16
 * @LastEditors: jixuanyu
 * @Description: 基础单选
-->
<template>
  <div class="content">
    <h1>按钮</h1>
    <z-radio-group v-model:value="check1">
      <z-radio-button value="1">选项一</z-radio-button>
      <z-radio-button value="2">选项2</z-radio-button>
    </z-radio-group>
    <br>
    <z-radio-group v-model:value="check2" style="margin-top:20px">
      <z-radio-button value="a">选项a</z-radio-button>
      <z-radio-button value="b" disabled>选项b</z-radio-button>
      <z-radio-button value="c">选项c</z-radio-button>
      <z-radio-button value="d">选项d</z-radio-button>
    </z-radio-group>
    <br>
    <z-radio-group v-model:value="check3" style="margin-top:20px" disabled>
      <z-radio-button value="a">选项a</z-radio-button>
      <z-radio-button value="b" disabled>选项b</z-radio-button>
      <z-radio-button value="c">选项c</z-radio-button>
      <z-radio-button value="d">选项d</z-radio-button>
    </z-radio-group>
    <div style="margin-top:24px">
      <textarea id="base2" cols="3" />
    </div>
  </div>
</template>
<script>
import ZRadioGroup from '@/lib/radio/radio-group.vue'
import ZRadioButton from '@/lib/radio/radio-button.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
export default defineComponent({
  components: {
    ZRadioGroup,
    ZRadioButton
  },
  setup() {
    const check1 = ref(false)
    const check2 = ref('a')
    const check3 = ref('a')
    return {
      check1,
      check2,
      check3
    }
  },
  mounted() {
    let myTextarea2 = document.getElementById('base2')
    let CodeMirrorEditor2 = CodeMirror.fromTextArea(myTextarea2, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    CodeMirrorEditor2.setValue(
      `<template>
  <div class="content">
    <h1>按钮</h1>
    <z-radio-group v-model:value="check1">
      <z-radio-button value="1">选项一</z-radio-button>
      <z-radio-button value="2">选项2</z-radio-button>
    </z-radio-group>
    <br>
    <z-radio-group v-model:value="check2" style="margin-top:20px">
      <z-radio-button value="a">选项a</z-radio-button>
      <z-radio-button value="b" disabled>选项b</z-radio-button>
      <z-radio-button value="c">选项c</z-radio-button>
      <z-radio-button value="d">选项d</z-radio-button>
    </z-radio-group>
    <br>
    <z-radio-group v-model:value="check3" style="margin-top:20px" disabled>
      <z-radio-button value="a">选项a</z-radio-button>
      <z-radio-button value="b" disabled>选项b</z-radio-button>
      <z-radio-button value="c">选项c</z-radio-button>
      <z-radio-button value="d">选项d</z-radio-button>
    </z-radio-group>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const check1 = ref(false)
    const check2 = ref('a')
    const check3 = ref('a')
    return {
      check1,
      check2,
      check3
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
