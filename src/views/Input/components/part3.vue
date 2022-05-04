<!-- wyf 2022-1-24 -->
<template>
  <div class="ipt-ctn">
    <h1>search</h1>
    <ZSearch v-model:value="value" @search="search" />
    <div style="height: 50px; overflow: hidden; margin-top: 24px">
      <textarea id="base3" cols="3" />
    </div>
  </div>
</template>

<script>
import ZSearch from '@lib/input/search.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZSearch },
  setup() {
    const value = ref('')
    const search = (e) => {
      console.log(e, 'search')
    }
    return {
      value,
      search
    }
  },
  mounted() {
    let myTextarea = document.getElementById('base3')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<ZSearch v-model:value="value" @search="search" />`
    )
  }
})
</script>

<style lang="less">
.ipt-ctn {
  margin: 20px 0;
}
</style>
