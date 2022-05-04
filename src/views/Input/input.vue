<!-- wyf 2022-1-20 -->
<template>
  <div class="ipt-page">
    <part1 />
    <part2 />
    <part3 />
    <part4 />
    <h3>其他相关demo可以参考ant-design</h3>
    <h1>Input参数</h1>
    <a-table
      :data-source="dataSource1"
      :columns="columns1"
      :pagination="false"
    />
    <br>
    <h1>Input事件</h1>
    <a-table
      :data-source="dataSource2"
      :columns="columns2"
      :pagination="false"
    />
    <br>
    <h1>TextArea参数</h1>
    <a-table
      :data-source="dataSource3"
      :columns="columns3"
      :pagination="false"
    />
    <br>
    <h1>TextArea事件</h1>
    <a-table
      :data-source="dataSource4"
      :columns="columns4"
      :pagination="false"
    />
    <br>
    <h1>Search参数 | Password参数</h1>
    <a-table
      :data-source="dataSource5"
      :columns="columns5"
      :pagination="false"
    />
    <br>
    <h1>Search事件</h1>
    <a-table
      :data-source="dataSource6"
      :columns="columns6"
      :pagination="false"
    />
  </div>
</template>

<script>
import part1 from './components/part1.vue'
import part2 from './components/part2.vue'
import part3 from './components/part3.vue'
import part4 from './components/part4.vue'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Input',
  components: { part1, part2, part3, part4 },
  setup() {
    const dataSource1 = reactive([
      {
        key: '1',
        Property: 'value(v-model)',
        Description: '输入框内容',
        Type: 'String',
        Default: ''
      },
      {
        key: '2',
        Property: 'placeholder',
        Description: '提示语',
        Type: 'String',
        Default: ''
      },
      {
        key: '3',
        Property: 'disabled',
        Description: '是否禁用',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '4',
        Property: 'maxlength',
        Description: '最大长度',
        Type: 'Number',
        Default: ''
      },
      {
        key: '5',
        Property: 'allowClear',
        Description: '可以点击清除图标删除内容',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '6',
        Property: 'addonAfter',
        Description: '带标签的 input,设置后置标签',
        Type: 'slot',
        Default: '-'
      },
      {
        key: '7',
        Property: 'addonBefore',
        Description: '带标签的 input,设置前置标签',
        Type: 'slot',
        Default: '-'
      },
      {
        key: '8',
        Property: 'bordered',
        Description: '是否有边框',
        Type: 'Boolean',
        Default: 'true'
      },
      {
        key: '9',
        Property: 'defaultValue',
        Description: '输入框默认内容',
        Type: 'String',
        Default: ''
      },
      {
        key: '10',
        Property: 'prefix',
        Description: '带有前缀图标的 input',
        Type: 'slot',
        Default: ''
      },
      {
        key: '11',
        Property: 'suffix',
        Description: '带有后缀图标的 input',
        Type: 'slot',
        Default: ''
      }
    ])
    const columns1 = reactive([
      {
        title: '参数',
        dataIndex: 'Property',
        key: 'Property'
      },
      {
        title: '说明',
        dataIndex: 'Description',
        key: 'Description'
      },
      {
        title: '类型',
        dataIndex: 'Type',
        key: 'Type'
      },
      {
        title: '默认值',
        dataIndex: 'Default',
        key: 'Default'
      }
    ])
    const dataSource2 = reactive([
      {
        key: '1',
        Property: 'change',
        Description: '输入框内容变化时的回调',
        func: 'function(e)'
      },
      {
        key: '2',
        Property: 'pressEnter',
        Description: '按下回车的回调',
        func: 'function(e)'
      }
    ])
    const columns2 = reactive([
      {
        title: '事件',
        dataIndex: 'Property',
        key: 'Property'
      },
      {
        title: '说明',
        dataIndex: 'Description',
        key: 'Description'
      },
      {
        title: '回调参数',
        dataIndex: 'func',
        key: 'func'
      }
    ])
    const dataSource3 = reactive([
      {
        key: '1',
        Property: 'value(v-model)',
        Description: '输入框内容',
        Type: 'String',
        Default: ''
      },
      {
        key: '2',
        Property: 'autosize',
        Description: '自适应内容高度,可设置为 true | false 或对象:{ minRows: 2, maxRows: 6 }',
        Type: 'boolean|object',
        Default: 'false'
      },
      {
        key: '3',
        Property: 'defaultValue',
        Description: '输入框默认内容',
        Type: 'string',
        Default: ''
      },
      {
        key: '4',
        Property: 'maxlength',
        Description: '最大长度',
        Type: 'Number',
        Default: ''
      },
      {
        key: '5',
        Property: 'show-count',
        Description: '是否展示字数提示',
        Type: 'Boolean',
        Default: 'false'
      },
      {
        key: '6',
        Property: 'allowClear',
        Description: '可以点击清除图标删除内容',
        Type: 'Boolean',
        Default: 'false'
      }
    ])
    const columns3 = reactive([
      {
        title: '参数',
        dataIndex: 'Property',
        key: 'Property'
      },
      {
        title: '说明',
        dataIndex: 'Description',
        key: 'Description'
      },
      {
        title: '类型',
        dataIndex: 'Type',
        key: 'Type'
      },
      {
        title: '默认值',
        dataIndex: 'Default',
        key: 'Default'
      }
    ])
    const dataSource4 = reactive([
      {
        key: '1',
        Property: 'pressEnter',
        Description: '按下回车的回调',
        func: 'function(e)'
      }
    ])
    const columns4 = reactive([
      {
        title: '事件',
        dataIndex: 'Property',
        key: 'Property'
      },
      {
        title: '说明',
        dataIndex: 'Description',
        key: 'Description'
      },
      {
        title: '回调参数',
        dataIndex: 'func',
        key: 'func'
      }
    ])
    const dataSource5 = reactive([
      {
        key: '1',
        Property: 'value(v-model)',
        Description: '输入框内容',
        Type: 'String',
        Default: ''
      },
      {
        key: '2',
        Property: 'enterButton',
        Description: '是否有确认按钮,可设为按钮文字。该属性会与 addon 冲突',
        Type: 'boolean|slot',
        Default: 'false'
      },
      {
        key: '3',
        Property: 'loading',
        Description: '搜索 loading',
        Type: 'boolean',
        Default: ''
      },
      {
        key: '4',
        Property: 'visibilityToggle(Password参数)',
        Description: '是否显示切换按钮(密码框)',
        Type: 'boolean',
        Default: 'true'
      }
    ])
    const columns5 = reactive([
      {
        title: '参数',
        dataIndex: 'Property',
        key: 'Property'
      },
      {
        title: '说明',
        dataIndex: 'Description',
        key: 'Description'
      },
      {
        title: '类型',
        dataIndex: 'Type',
        key: 'Type'
      },
      {
        title: '默认值',
        dataIndex: 'Default',
        key: 'Default'
      }
    ])
    const dataSource6 = reactive([
      {
        key: '1',
        Property: 'search',
        Description: '点击搜索或按下回车键时的回调',
        func: 'function(value, event)'
      }
    ])
    const columns6 = reactive([
      {
        title: '事件',
        dataIndex: 'Property',
        key: 'Property'
      },
      {
        title: '说明',
        dataIndex: 'Description',
        key: 'Description'
      },
      {
        title: '回调参数',
        dataIndex: 'func',
        key: 'func'
      }
    ])
    return {
      dataSource1,
      columns1,
      dataSource2,
      columns2,
      dataSource3,
      columns3,
      dataSource4,
      columns4,
      dataSource5,
      columns5,
      dataSource6,
      columns6
    }
  }
})
</script>

<style lang="less">
.ipt-page {
  margin-bottom: 30px;
}
</style>
