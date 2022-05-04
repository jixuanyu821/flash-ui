<template>
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
</script>
    