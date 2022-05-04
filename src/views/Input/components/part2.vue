<!-- wyf 2022-1-24 -->
<template>
  <div class="ipt-ctn">
    <h1>密码框</h1>
    <ZPassword v-model:value="value" />
    <div style="height: 50px; overflow: hidden; margin-top: 24px">
      <textarea id="base2" cols="3" />
    </div>
  </div>
</template>

<script>
import ZPassword from '@/lib/input/password.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZPassword },
  setup() {
    const value = ref('')
    return {
      value
    }
  },
  mounted() {
    let myTextarea = document.getElementById('base2')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<ZPassword v-model:value="value" />`
    )
  }
})
</script>

<style lang="less">
.ipt-ctn {
  margin: 20px 0;
}
</style>
