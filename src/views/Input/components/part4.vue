<!-- wyf 2022-1-24 -->
<template>
  <div class="ipt-ctn">
    <h1>textarea</h1>
    <ZTextarea
      v-model:value="value"
      :show-count="true"
      :maxlength="maxlength"
    />
    <div style="margin-top: 24px">
      <textarea id="base4" cols="3" />
    </div>
    <br>
    <br>
    <h1>输入框组合</h1>
    <ZInputGroup>
      <ZInput />
      <ZInput />
    </ZInputGroup>
    <div style="height: 100px; overflow: hidden; margin-top: 24px">
      <textarea id="base5" cols="3" />
    </div>
  </div>
</template>

<script>
import ZTextarea from '@/lib/input/textarea.vue'
import ZInput from '@/lib/input/input.vue'
import ZInputGroup from '@/lib/input/input-group.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZTextarea, ZInput, ZInputGroup },
  setup() {
    const value = ref('')
    const maxlength = ref(100)
    return {
      value,
      maxlength
    }
  },
  mounted() {
    let myTextarea4 = document.getElementById('base4')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea4, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<template>
  <div>
    <ZTextarea
      v-model:value="value"
      :show-count="true"
      :maxlength="maxlength"
    />
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref('')
      const maxlength = ref(100)
      return {
        value,
        maxlength
      }
    },
  })
<\/script>
    `
    )

    let myTextarea5 = document.getElementById('base5')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea5, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<ZInputGroup>
  <ZInput />
  <ZInput />
</ZInputGroup>`
    )
  }
})
</script>

<style lang="less">
.ipt-ctn {
  margin: 20px 0;
  .ant-input-textarea {
    width: 248px;
  }
}
</style>
