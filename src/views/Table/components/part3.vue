<!-- wyf 2022-2-16 -->
<template>
  <div class="table-ctn">
    <h1>可伸缩列</h1>
    <h4>鼠标 hover 到 Name、 Age 分割线上体验</h4>
    <ZTable
      :data-source="dataSource3"
      :columns="columns3"
      @resizeColumn="resizeColumn"
    >
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span>
            <smile-outlined />
            Name
          </span>
        </template>
      </template>
    </ZTable>
    <div style="margin-top: 24px">
      <textarea id="base6" cols="3" />
    </div>
    <br>
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
    const dataSource3 = ref([
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser']
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
      }
    ])
    const columns3 = ref([
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        resizable: true,
        width: 150
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        resizable: true,
        width: 100,
        minWidth: 100,
        maxWidth: 200
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags'
      },
      {
        title: 'Action',
        key: 'action'
      }
    ])
    return {
      dataSource3,
      columns3,
      resizeColumn: (w, col) => {
        col.width = w
      }
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
    <ZTable
      :data-source="dataSource3"
      :columns="columns3"
      @resizeColumn="resizeColumn"
    />
  </div>
</template>
<script>
  import { defineComponent, reactive, ref, nextTick, toRefs } from 'vue'
  export default defineComponent({
    setup() {
      const dataSource3 = ref([
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer']
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser']
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher']
        }
      ])
      const columns3 = ref([
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          resizable: true,
          width: 150
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          resizable: true,
          width: 100,
          minWidth: 100,
          maxWidth: 200
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address'
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags'
        },
        {
          title: 'Action',
          key: 'action'
        }
      ])
      return {
        dataSource3,
        columns3,
        resizeColumn: (w, col) => {
          col.width = w
        }
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
