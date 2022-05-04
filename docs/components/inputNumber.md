---
title: 'InputNumber 数字输入框'
---

# 数字输入框

#### 基础用法

- 示例：

<clientOnly>
  <inputNumberDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/inputNumber/inputNumberDemo1.vue)
:::

#### 基础用法

- 示例：

<clientOnly>
  <inputNumberDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/inputNumber/inputNumberDemo2.vue)
:::

#### 共同的 API

| 参数             | 说明                                                                 | 类型                                                                                    | 默认值 |
| ---------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------ |
| addonAfter       | 带标签的 input,设置后置标签                                          | slot                                                                                    |        |
| addonBefore      | 带标签的 input,设置前置标签                                          | slot                                                                                    |        |
| autofocus        | 自动获取焦点                                                         | boolean                                                                                 | false  |
| bordered         | 是否有边框                                                           | boolean                                                                                 | true   |
| controls         | 是否显示增减按钮                                                     | boolean                                                                                 | true   |
| decimalSeparator | 小数点                                                               | string                                                                                  |        |
| defaultValue     | 初始值                                                               | number                                                                                  |        |
| disabled         | 禁用                                                                 | boolean                                                                                 | false  |
| formatter        | 指定输入框展示值的格式                                               | function(value: number \| string, info: { userTyping: boolean, input: string }): string |        |
| keyboard         | 是否启用键盘快捷行为                                                 | boolean                                                                                 | true   |
| max              | 最大值                                                               | number                                                                                  |        |
| min              | 最小值                                                               | number                                                                                  |        |
| parser           | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用           | function( string): number                                                               |        |
| precision        | 数值精度                                                             | number                                                                                  |        |
| prefix           | 带有前缀图标的 input                                                 | slot                                                                                    |        |
| size             | 输入框大小                                                           | string                                                                                  |        |
| step             | 每次改变步数，可以为小数                                             | number\|string                                                                          | 1      |
| stringMode       | 字符值模式，开启后支持高精度小数。同时 change 事件将返回 string 类型 | boolean                                                                                 | false  |
| value(v-model)   | 当前值                                                               | number                                                                                  |        |

#### 事件

| 事件       | 说明               | 回调参数                                                                |
| ---------- | ------------------ | ----------------------------------------------------------------------- |
| change     | 变化回调           | Function(value: number \| string)                                       |
| pressEnter | 按下回车的回调     | function(e)                                                             |
| step       | 点击上下箭头的回调 | (value: number, info: { offset: number, type: 'up' \| 'down' }) => void |
