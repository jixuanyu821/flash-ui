---
title: 'Form 表单'
---

# 表单

#### 基础用法

- 示例：

<clientOnly>
  <formDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/form/formDemo1.vue)
:::

#### 共同的 API

| 参数              | 说明                                                                                               | 类型                                     | 默认值 |
| ----------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------ |
| allowClear        | 是否显示清楚按钮                                                                                   | boolean                                  | true   |
| autofocus         | 自动获取焦点                                                                                       | boolean                                  | false  |
| bordered          | 是否有边框                                                                                         | boolean                                  | false  |
| dateRender        | 自定义日期单元格的内容                                                                             | v-slot:dateRender="{current, today}"     | -      |
| disabled          | 禁用                                                                                               | boolean                                  | false  |
| disabledDate      | 不可选择的日期                                                                                     | (currentDate: dayjs) => boolean          | -      |
| dropdownClassName | 额外的弹出日历 className                                                                           | string                                   | -      |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div                                                             | 定义浮层的容器，默认为 body 上新建 div   | -      |
| inputReadOnly     | 设置输入框为只读（避免在移动设备上打开虚拟键盘）                                                   | boolean                                  | false  |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div                                                             | function(trigger)                        | -      |
| mode              | 日期面板的状态                                                                                     | time \| date \| month \| year \| decade  | true   |
| open              | 控制弹层是否展开                                                                                   | boolean                                  | -      |
| picker            | 设置选择器类型                                                                                     | date \| week \| month \| quarter \| year | date   |
| placeholder       | 输入框提示文字                                                                                     | string \| [string, string]               | -      |
| popupStyle        | 额外的弹出日历样式                                                                                 | CSSProperties                            | -      |
| size              | 输入框大小，large 高度为 40px，small 为 24px，默认是 32px                                          | large \| middle \| small                 | -      |
| suffixIcon        | 自定义的选择框后缀图标                                                                             | v-slot:suffixIcon                        | -      |
| valueFormat       | 可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 dayjs 对象 | string                                   | -      |

#### 共有的事件

| 事件        | 说明                     | 回调参数              |
| ----------- | ------------------------ | --------------------- |
| openChange  | 弹出日历和关闭日历的回调 | function(status)      |
| panelChange | 日期面板变化时的回调     | function(value, mode) |

#### 共同的方法

| 事件   | 说明    |
| ------ | ------- |
| blur() | focus() |
