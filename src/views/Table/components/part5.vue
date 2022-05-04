<!-- wyf 2022-2-18 -->
<template>
  <div class="table-ctn">
    <h1>可选择</h1>
    <ZTableSelect
      :data-source="dataSource4"
      :columns="columns4"
      :row-selection="rowSelection"
    />
    <div style="margin-top: 24px">
      <textarea id="base8" cols="3" />
    </div>
    <br>
  </div>
</template>

<script>
import ZTableSelect from '@lib/table/table-select.vue'
import { defineComponent, ref } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZTableSelect },
  setup() {
    const dataSource4 = ref([
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
    const columns4 = ref([
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
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
      }
    }
    return {
      dataSource4,
      columns4,
      rowSelection
    }
  },
  mounted() {
    let myTextarea8 = document.getElementById('base8')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea8, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<template>
  <div>
    <ZTableSelect
      :data-source="dataSource4"
      :columns="columns4"
      :row-selection="rowSelection"
    />
  </div>
</template>
<script>
  import { defineComponent, reactive, ref, nextTick, toRefs } from 'vue'
  export default defineComponent({
    setup() {
      const dataSource4 = ref([
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
      const columns4 = ref([
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
      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(selectedRowKeys, selectedRows)
        }
      }
      return {
        dataSource4,
        columns4,
        rowSelection
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
