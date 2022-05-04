<template>
  <div class="contanier">
    <part1 />
    <part2 />
    <part3 />
    <part4 />
    <hr style="margin: 24px auto">
    <h3>其他相关demo可以参考ant-design</h3>
    <h1>Checkbox</h1>
    <a-table
      :data-source="dataSource1"
      :columns="columns1"
      :pagination="false"
    />
    <h2 style="margin-top: 24px">事件</h2>
    <a-table
      :data-source="dataSource2"
      :columns="columns2"
      :pagination="false"
    />
    <h1>CheckboxGroup</h1>
    <a-table
      :data-source="dataSource3"
      :columns="columns3"
      :pagination="false"
    />
    <h3 style="margin-top: 24px">事件</h3>
    <a-table
      :data-source="dataSource4"
      :columns="columns2"
      :pagination="false"
    />
    <h1>方法</h1>
    <h2 style="margin-top: 24px">Radio</h2>
    <a-table
      :data-source="dataSource5"
      :columns="columns5"
      :pagination="false"
    />
  </div>
</template>
<script>
import part1 from './components/part1.vue'
import part2 from './components/part2.vue'
import part3 from './components/part3.vue'
import part4 from './components/part4.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Checkbox',
  components: {
    part1,
    part2,
    part3,
    part4
  },
  data() {
    return {
      dataSource1: [
        {
          property: 'autofocus',
          description: '自动获取焦点',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'checked(v-model)',
          description: '指定当前是否选中',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'disabled',
          description: '失效状态',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'indeterminate',
          description: '设置 indeterminate 状态，只负责样式控制',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'value',
          description: '与 CheckboxGroup 组合使用时的值',
          type: 'boolean | string | number',
          default: '-'
        }
      ],
      columns1: [
        {
          title: '参数',
          dataIndex: 'property',
          key: 'property',
          width: 200
        },
        {
          title: '说明',
          dataIndex: 'description',
          key: 'description'
        },
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type'
        },
        {
          title: '默认值',
          dataIndex: 'default',
          key: 'default'
        }
      ],
      dataSource2: [
        {
          property: 'change',
          description: '变化时回调函数',
          function: 'Function(e:Event)',
          version: '-'
        }
      ],
      columns2: [
        {
          title: '事件名称',
          dataIndex: 'property',
          key: 'property',
          width: 200
        },
        {
          title: '说明',
          dataIndex: 'description',
          key: 'description'
        },
        {
          title: '回调参数',
          dataIndex: 'function',
          key: 'function'
        },
        {
          title: '版本',
          dataIndex: 'version',
          key: 'version'
        }
      ],
      dataSource3: [
        {
          property: 'disabled',
          description: '整组失效',
          type: 'boolean',
          default: 'false'
        },
        {
          property: 'name',
          description: 'CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性',
          type: 'string',
          default: '-'
        },
        {
          property: 'options',
          description: '指定可选项，可以通过 slot="label" slot-scope="option" 定制label',
          type: 'string[] | Array<{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }>',
          default: '[]'
        }
      ],
      columns3: [
        {
          title: '参数',
          dataIndex: 'property',
          key: 'property',
          width: 200
        },
        {
          title: '说明',
          dataIndex: 'description',
          key: 'description'
        },
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type'
        },
        {
          title: '默认值',
          dataIndex: 'default',
          key: 'default'
        }
      ],
      dataSource4: [
        {
          property: 'change',
          description: '变化时回调函数',
          function: 'Function(checkedValue)',
          version: '-'
        }
      ],
      dataSource5: [
        {
          name: 'blur()',
          description: '移除焦点'
        },
        {
          name: 'focus()',
          description: '获取焦点'
        }
      ],
      columns5: [
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
          width: 200
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description'
        }
      ]
    }
  }
})
</script>
<style scoped>
.contanier{
  margin-bottom: 36px;
}
</style>
