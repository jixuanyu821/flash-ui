<!-- wyf 2022-1-28 -->
<template>
  <div class="tree-sel-ctn">
    <h1>基础</h1>
    <ZTreeSelect
      v-model:value="value1"
      :tree-data="treeData"
      tree-default-expand-all
    />
    <div style="margin-top: 24px">
      <textarea id="base1" cols="3" />
    </div>
    <br>
    <br>
    <h1>多选 | 可输入</h1>
    <ZTreeSelect
      v-model:value="value2"
      :tree-data="treeData"
      allow-clear
      tree-default-expand-all
      multiple
      show-search
    />
    <div style="margin-top: 24px">
      <textarea id="base2" cols="3" />
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import ZTreeSelect from '@/lib/tree-select/tree-select.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZTreeSelect },
  setup() {
    const value1 = ref('')
    const value2 = ref([])
    const treeData = ref([
      {
        title: 'parent 1',
        value: 'parent 1',
        children: [
          {
            title: 'parent 1-0',
            value: 'parent 1-0',
            children: [
              {
                title: 'my leaf',
                value: 'leaf1'
              },
              {
                title: 'your leaf',
                value: 'leaf2'
              }
            ]
          },
          {
            title: 'parent 1-1',
            value: 'parent 1-1'
          }
        ]
      }
    ])
    return {
      value1,
      value2,
      treeData
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
      `<template>
  <div>
    <ZTreeSelect
      v-model:value="value1"
      :tree-data="treeData"
      tree-default-expand-all
    />
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value1 = ref('')
      const treeData = ref([
        {
          title: 'parent 1',
          value: 'parent 1',
          children: [
            {
              title: 'parent 1-0',
              value: 'parent 1-0',
              children: [
                {
                  title: 'my leaf',
                  value: 'leaf1'
                },
                {
                  title: 'your leaf',
                  value: 'leaf2'
                }
              ]
            },
            {
              title: 'parent 1-1',
              value: 'parent 1-1'
            }
          ]
        }
      ])
      return {
        value1,
        treeData
      }
    },
  })
<\/script>
    `
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
  <div>
    <ZTreeSelect
      v-model:value="value2"
      :tree-data="treeData"
      allow-clear
      tree-default-expand-all
      multiple
      show-search
    />
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value2 = ref([])
      const treeData = ref([
        {
          title: 'parent 1',
          value: 'parent 1',
          children: [
            {
              title: 'parent 1-0',
              value: 'parent 1-0',
              children: [
                {
                  title: 'my leaf',
                  value: 'leaf1'
                },
                {
                  title: 'your leaf',
                  value: 'leaf2'
                }
              ]
            },
            {
              title: 'parent 1-1',
              value: 'parent 1-1'
            }
          ]
        }
      ])
      return {
        value2,
        treeData
      }
    },
  })
<\/script>
    `
    )
  }
})
</script>

<style lang="less">
.tree-sel-ctn {
  margin: 20px 0;
}
</style>
