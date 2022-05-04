<!-- wyf 2022-1-17 -->
<template>
  <div class="btn-page">
    <h1>示例</h1>
    <div class="flexDiv">
      <div class="btn-item">
        <p>circle</p>
        <z-button type="primary" shape="circle">
          <template #icon>
            <DownloadOutlined />
          </template>
        </z-button>
      </div>
      <div class="btn-item">
        <p>primary</p>
        <z-button type="primary">
          常规
        </z-button>
      </div>
      <div class="btn-item">
        <p>default</p>
        <z-button type="default">
          次要
        </z-button>
      </div>
      <div class="btn-item">
        <p>success</p>
        <z-button type="success">
          成功
        </z-button>
      </div>
      <div class="btn-item">
        <p>danger</p>
        <z-button type="danger">
          错误
        </z-button>
      </div>
      <div class="btn-item">
        <p>warning</p>
        <z-button type="warning">
          警告
        </z-button>
      </div>
      <div class="btn-item">
        <p>dashed</p>
        <z-button type="dashed">
          虚线
        </z-button>
      </div>
      <div class="btn-item">
        <p>text</p>
        <z-button type="text">
          文本
        </z-button>
      </div>
      <div class="btn-item">
        <p>link</p>
        <z-button type="link">
          链接
        </z-button>
      </div>
      <div class="btn-item">
        <p>icon</p>
        <z-button type="primary">
          <template #icon>
            <user-outlined />
          </template>
          图标
        </z-button>
      </div>
    </div>
    <textarea id="codeperview" />
    <h1>配置项说明</h1>
    <a-table :data-source="dataSource" :columns="columns" :pagination="false" />
    <br>
    <h1>事件</h1>
    <a-table
      :data-source="dataSource2"
      :columns="columns2"
      :pagination="false"
    />
  </div>
</template>

<script>
import ZButton from '@lib/button/button.vue'
import { defineComponent } from 'vue'
// import { defineComponent, reactive } from 'vue'
// import * as CodeMirror from 'codemirror/lib/codemirror'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/idea.css'

export default defineComponent({
  name: 'Button',
  components: { ZButton }
//   setup() {
//     const dataSource = reactive([
//       {
//         key: '1',
//         Property: 'type',
//         Description: '按钮类型',
//         Type: 'String:  default | primary | success | danger | warning | dashed | text | link',
//         Default: 'primary'
//       },
//       {
//         key: '2',
//         Property: 'size',
//         Description: '按钮尺寸',
//         Type: 'String:  large | middle',
//         Default: 'middle'
//       },
//       {
//         key: '3',
//         Property: 'icon',
//         Description: '按钮图标',
//         Type: '插槽slot',
//         Default: '--'
//       },
//       {
//         key: '4',
//         Property: 'disabled',
//         Description: '是否禁用',
//         Type: 'Boolean',
//         Default: 'false'
//       },
//       {
//         key: '5',
//         Property: 'block',
//         Description: '将按钮宽度调整为其父宽度的选项',
//         Type: 'Boolean',
//         Default: 'false'
//       },
//       {
//         key: '6',
//         Property: 'ghost',
//         Description: '幽灵属性,使按钮背景透明',
//         Type: 'Boolean',
//         Default: 'false'
//       },
//       {
//         key: '7',
//         Property: 'href',
//         Description: '点击跳转的地址,指定此属性 button 的行为和 a 链接一致',
//         Type: 'string',
//         Default: '-'
//       },
//       {
//         key: '8',
//         Property: 'loading',
//         Description: '设置按钮载入状态',
//         Type: 'Boolean',
//         Default: 'false'
//       },
//       {
//         key: '9',
//         Property: 'shape',
//         Description: '设置按钮形状',
//         Type: 'circle | round',
//         Default: '-'
//       },
//       {
//         key: '10',
//         Property: 'target',
//         Description: '相当于 a 链接的 target 属性,href 存在时生效',
//         Type: 'string',
//         Default: '-'
//       }
//     ]
//     )
//     const columns = reactive([
//       {
//         title: '参数',
//         dataIndex: 'Property',
//         key: 'Property'
//       },
//       {
//         title: '说明',
//         dataIndex: 'Description',
//         key: 'Description'
//       },
//       {
//         title: '类型',
//         dataIndex: 'Type',
//         key: 'Type',
//         width: 200
//       },
//       {
//         title: '默认值',
//         dataIndex: 'Default',
//         key: 'Default'
//       }
//     ]
//     )
//     const dataSource2 = reactive([
//       {
//         key: '1',
//         Property: 'click',
//         Description: '点击按钮时的回调',
//         func: '(event) => void'
//       }
//     ])
//     const columns2 = reactive([
//       {
//         title: '事件',
//         dataIndex: 'Property',
//         key: 'Property'
//       },
//       {
//         title: '说明',
//         dataIndex: 'Description',
//         key: 'Description'
//       },
//       {
//         title: '回调参数',
//         dataIndex: 'func',
//         key: 'func'
//       }
//     ])
//     return {
//       dataSource,
//       columns,
//       dataSource2,
//       columns2
//     }
//   },
//   mounted() {
//     let myTextarea = document.getElementById('codeperview')
//     this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea, {
//       mode: 'javascript', // 编辑器语言
//       theme: 'idea', // 编辑器主题
//       extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
//       lineNumbers: true // 显示行号
//     })
//     this.CodeMirrorEditor.setValue(
//       `<div>
//   <z-button type="primary">常规</z-button>
//   <z-button type="default">次要</z-button>
//   <z-button type="success">成功</z-button>
//   <z-button type="danger">错误</z-button>
//   <z-button type="warning">警告</z-button>
//   <z-button type="dashed">虚线</z-button>
//   <z-button type="text">文本</z-button>
//   <z-button type="link">链接</z-button>
//   <z-button type="primary">
//     <template #icon>
//       <user-outlined />
//     </template>
//     图标
//   </z-button>
//   <z-button type="primary" size="large">大尺寸</z-button>
// </div>`
//     )
//   }
})
</script>

<style lang="less">
.btn-page {
  height: 100%;
  h1 {
    margin-bottom: 20px;
  }
  .cm-s-idea {
    margin: 20px 0;
  }
  .btn-item {
    margin-left: 24px;
    text-align: center;
    .ant-btn {
      margin: auto;
    }
  }
}
</style>
