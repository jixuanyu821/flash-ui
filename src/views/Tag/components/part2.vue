<!-- wyf 2022-1-28 -->
<template>
  <div class="tag-ctn">
    <h1>标签添加</h1>
    <div v-for="(tag, index) in tags" :key="index" style="display: inline-block;">
      <ZTag closable @close="handleClose(tag)"> {{ tag }} </ZTag>
    </div>
    <ZTag v-if="!inputVisible" class="add-tag" @click="showInput">
      <plus-outlined />
      New Tag
    </ZTag>
    <ZInput
      v-else
      v-model:value="inputValue"
      input-ref="inputRef"
      type="text"
      size="small"
      :style="{ width: '78px', height: '24px' }"
      @blur="handleInputConfirm"
      @keyup.enter="handleInputConfirm"
    />
    <br>
    <br>
    <div style="margin-top: 24px">
      <textarea id="base6" cols="3" />
    </div>
  </div>
</template>

<script>
import ZTag from '@lib/tag/tag.vue'
import ZInput from '@lib/input/input.vue'
import { defineComponent, reactive, ref, nextTick, toRefs } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZTag, ZInput },
  setup() {
    const inputRef = ref()
    const state = reactive({
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      inputVisible: false,
      inputValue: ''
    })
    const handleClose = removedTag => {
      const tags = state.tags.filter(tag => tag !== removedTag)
      state.tags = tags
    }

    const showInput = () => {
      state.inputVisible = true
      nextTick(() => {
        inputRef.value.focus()
      })
    }
    const handleInputConfirm = () => {
      const inputValue = state.inputValue
      let tags = state.tags

      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue]
      }

      Object.assign(state, {
        tags,
        inputVisible: false,
        inputValue: ''
      })
    }
    return {
      ...toRefs(state),
      handleClose,
      showInput,
      handleInputConfirm,
      inputRef
    }
  },
  mounted() {
    let myTextarea6 = document.getElementById('base6')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea6, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<template>
  <div>
    <div v-for="(tag, index) in tags" :key="index" style="display: inline-block;">
      <ZTag closable @close="handleClose(tag)"> {{ tag }} </ZTag>
    </div>
    <ZTag v-if="!inputVisible" class="add-tag" @click="showInput">
      <plus-outlined />
      New Tag
    </ZTag>
    <ZInput
      v-else
      inputRef="inputRef"
      v-model:value="inputValue"
      type="text"
      size="small"
      :style="{ width: '78px', height: '24px' }"
      @blur="handleInputConfirm"
      @keyup.enter="handleInputConfirm"
    />
  </div>
</template>
<script>
  import { defineComponent, reactive, ref, nextTick, toRefs } from 'vue'
  export default defineComponent({
    setup() {
      const inputRef = ref()
      const state = reactive({
        tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      })
      const handleClose = removedTag => {
        const tags = state.tags.filter(tag => tag !== removedTag)
        state.tags = tags
      }

      const showInput = () => {
        state.inputVisible = true
        nextTick(() => {
          inputRef.value.focus()
        })
      }
      const handleInputConfirm = () => {
        const inputValue = state.inputValue
        let tags = state.tags

        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [...tags, inputValue]
        }

        Object.assign(state, {
          tags,
          inputVisible: false,
          inputValue: ''
        })
      }
      return {
        ...toRefs(state),
        handleClose,
        showInput,
        handleInputConfirm,
        inputRef
      }
    }
  })
<\/script>
    `)
  }
})
</script>

<style lang="less">
.tag-ctn {
  margin: 20px 0;
  .add-tag {
    background: #fff;
    border: 1px solid #D6D9DB !important;
  }
  .input-lg {
    height: 24px !important;
    width: 78px !important;
    margin-top: 10px;
  }
}
</style>
