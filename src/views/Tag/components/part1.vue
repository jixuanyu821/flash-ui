<!-- wyf 2022-1-28 -->
<template>
  <div class="tag-ctn">
    <h1>基础</h1>
    <ZTag> tag1 </ZTag>
    <div style="height: 50px; overflow: hidden; margin-top: 24px">
      <textarea id="base1" />
    </div>
    <br>
    <br>
    <h1>可关闭标签</h1>
    <ZTag closable @close="close"> tag2 </ZTag>
    <ZTag closable @close="close"> tag3 </ZTag>
    <div style="margin-top: 24px">
      <textarea id="base2" />
    </div>
    <br>
    <br>
    <h1>icon标签</h1>
    <ZTag><user-outlined /> tag4 </ZTag>
    <div style="height: 50px; overflow: hidden; margin-top: 24px">
      <textarea id="base3" />
    </div>
    <br>
    <br>
    <h1>彩色标签</h1>
    <ZTag color="red"> red </ZTag>
    <ZTag color="#f50"> #f50 </ZTag>
    <div style="height: 100px; overflow: hidden; margin-top: 24px">
      <textarea id="base4" />
    </div>
    <br>
    <br>
    <h1>预设状态标签(4种)</h1>
    <ZTag color="success"> success </ZTag>
    <ZTag color="processing"> processing </ZTag>
    <ZTag color="error"> error </ZTag>
    <ZTag color="warning"> warning </ZTag>
    <div style="height: 150px; overflow: hidden; margin-top: 24px">
      <textarea id="base5" />
    </div>
  </div>
</template>

<script>
import ZTag from '@lib/tag/tag.vue'
import { defineComponent } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZTag },
  setup() {
    const close = (e) => {
      console.log(e, 'close')
    }
    return {
      close
    }
  },
  mounted() {
    let myTextarea1 = document.getElementById('base1')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea1, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(`<ZTag> tag1 </ZTag>`)

    let myTextarea2 = document.getElementById('base2')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea2, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<template>
  <div>
    <ZTag closable @close="close"> tag2 </ZTag>
    <ZTag closable @close="close"> tag3 </ZTag>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const close = (e) => {
        console.log(e, 'close')
      }
      return {
        close
      }
    }
  })
<\/script>
    `)

    let myTextarea3 = document.getElementById('base3')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea3, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(`<ZTag><user-outlined /> tag4 </ZTag>`)

    let myTextarea4 = document.getElementById('base4')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea4, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<ZTag closable color="red"> red </ZTag>
<ZTag color="#f50"> #f50 </ZTag>
    `)

    let myTextarea5 = document.getElementById('base5')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea5, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<ZTag color="success"> success </ZTag>
<ZTag color="processing"> processing </ZTag>
<ZTag color="error"> error </ZTag>
<ZTag color="warning"> warning </ZTag>
    `)
  },
  methods: {
    handleChange(e) {
      console.log(e, 'handleChange')
    }
  }
})
</script>

<style lang="less">
.tag-ctn {
  margin: 20px 0;
}
</style>
