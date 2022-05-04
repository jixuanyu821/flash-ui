<!-- wyf 2022-2-14 -->
<template>
  <div class="paginationbg-ctn">
    <h1>背景色</h1>
    <ZPaginationBg v-model:current="current5" :total="50" />
    <div style="height: 50px; overflow: hidden; margin-top: 24px">
      <textarea id="base5" />
    </div>
  </div>
</template>

<script>
import ZPaginationBg from '@/lib/pagination/pagination-bg.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZPaginationBg },
  setup() {
    const current5 = ref(1)
    return {
      current5
    }
  },
  mounted() {
    let myTextarea5 = document.getElementById('base5')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea5, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(`<ZPaginationBg v-model:current="current5" />`)
  }
})
</script>

<style lang="less">
.paginationbg-ctn {
  margin: 20px 0;
}
</style>
