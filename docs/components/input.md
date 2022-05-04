---
 title: "Input 输入框"
---

# 输入框

#### 基础用法

- 示例：

<clientOnly>
  <inputDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/input/inputDemo1.vue)
:::

#### icon

- 示例：

<clientOnly>
  <inputDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/input/inputDemo2.vue)
:::

#### 密码框

- 示例：

<clientOnly>
  <inputDemo3 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/input/inputDemo3.vue)
:::

#### 文本域

- 示例：

<clientOnly>
  <inputDemo4 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/input/inputDemo4.vue)
:::

#### 前置/后置标签

- 示例：

<clientOnly>
  <inputDemo5 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/input/inputDemo5.vue)
:::

#### Input Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value(v-model) | 输入框内容 | string | --- |
| placeholder | 提示语 | string | --- |
| id | 输入框的 id | string | --- |
| disabled | 是否禁用 | boolean | false |
| maxlength | 最大长度 | number | --- |
| allowClear | 可以点击清除图标删除内容 | boolean | false |
| addonAfter | 带标签的 input,设置后置标签 | string \| slot | --- |
| addonBefore | 带标签的 input,设置前置标签 | string \| slot | --- |
| bordered | 是否有边框 | boolean | true |
| defaultValue | 输入框默认内容 | string | --- |
| prefix | 带有前缀图标的 input | string \| slot | --- |
| suffix | 带有后缀图标的 input | string \| slot | --- |

#### Input Event

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 输入框内容变化时的回调 | function(e) |
| pressEnter | 按下回车的回调 | function(e) |

#### TextArea Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value(v-model) | 输入框内容 | string | --- |
| autosize | 自适应内容高度,可设置为 true \| false 或对象:{ minRows: 2, maxRows: 6 } | boolean/object | false |
| defaultValue | 输入框默认内容 | string | --- |
| showCount | 是否展示字数提示 | boolean | false |
| allowClear | 可以点击清除图标删除内容 | boolean | false |

#### TextArea Event

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| pressEnter | 按下回车的回调 | function(e) |

#### Search Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enterButton | 是否有确认按钮,可设为按钮文字。该属性会与 addon 冲突 | boolean/slot | false |
| loading | 搜索 loading | boolean | --- |

#### Search Event

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| search | 点击搜索或按下回车键时的回调 | function(value, event) |

#### Password Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visibilityToggle | 是否显示切换按钮 | boolean | true |
