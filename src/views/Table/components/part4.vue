<!-- wyf 2022-2-18 -->
<template>
  <div class="table-ctn">
    <h1>表头分组+排序功能</h1>
    <ZTable
      :data-source="dataSource4"
      :columns="columns4"
      bordered
      :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
    />
    <div style="margin-top: 24px">
      <textarea id="base7" cols="3" />
    </div>
    <br>
  </div>
</template>

<script>
import ZTable from '@lib/table/table.vue'
import { defineComponent } from 'vue'
import * as CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'

export default defineComponent({
  components: { ZTable },
  setup() {
    const columns4 = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 100,
        fixed: 'left'
      },
      {
        title: 'Other',
        children: [
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 200,
            sorter: (a, b) => a.age - b.age
          },
          {
            title: 'Address',
            children: [
              {
                title: 'Street',
                dataIndex: 'street',
                key: 'street',
                width: 200
              },
              {
                title: 'Block',
                children: [
                  {
                    title: 'Building',
                    dataIndex: 'building',
                    key: 'building',
                    width: 100
                  },
                  {
                    title: 'Door No.',
                    dataIndex: 'number',
                    key: 'number',
                    width: 100
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Company',
        children: [
          {
            title: 'Company Address',
            dataIndex: 'companyAddress',
            key: 'companyAddress',
            width: 200
          },
          {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName'
          },
          {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            width: 80,
            fixed: 'right'
          }
        ]
      }
    ]
    const dataSource4 = [...Array(10)].map((_, i) => ({
      key: i,
      name: 'John Brown',
      age: i + 1,
      street: 'Lake Park',
      building: 'C',
      number: 2035,
      companyAddress: 'Lake Street 42',
      companyName: 'SoftLake Co',
      gender: 'M'
    }))
    return {
      columns4,
      dataSource4
    }
  },
  mounted() {
    let myTextarea7 = document.getElementById('base7')
    this.CodeMirrorEditor = CodeMirror.fromTextArea(myTextarea7, {
      mode: 'javascript', // 编辑器语言
      theme: 'idea', // 编辑器主题
      extraKeys: { Ctrl: 'autocomplete' }, // ctrl可以弹出选择项
      lineNumbers: true // 显示行号
    })
    this.CodeMirrorEditor.setValue(
      `<template>
  <div>
    <ZTable
      :data-source="dataSource4"
      :columns="columns4"
      bordered
      :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
    />
  </div>
</template>
<script>
  import { defineComponent, reactive, ref, nextTick, toRefs } from 'vue'
  export default defineComponent({
    setup() {
      const columns4 = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 100,
          fixed: 'left'
        },
        {
          title: 'Other',
          children: [
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
              width: 200,
              sorter: (a, b) => a.age - b.age
            },
            {
              title: 'Address',
              children: [
                {
                  title: 'Street',
                  dataIndex: 'street',
                  key: 'street',
                  width: 200
                },
                {
                  title: 'Block',
                  children: [
                    {
                      title: 'Building',
                      dataIndex: 'building',
                      key: 'building',
                      width: 100
                    },
                    {
                      title: 'Door No.',
                      dataIndex: 'number',
                      key: 'number',
                      width: 100
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Company',
          children: [
            {
              title: 'Company Address',
              dataIndex: 'companyAddress',
              key: 'companyAddress',
              width: 200
            },
            {
              title: 'Company Name',
              dataIndex: 'companyName',
              key: 'companyName'
            },
            {
              title: 'Gender',
              dataIndex: 'gender',
              key: 'gender',
              width: 80,
              fixed: 'right'
            }
          ]
        }
      ]
      const dataSource4 = [...Array(10)].map((_, i) => ({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M'
      }))
      return {
        columns4,
        dataSource4
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
