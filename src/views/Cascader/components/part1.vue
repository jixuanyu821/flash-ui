<!-- wyf 2022-1-28 -->
<template>
  <div class="cascader-ctn">
    <h1>基础</h1>
    <ZCascader v-model:value="value" :options="options" placeholder="请选择" />
    <div style="margin-top: 24px">
      <textarea id="base1" cols="3" />
    </div>
    <br>
    <br>
    <h1>多选</h1>
    <ZCascader
      v-model:value="value1"
      :options="options1"
      multiple
      placeholder="请选择"
    />
    <div style="margin-top: 24px">
      <textarea id="base2" cols="3" />
    </div>
    <br>
    <br>
    <h1>可搜索选项并选择</h1>
    <ZCascader
      v-model:value="value2"
      :options="options"
      placeholder="请选择"
      :filter="{ showSearch }"
    />
    <div style="margin-top: 24px">
      <textarea id="base3" cols="3" />
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import ZCascader from '@/lib/cascader/cascader.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          },
          {
            value: 'disabled',
            label: 'disabled',
            disabled: true
          }
        ]
      }
    ]
  }
]
const options1 = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index
    }))
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish'
          },
          {
            label: 'Toy Cards',
            value: 'cards'
          },
          {
            label: 'Toy Bird',
            value: 'bird'
          }
        ]
      }
    ]
  }
]
export default defineComponent({
  components: { ZCascader },
  setup() {
    const value = ref([])
    const value1 = ref([])
    const value2 = ref([])
    const showSearch = (inputValue, path) => {
      return path.some(
        (option) =>
          option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      )
    }

    return {
      value,
      value1,
      value2,
      options,
      options1,
      showSearch
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
      <ZCascader v-model:value="value" :options="options" placeholder="请选择" />
    </div>
  </template>
  <script>
    import { defineComponent, ref } from 'vue'
    export default defineComponent({
      setup() {
        const value = ref([])
        const options = ref([
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake'
                  }
                ]
              }
            ]
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men'
                  },
                  {
                    value: 'disabled',
                    label: 'disabled',
                    disabled: true
                  }
                ]
              }
            ]
          }
        ])
        return {
          value,
          options
        }
      }
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
      <ZCascader
        v-model:value="value1"
        :options="options1"
        multiple
        placeholder="请选择"
      />
    </div>
  </template>
  <script>
    import { defineComponent, ref } from 'vue'
    export default defineComponent({
      setup() {
        const value1 = ref([])
        const options1 = [
          {
            label: 'Light',
            value: 'light',
            children: new Array(20).fill(null).map((_, index) => ({
              label: 'Number index',
              value: index
            }))
          },
          {
            label: 'Bamboo',
            value: 'bamboo',
            children: [
              {
                label: 'Little',
                value: 'little',
                children: [
                  {
                    label: 'Toy Fish',
                    value: 'fish'
                  },
                  {
                    label: 'Toy Cards',
                    value: 'cards'
                  },
                  {
                    label: 'Toy Bird',
                    value: 'bird'
                  }
                ]
              }
            ]
          }
        ]
        return {
          value1,
          options1
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
    <div>
      <ZCascader
        v-model:value="value2"
        :options="options"
        placeholder="请选择"
        :filter="{ showSearch }"
      />
    </div>
  </template>
  <script>
    import { defineComponent, ref } from 'vue'
    export default defineComponent({
      setup() {
        const value2 = ref([])
        const options = ref([
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake'
                  }
                ]
              }
            ]
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men'
                  },
                  {
                    value: 'disabled',
                    label: 'disabled',
                    disabled: true
                  }
                ]
              }
            ]
          }
        ])
        const showSearch = (inputValue, path) => {
          return path.some(
            (option) =>
              option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
          )
        }
        return {
          value2,
          options,
          showSearch
        }
      }
    })
  <\/script>
      `
    )
  }
})
</script>

<style lang="less">
.cascader-ctn {
  margin: 20px 0;
}
</style>
