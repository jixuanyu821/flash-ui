<!--
 * @Author: jixuanyu
 * @Date: 2022-02-17 17:25:05
 * @LastEditors: jixuanyu
 * @Description: Form 表单
-->
<template>
  <div class="contanier">
    <a-space direction="vertical" :size="12">
      <part1 />
      <part2 />
      <part3 />
      <part4 />
    </a-space>
    <h3>其他相关demo及API可以参考ant-design</h3>
    <h1>共同的 API</h1>
    <a-table
      :data-source="dataSource1"
      :columns="columns1"
      :pagination="false"
    />
    <h1>共有的事件</h1>
    <a-table
      :data-source="dataSource2"
      :columns="columns2"
      :pagination="false"
    />
    <h1>共同的方法</h1>
    <a-table
      :data-source="dataSource3"
      :columns="columns3"
      :pagination="false"
    />
  </div>
</template>
<script>
import part1 from './components/part1.vue'
import part2 from './components/part2.vue'
import part3 from './components/part3.vue'
import part4 from './components/part4.vue'
export default {
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
          property: 'allowClear',
          description: '是否显示清除按钮',
          type: 'boolean',
          default: 'true'
        }, {
          property: 'autofocus',
          description: '自动获取焦点',
          type: 'boolean',
          default: 'false'
        }, {
          property: 'bordered',
          description: '是否有边框',
          type: 'boolean',
          default: 'false'
        }, {
          property: 'dateRender',
          description: '自定义日期单元格的内容',
          type: 'v-slot:dateRender="{current, today}"',
          default: '-'
        }, {
          property: 'disabled',
          description: '禁用',
          type: 'boolean',
          default: 'false'
        }, {
          property: 'disabledDate',
          description: '不可选择的日期',
          type: '(currentDate: dayjs) => boolean',
          default: '-'
        }, {
          property: 'dropdownClassName',
          description: '额外的弹出日历 className',
          type: 'string',
          default: '-'
        }, {
          property: 'getPopupContainer',
          description: '定义浮层的容器，默认为 body 上新建 div',
          type: 'function(trigger)',
          default: '-'
        }, {
          property: 'inputReadOnly',
          description: '设置输入框为只读（避免在移动设备上打开虚拟键盘）',
          type: 'boolean',
          default: 'false'
        }, {
          property: 'getPopupContainer',
          description: '定义浮层的容器，默认为 body 上新建 div',
          type: 'function(trigger)',
          default: '-'
        }, {
          property: 'mode',
          description: '日期面板的状态',
          type: 'time | date | month | year | decade',
          default: '-'
        }, {
          property: 'open',
          description: '控制弹层是否展开',
          type: 'boolean',
          default: '-'
        }, {
          property: 'picker',
          description: '设置选择器类型',
          type: 'date | week | month | quarter | year',
          default: 'date'
        }, {
          property: 'placeholder',
          description: '输入框提示文字',
          type: 'string | [string, string]',
          default: '-'
        }, {
          property: 'popupStyle',
          description: '额外的弹出日历样式',
          type: 'CSSProperties',
          default: '-'
        }, {
          property: 'size',
          description: '输入框大小，large 高度为 40px，small 为 24px，默认是 32px',
          type: 'large | middle | small',
          default: '-'
        }, {
          property: 'suffixIcon',
          description: '自定义的选择框后缀图标',
          type: 'v-slot:suffixIcon',
          default: '-'
        }, {
          property: 'valueFormat',
          description: '可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 dayjs 对象',
          type: 'string',
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
          property: 'openChange',
          description: '弹出日历和关闭日历的回调',
          function: 'function(status)'
        },
        {
          property: 'panelChange',
          description: '日期面板变化时的回调',
          function: 'function(value, mode)'
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
        }
      ],
      dataSource3: [
        {
          property: 'blur()',
          description: '移除焦点'
        },
        {
          property: 'focus()',
          description: '获取焦点'
        }
      ],
      columns3: [
        {
          title: '事件名称',
          dataIndex: 'property',
          key: 'property',
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
}
</script>
<style scoped>
.contanier{
  margin-bottom: 36px;
}
</style>

