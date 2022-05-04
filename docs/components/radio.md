---
  title: "Radio 单选框"
---

# 单选框

#### 基础用法

- 示例：

<clientOnly>
  <radioDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/radio/radioDemo1.vue)
:::

#### 禁用

- 示例：

<clientOnly>
  <radioDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/radio/radioDemo2.vue)
:::

#### 按钮

- 示例：

<clientOnly>
  <radioDemo3 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/radio/radioDemo3.vue)
:::

#### Radio/Radio.Button Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked(v-model) | 指定当前是否选中 | boolean | false |
| autofocus | 自动获取焦点 | boolean | false |
| disabled | 禁用 Radio | boolean | false |
| value | 根据 value 进行比较，判断是否选中 | any | --- |

#### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value(v-model) | 用于设置当前选中的值 | any | --- |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | outline \| solid | outline |
| disabled | 禁选所有子单选器 | boolean | false |
| name | RadioGroup 下所有 input[type="radio"] 的 name 属性 | string | --- |
| options | 以配置形式设置子元素 | string[] \| number[] \| Array<{ label: string value: string disabled?: boolean }> | --- |
| optionType | 用于设置 Radio options 类型 | default \| button | default |
| size | 大小，只对按钮样式生效 | large \| default \| small | default |

#### RadioGroup Event

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选项变化时的回调函数 | function(e:Event) |

#### Radio Method

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |
