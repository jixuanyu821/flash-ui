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
      <z-radio v-model:checked="check2" :disabled="disabled">单选</z-radio>
      <br>
      <z-radio v-model:checked="check3" :disabled="!disabled">禁用</z-radio>
      <br>
      <z-button @click="toggleDisabled">切换</z-button>
    </div>
    <div style="margin-top:24px">
      <textarea id="base3" cols="3" />
    </div>
  </div>
</template>
<script>
import ZRadio from '@/lib/radio/radio.vue'
import ZButton from '@/lib/button/button.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
export default defineComponent({
  components: {
    ZRadio,
    ZButton
  },
  setup() {
    const check2 = ref(false)
    const check3 = ref(false)
    const disabled = ref(false)
    const toggleDisabled = () => {
      disabled.value = !disabled.value
    }
    return {
      check2,
      check3,
      disabled,
      toggleDisabled
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
  <div>
    <z-radio v-model:checked="check2" :disabled="disabled">单选</z-radio>
    <br>
    <z-radio v-model:checked="check3" :disabled="disabled">禁用</z-radio>
    <br>
    <z-button @click="toggleDisabled">切换</z-button>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const check2 = ref(false)
      const check3 = ref(false)
      const disabled = ref(false)
      const toggleDisabled = () => {
        disabled.value = !disabled.value
      }
      return {
        check2,
        check3,
        disabled,
        toggleDisabled
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
