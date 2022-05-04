<!-- wyf 2022-1-19 -->
<template>
  <div class="contanier">
    <part1 />
    <part3 />
    <part2 />
    <hr style="margin: 24px auto" />
    <h3>其他相关demo可以参考ant-design</h3>
    <h2>Radio/Radio.Button</h2>
    <a-table
      :dataSource="dataSource1"
      :columns="columns1"
      :pagination="false"
    />
    <h2 style="margin-top: 24px">RadioGroup</h2>
    <h4>单选框组合，用于包裹一组 Radio。</h4>
    <a-table
      :dataSource="dataSource2"
      :columns="columns2"
      :pagination="false"
    />
    <h2 style="margin-top: 24px">RadioGroup 事件</h2>
    <a-table
      :dataSource="dataSource3"
      :columns="columns3"
      :pagination="false"
    />
    <h1 style="margin-top: 24px">方法</h1>
    <h2 style="margin-top: 24px">Radio</h2>
    <a-table
      :dataSource="dataSource4"
      :columns="columns4"
      :pagination="false"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import part1 from './components/part1.vue'
import part2 from './components/part2.vue'
import part3 from './components/part3.vue'
export default defineComponent({
  name: 'Radio',
  components: {
    part1,
    part2,
    part3,
  },
  data() {
    return {
      dataSource1: [
        {
          property: 'autofocus',
          description: '自动获取焦点',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'checked(v-model)',
          description: '指定当前是否选中',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'disabled',
          description: '禁用 Radio',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'value',
          description: '根据 value 进行比较，判断是否选中',
          type: 'any',
          default: '-',
        },
      ],
      columns1: [
        {
          title: '参数',
          dataIndex: 'property',
          key: 'property',
          width: 200,
        },
        {
          title: '说明',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '默认值',
          dataIndex: 'default',
          key: 'default',
        },
      ],
      dataSource2: [
        {
          property: 'buttonStyle',
          description: 'RadioButton 的风格样式，目前有描边和填色两种风格',
          type: 'outline | solid',
          default: 'outline',
        },
        {
          property: 'disabled',
          description: '禁选所有子单选器',
          type: 'boolean',
          default: 'false',
        },
        {
          property: 'name',
          description: 'RadioGroup 下所有 input[type="radio"] 的 name 属性',
          type: 'string',
          default: '-',
        },
        {
          property: 'options',
          description: '以配置形式设置子元素',
          type: 'string[] | Array<{ label: string value: string disabled?: boolean }>	',
          default: '-',
        },
        {
          property: 'optionType',
          description: '用于设置 Radio options 类型',
          type: 'default | button',
          default: 'default',
        },
        {
          property: 'size',
          description: '大小，只对按钮样式生效',
          type: 'large | default | small	',
          default: 'default',
        },
        {
          property: 'value(v-model)',
          description: '用于设置当前选中的值',
          type: 'any',
          default: '-',
        },
      ],
      columns2: [
        {
          title: '参数',
          dataIndex: 'property',
          key: 'property',
          width: 200,
        },
        {
          title: '说明',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '默认值',
          dataIndex: 'default',
          key: 'default',
        },
      ],
      dataSource3: [
        {
          name: 'change',
          description: '选项变化时的回调函数',
          function: 'Function(e:Event)',
        },
      ],
      columns3: [
        {
          title: '事件名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '说明',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: '回调参数',
          dataIndex: 'function',
          key: 'function',
        },
      ],
      dataSource4: [
        {
          name: 'blur()',
          description: '移除焦点',
        },
        {
          name: 'focus()',
          description: '获取焦点',
        },
      ],
      columns4: [
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
        },
      ],
    }
  },
})
</script>
<style scoped>
.contanier {
  margin-bottom: 36px;
}
</style>
