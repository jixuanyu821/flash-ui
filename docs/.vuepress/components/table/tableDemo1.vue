<template>
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
</script>
    