<!--
 * @Author: jixuanyu
 * @Date: 2022-01-23 13:55:16
 * @LastEditors: jixuanyu
 * @Description: 基础单选
-->
<template>
  <div class="content">
    <z-checkbox
      v-model:checked="checkAll"
      :indeterminate="indeterminate"
      @change="onCheckAllChange"
    >
      全选
    </z-checkbox>
    <a-divider />
    checkedList : {{ checkedList }}
    <z-checkbox-group v-model:value="checkedList" :options="plainOptions" />
    <div style="margin-top:24px">
      <textarea id="base2" cols="3" />
    </div>
  </div>
</template>
<script>
import ZCheckbox from '@/lib/checkbox/checkbox'
import ZCheckboxGroup from '@/lib/checkbox/checkbox-group'
import { defineComponent, reactive, toRefs, watch } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
const plainOptions = ['Apple', 'Pear', 'Orange']
export default defineComponent({
  components: {
    ZCheckbox,
    ZCheckboxGroup
  },
  setup() {
    const state = reactive({
      indeterminate: true,
      checkAll: false,
      checkedList: ['Apple', 'Orange']
    })
    // const onCheckAllChange = e => {
    //   Object.assign(state, {
    //     checkedList: e.target.checked ? plainOptions : [],
    //     indeterminate: false
    //   })
    // }
    watch(() => state.checkedList, val => {
      state.indeterminate = !!val.length && val.length < plainOptions.length
      state.checkAll = val.length === plainOptions.length
    })
    return { ...toRefs(state),
      plainOptions
      // onCheckAllChange
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
    <z-checkbox
      v-model:checked="checkAll"
      :indeterminate="indeterminate"
      @change="onCheckAllChange"
    >
      全选
    </z-checkbox>
    <a-divider />
    checkedList : {{ checkedList }}
    <z-checkbox-group v-model:value="checkedList" :options="plainOptions" />
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs, watch } from 'vue'
const plainOptions = ['Apple', 'Pear', 'Orange']
export default defineComponent({
  setup() {
    const state = reactive({
      indeterminate: true,
      checkAll: false,
      checkedList: ['Apple', 'Orange']
    })
    const onCheckAllChange = e => {
      Object.assign(state, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false
      })
    }
    watch(() => state.checkedList, val => {
      state.indeterminate = !!val.length && val.length < plainOptions.length
      state.checkAll = val.length === plainOptions.length
    })
    return { ...toRefs(state),
      plainOptions,
      onCheckAllChange
    }
  },
})
<\/script>`
    )
  },
  methods: {
    onCheckAllChange(e) {
      Object.assign(this.state, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false
      })
    }
  }
})
</script>
<style scoped>
 .content{
   margin-bottom: 16px;
 }
</style>
