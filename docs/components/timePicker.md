---
title: 'TimePicker 时间选择器'
---

# 时间选择器

#### 基础用法

点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

- 示例：

<clientOnly>
  <timePickerDemo1 ></timePickerDemo1>
</clientOnly>

::: details 点击查看代码
@[code vue](@components/timePicker/timePickerDemo1.vue)
:::

#### 范围选择器

- 示例：

<clientOnly>
  <timePickerDemo2 ></timePickerDemo2>
</clientOnly>

::: details 点击查看代码
@[code vue](@components/timePicker/timePickerDemo2.vue)
:::

#### 参数

| 参数                | 说明                                                                           | 类型                                   | 默认值     |
| ------------------- | ------------------------------------------------------------------------------ | -------------------------------------- | ---------- |
| allowClear          | 是否展示清除按钮                                                               | boolean                                | true       |
| autofocus           | 自动获取焦点                                                                   | boolean                                | false      |
| bordered            | 是否有边框                                                                     | boolean                                | true       |
| clearIcon           | 自定义的清除图标                                                               | slot                                   |            |
| clearText           | 清除按钮的提示文案                                                             | string                                 | clear      |
| disabled            | 禁用全部操作                                                                   | boolean                                | false      |
| disabledHours       | 禁止选择部分小时选项                                                           | function()                             |            |
| disabledMinutes     | 禁止选择部分分钟选项                                                           | function(selectedHour)                 |            |
| disabledSecond      | 禁止选择部分秒选项                                                             | function(selectedHour, selectedMinute) |            |
| format              | 展示的时间格式                                                                 | string                                 | HH:mm:ss   |
| getPopupContainer   | 定义浮层的容器，默认为 body 上新建 div                                         | function(trigger)                      |            |
| hideDisabledOptions | 隐藏禁止选择的选项                                                             | boolean                                | false      |
| hourStep            | 小时选项间隔                                                                   | number                                 | 1          |
| inputReadOnly       | 设置输入框为只读（避免在移动设备上打开虚拟键盘）                               | boolean                                | false      |
| minuteStep          | 分钟选项间隔                                                                   | number                                 | 1          |
| open(v-model)       | 面板是否打开                                                                   | boolean                                | false      |
| placeholder         | 没有值的时候显示的内容                                                         | string \| [string, string]             | 请选择时间 |
| popupClassName      | 弹出层类名                                                                     | string                                 |            |
| popupStyle          | 弹出层样式对象                                                                 | object                                 |            |
| renderExtraFooter   | 选择框底部显示自定义的内容                                                     | slot                                   |            |
| secondStep          | 秒选项间隔                                                                     | number                                 | 1          |
| showNow             | 面板是否显示“此刻”按钮                                                         | boolean                                |            |
| suffixIcon          | 自定义的选择框后缀图标                                                         | slot                                   |            |
| use12Hours          | 使用 12 小时制，为 true 时 format 默认为 h:mm:ss a                             | boolean                                | false      |
| value(v-model)      | 当前时间                                                                       | boolean                                | dayjs      |
| valueFormat         | 可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 dayjs 对象 | string                                 |            |
