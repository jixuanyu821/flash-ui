<!-- wyf 2022-1-28 -->
<template>
  <div class="sel-ctn">
    <h1>基础</h1>
    <ZSelect v-model:value="value" :options="options1" placeholder="请选择" />
    <div style="margin-top: 24px">
      <textarea id="base1" cols="3" />
    </div>
    <br>
    <br>
    <h1>下拉框方式</h1>
    <ZSelect v-model:value="value1" placeholder="请选择">
      <z-select-option
        v-for="(item, index) in options2"
        :key="index"
        :value="item.key"
      >
        {{ item.name }}
      </z-select-option>
    </ZSelect>
    <div style="margin-top: 24px">
      <textarea id="base2" cols="3" />
    </div>
    <br>
    <br>
    <h1>多选 | 可清除</h1>
    <ZSelect v-model:value="value2" mode="tags">
      <z-select-option value="jack3">Jack3</z-select-option>
      <z-select-option value="lucy3">Lucy3</z-select-option>
      <z-select-option value="rose3" disabled>rose3</z-select-option>
    </ZSelect>
    <div style="height: 150px; overflow: hidden; margin-top: 24px">
      <textarea id="base3" cols="3" />
    </div>
    <br>
    <br>
    <h1>搜索框</h1>
    <ZSelect
      v-model:value="value3"
      :options="options1"
      placeholder="Select a person"
      show-search
      :filter-option="filterOption"
    />
    <div style="margin-top: 24px">
      <textarea id="base4" cols="3" />
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import ZSelect from '@lib/select/select.vue'
import ZSelectOption from '@lib/select/select-option.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZSelect, ZSelectOption },
  setup() {
    const value = ref('')
    const value1 = ref('')
    const value2 = ref([])
    const value3 = ref('')
    const options1 = ref([
      {
        value: 'jack1',
        label: 'Jack1'
      },
      {
        value: 'lucy1',
        label: 'Lucy1'
      },
      {
        value: 'tom1',
        label: 'Tom1'
      }
    ])
    const options2 = ref([
      {
        key: 'jack2',
        name: 'Jack2'
      },
      {
        key: 'lucy2',
        name: 'Lucy2'
      }
    ])
    const filterOption = (input, option) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    return {
      value,
      value1,
      value2,
      value3,
      options1,
      options2,
      filterOption
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
  <ZSelect v-model:value="value" :options="options1" placeholder="请选择" />
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const options1 = ref([
        {
          value: 'jack1',
          label: 'Jack1'
        },
        {
          value: 'lucy1',
          label: 'Lucy1'
        },
        {
          value: 'tom1',
          label: 'Tom1'
        }
      ])
      return {
        options1
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
  <ZSelect v-model:value="value1" placeholder="请选择">
    <z-select-option
      v-for="(item, index) in options2"
      :key="index"
      :value="item.key"
    >
      {{ item.name }}
    </z-select-option>
  </ZSelect>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const options2 = ref([
        {
          key: 'jack2',
          name: 'Jack2'
        },
        {
          key: 'lucy2',
          name: 'Lucy2'
        }
      ])
      return {
        options2
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
      `<ZSelect v-model:value="value2" mode="tags">
  <z-select-option value="jack3">Jack3</z-select-option>
  <z-select-option value="lucy3">Lucy3</z-select-option>
  <z-select-option value="rose3" disabled>rose3</z-select-option>
</ZSelect>`
    )

    let myTextarea4 = document.getElementById('base4')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea4, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<template>
  <ZSelect
    v-model:value="value3"
    :options="options1"
    placeholder="Select a person"
    show-search
    :filter-option="filterOption"
  />
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value3 = ref('')
      const options1 = ref([
        {
          value: 'jack1',
          label: 'Jack1'
        },
        {
          value: 'lucy1',
          label: 'Lucy1'
        },
        {
          value: 'tom1',
          label: 'Tom1'
        }
      ])
      const filterOption = (input, option) => {
        return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      return {
        value3,
        options1,
        filterOption
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
.sel-ctn {
  margin: 20px 0;
}
</style>
