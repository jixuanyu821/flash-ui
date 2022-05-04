<!-- wyf 2022-3-30 -->
<template>
  <a-upload
    :accept="accept"
    :action="action"
    :before-upload="beforeUpload"
    :custom-request="customRequest"
    :data="data"
    :directory="directory"
    :disabled="disabled"
    :file-list="fileList"
    :headers="headers"
    :is-image-url="isImageUrl"
    :list-type="listType"
    :max-count="maxCount"
    :method="method"
    :multiple="multiple"
    :name="name"
    :open-file-dialog-on-click="openFileDialogOnClick"
    :preview-file="previewFile"
    :progress="progress"
    :show-upload-list="showUploadList"
    :support-server-render="supportServerRender"
    :with-credentials="withCredentials"
    @download="download"
    @drop="drop"
    @preview="preview"
    @reject="reject"
    @remove="remove"
  >
    <template v-if="$slots.downloadIcon" #downloadIcon>
      <slot name="downloadIcon" />
    </template>
    <template v-if="$slots.iconRender" #iconRender>
      <slot name="iconRender" />
    </template>
    <template v-if="$slots.itemRender" #itemRender>
      <slot name="itemRender" />
    </template>
    <template v-if="$slots.previewIcon" #previewIcon>
      <slot name="previewIcon" />
    </template>
    <template v-if="$slots.removeIcon" #removeIcon>
      <slot name="removeIcon" />
    </template>
    <slot />
  </a-upload>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZUpload',
  props: {
    accept: {
      type: String,
      default: undefined
    },
    action: {
      type: String || Function,
      default: undefined
    },
    beforeUpload: {
      type: Function,
      default: undefined
    },
    customRequest: {
      type: Function,
      default: undefined
    },
    data: {
      type: Object || Function,
      default: undefined
    },
    directory: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fileList: {
      type: Object,
      default: undefined
    },
    headers: {
      type: Object,
      default: undefined
    },
    isImageUrl: {
      type: Function,
      default: undefined
    },
    listType: {
      type: String,
      default: 'text'
    },
    maxCount: {
      type: Number,
      default: undefined
    },
    method: {
      type: String,
      default: undefined
    },
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'file'
    },
    openFileDialogOnClick: {
      type: Boolean,
      default: true
    },
    previewFile: {
      type: Function,
      default: undefined
    },
    progress: {
      type: String,
      default: 'line'
    },
    showUploadList: {
      type: Boolean,
      default: true
    },
    supportServerRender: {
      type: Boolean,
      default: false
    },
    withCredentials: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    download(file) {
      this.$emit('download', file)
    },
    drop(e) {
      this.$emit('drop', e)
    },
    preview(file) {
      this.$emit('preview', file)
    },
    reject(fileList) {
      this.$emit('reject', fileList)
    },
    remove(file) {
      this.$emit('remove', file)
    }
  }
})
</script>
