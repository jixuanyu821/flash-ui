<!-- wyf 2022-2-14 -->
<template>
  <div class="pagination-ctn">
    <h1>基础分页</h1>
    <ZPagination v-model:current="current1" :total="50" />
    <div style="height: 50px; overflow: hidden; margin-top: 24px">
      <textarea id="base1" />
    </div>
    <br>
    <h1>更多分页</h1>
    <ZPagination
      v-model:current="current2"
      v-model:pageSize="pageSize"
      :total="total"
    />
    <div style="margin-top: 24px">
      <textarea id="base2" />
    </div>
    <br>
    <br>
    <h1>自定义下拉选项</h1>
    <ZPagination
      v-model:current="current3"
      v-model:pageSize="pageSize"
      :total="total"
      :page-size-options="pageSizeOptions"
      :show-total="showTotal"
    >
      <template #buildOptionText="props">
        <span>{{ props.value }}条/页</span>
      </template>
    </ZPagination>
    <div style="margin-top: 24px">
      <textarea id="base3" />
    </div>
    <br>
    <br>
    <h1>跳转</h1>
    <ZPagination
      v-model:current="current4"
      :total="50"
      show-quick-jumper
    />
    <div style="height: 150px; overflow: hidden; margin-top: 24px">
      <textarea id="base4" />
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import ZPagination from '@lib/pagination/pagination.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZPagination },
  setup() {
    const current1 = ref(1)
    const current2 = ref(1)
    const current3 = ref(1)
    const current4 = ref(1)
    const total = ref(500)
    const pageSizeOptions = ref(['10', '20', '30', '40', '50'])
    const showTotal = (total) => {
      return `共 ${total} 条`
    }
    const pageSizeRef = ref(10)

    return {
      current1,
      current2,
      current3,
      current4,
      total,
      pageSizeOptions,
      pageSize: pageSizeRef,
      showTotal
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
    this.CodeMirrorEditor.setValue(
      `<ZPagination v-model:current="current1" :total="50" />`
    )

    let myTextarea2 = document.getElementById('base2')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea2, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<template>
  <ZPagination
    v-model:current="current2"
    v-model:pageSize="pageSize"
    :total="total"
  />
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const current2 = ref(2)
      const total = ref(500)
      const pageSizeRef = ref(10)
      return {
        current2,
        total,
        pageSize: pageSizeRef
      }
    }
  })
<\/script>
    `
    )

    let myTextarea3 = document.getElementById('base3')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea3, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<template>
  <ZPagination
    v-model:current="current3"
    v-model:pageSize="pageSize"
    :total="total"
    :page-size-options="pageSizeOptions"
    :show-total="showTotal"
  >
    <template #buildOptionText="props">
      <span>{{ props.value }}条/页</span>
    </template>
  </ZPagination>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const current3 = ref(2)
      const total = ref(500)
      const pageSizeOptions = ref(['10', '20', '30', '40', '50'])
      const pageSizeRef = ref(10)
      return {
        current3,
        total,
        pageSizeOptions,
        pageSize: pageSizeRef
      }
    }
  })
<\/script>
    `
    )

    let myTextarea4 = document.getElementById('base4')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea4, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<ZPagination
  v-model:current="current4"
  :total="50"
  show-quick-jumper
/>
    `)
  }
})
</script>

<style lang="less">
.pagination-ctn {
  margin: 20px 0;
}
</style>
