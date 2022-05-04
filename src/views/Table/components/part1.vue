<!-- wyf 2022-2-16 -->
<template>
  <div class="table-ctn">
    <h1>基础</h1>
    <ZTable
      :data-source="dataSource"
      :columns="columns"
    />
    <div style="margin-top: 24px">
      <textarea id="base1" cols="3" />
    </div>
    <br>
    <br>
    <h1>超过宽度将自动省略</h1>
    <h4>暂不支持和排序一起使用</h4>
    <ZTable
      :data-source="dataSource2"
      :columns="columns"
    />
    <div style="margin-top: 24px">
      <textarea id="base2" cols="3" />
    </div>
    <br>
    <br>
    <h1>添加表格边框线</h1>
    <ZTable
      :data-source="dataSource"
      :columns="columns"
      bordered
    >
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
      </template>
      <template #title>Header</template>
      <template #footer>Footer</template>
    </ZTable>
    <div style="margin-top: 24px">
      <textarea id="base3" cols="3" />
    </div>
    <br>
    <br>
    <h1>带斑马纹表格</h1>
    <h4>添加类名table-striped,给类名加样式</h4>
    <ZTable
      :data-source="dataSource"
      :columns="columns"
      :row-class-name="
        (_record, index) => (index % 2 == 1 ? 'table-striped' : null)
      "
    />
    <div style="margin-top: 24px">
      <textarea id="base4" cols="3" />
    </div>
  </div>
</template>

<script>
import ZTable from '@lib/table/table.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZTable },
  setup() {
    const dataSource = ref([
      {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park'
      }
    ])
    const dataSource2 = ref([
      {
        key: '1',
        name: '超出自动省略    超出自动省略    超出自动省略    超出自动省略     超出自动省略',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park'
      }
    ])
    const columns = ref([
      {
        title: 'Name',
        dataIndex: 'name',
        ellipsis: true
      },
      {
        title: 'Cash Assets',
        dataIndex: 'money'
      },
      {
        title: 'Address',
        dataIndex: 'address'
      }
    ])
    return {
      dataSource,
      dataSource2,
      columns
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
    <ZTable
      :data-source="dataSource"
      :columns="columns"
    />
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const dataSource = ref([
        {
          key: '1',
          name: 'John Brown',
          money: '￥300,000.00',
          address: 'New York No. 1 Lake Park'
        },
        {
          key: '2',
          name: 'Jim Green',
          money: '￥1,256,000.00',
          address: 'London No. 1 Lake Park'
        },
        {
          key: '3',
          name: 'Joe Black',
          money: '￥120,000.00',
          address: 'Sidney No. 1 Lake Park'
        }
      ])
      const columns = ref([
        {
          title: 'Name',
          dataIndex: 'name',
          ellipsis: true
        },
        {
          title: 'Cash Assets',
          dataIndex: 'money'
        },
        {
          title: 'Address',
          dataIndex: 'address'
        }
      ])
      return {
        dataSource,
        columns
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
    <ZTable
      :data-source="dataSource2"
      :columns="columns"
    />
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const dataSource2 = ref([
        {
          key: '1',
          name: '超出自动省略    超出自动省略    超出自动省略    超出自动省略     超出自动省略',
          money: '￥300,000.00',
          address: 'New York No. 1 Lake Park'
        }
      ])
      const columns = ref([
        {
          title: 'Name',
          dataIndex: 'name',
          ellipsis: true
        },
        {
          title: 'Cash Assets',
          dataIndex: 'money'
        },
        {
          title: 'Address',
          dataIndex: 'address'
        }
      ])
      return {
        dataSource2,
        columns
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
      `<ZTable
  :data-source="dataSource"
  :columns="columns"
  bordered
>
  <template #bodyCell="{ column, text }">
    <template v-if="column.dataIndex === 'name'">
      <a>{{ text }}</a>
    </template>
  </template>
  <template #title>Header</template>
  <template #footer>Footer</template>
</ZTable>
`)

    let myTextarea4 = document.getElementById('base4')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea4, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<ZTable
  :data-source="dataSource"
  :columns="columns"
  :row-class-name="
    (_record, index) => (index % 2 == 1 ? 'table-striped' : null)
  "
/>
// 类名加背景色
.table-striped {
  background-color: #f4f6fa;
}
`)
  }
})
</script>

<style lang="less">
.table-ctn {
  margin: 20px 0;
  .table-striped {
    background-color: #f4f6fa;
  }
}
</style>
