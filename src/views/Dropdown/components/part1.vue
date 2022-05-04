<!-- wyf 2022-3-14 -->
<template>
  <div class="dropdown-ctn">
    <h1>基础</h1>
    <z-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        Hover me
        <DownOutlined />
      </a>
      <template #overlay>
        <z-menu>
          <z-menu-item>
            <a href="javascript:;">1st menu item</a>
          </z-menu-item>
          <z-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </z-menu-item>
          <z-menu-divider />
          <z-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </z-menu-item>
        </z-menu>
      </template>
    </z-dropdown>
    <div style="margin-top: 24px">
      <textarea id="base1" cols="3" />
    </div>
    <br>
    <br>
    <h1>按钮类型</h1>
    <z-dropdown-button>
      <template #overlay>
        <z-menu @click="handleMenuClick">
          <z-menu-item key="1">
            <UserOutlined />
            1st menu item
          </z-menu-item>
          <z-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </z-menu-item>
          <z-menu-item key="3">
            <UserOutlined />
            3rd item
          </z-menu-item>
        </z-menu>
      </template>
      Button
    </z-dropdown-button>
    <div style="margin-top: 24px">
      <textarea id="base2" cols="3" />
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
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
      `<z-dropdown>
  <a class="ant-dropdown-link" @click.prevent>
    Hover me
    <DownOutlined />
  </a>
  <template #overlay>
    <z-menu>
      <z-menu-item>
        <a href="javascript:;">1st menu item</a>
      </z-menu-item>
      <z-menu-item>
        <a href="javascript:;">2nd menu item</a>
      </z-menu-item>
      <z-menu-divider />
      <z-menu-item>
        <a href="javascript:;">3rd menu item</a>
      </z-menu-item>
    </z-menu>
  </template>
</z-dropdown>
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
      `<z-dropdown-button>
  <template #overlay>
    <z-menu @click="handleMenuClick">
      <z-menu-item key="1">
        <UserOutlined />
        1st menu item
      </z-menu-item>
      <z-menu-item key="2">
        <UserOutlined />
        2nd menu item
      </z-menu-item>
      <z-menu-item key="3">
        <UserOutlined />
        3rd item
      </z-menu-item>
    </z-menu>
  </template>
  Button
  <DownOutlined />
</z-dropdown-button>
`
    )
  }
})
</script>

<style lang="less">
.dropdown-ctn {
  margin: 20px 0;
}
</style>
