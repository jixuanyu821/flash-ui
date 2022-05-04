<!-- wyf 2022-2-16 -->
<template>
  <div class="table-ctn">
    <h1>固定头和列</h1>
    <h4>
      若列头与内容不对齐或出现列重复,请指定固定列的宽度 width。如果指定 width
      不生效或出现白色垂直空隙,请尝试建议留一列不设宽度以适应弹性布局,或者检查是否有超长连续字段破坏布局。
      <br>
      建议指定
      scroll.x为大于表格宽度的固定值或百分比。注意,且非固定列宽度之和不要超过
      scroll.x。
    </h4>
    <br>
    <ZTable
      :data-source="dataSource1"
      :columns="columns1"
      :scroll="{ x: 1500, y: 300 }"
    />
    <div style="margin-top: 24px">
      <textarea id="base5" cols="3" />
    </div>
    <br>
  </div>
</template>

<script>
import ZTable from '@/lib/table/table.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZTable },
  setup() {
    const columns1 = ref([
      {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left'
      },
      {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left'
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        width: 150
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        width: 150
      },
      {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        width: 150
      },
      {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        width: 150
      },
      {
        title: 'Column 7',
        dataIndex: 'address',
        key: '7',
        width: 150
      },
      {
        title: 'Column 8',
        dataIndex: 'address',
        key: '8'
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100
      }
    ])
    const dataSource1 = ref([])
    for (let i = 0; i < 10; i++) {
      dataSource1.value.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London ${i}`
      })
    }
    return {
      dataSource1,
      columns1
    }
  },
  mounted() {
    let myTextarea5 = document.getElementById('base5')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea5, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<template>
  <div>
    <ZTable
      :data-source="dataSource1"
      :columns="columns1"
      :scroll="{ x: 1500, y: 300 }"
    />
  </div>
</template>
<script>
  import { defineComponent, ref} from 'vue'
  export default defineComponent({
    setup() {
      const columns1 = ref([
        {
          title: 'Full Name',
          width: 100,
          dataIndex: 'name',
          key: 'name',
          fixed: 'left'
        },
        {
          title: 'Age',
          width: 100,
          dataIndex: 'age',
          key: 'age',
          fixed: 'left'
        },
        {
          title: 'Column 1',
          dataIndex: 'address',
          key: '1',
          width: 150
        },
        {
          title: 'Column 2',
          dataIndex: 'address',
          key: '2',
          width: 150
        },
        {
          title: 'Column 3',
          dataIndex: 'address',
          key: '3',
          width: 150
        },
        {
          title: 'Column 4',
          dataIndex: 'address',
          key: '4',
          width: 150
        },
        {
          title: 'Column 5',
          dataIndex: 'address',
          key: '5',
          width: 150
        },
        {
          title: 'Column 6',
          dataIndex: 'address',
          key: '6',
          width: 150
        },
        {
          title: 'Column 7',
          dataIndex: 'address',
          key: '7',
          width: 150
        },
        {
          title: 'Column 8',
          dataIndex: 'address',
          key: '8'
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100
        }
      ])
      const dataSource1 = ref([])
      for (let i = 0; i < 10; i++) {
        dataSource1.value.push({
          key: i,
          name: 'Edrward',
          age: 32,
          address: 'London'
        })
      }
      return {
        dataSource1,
        columns1
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
.table-ctn {
  margin: 20px 0;
}
</style>
