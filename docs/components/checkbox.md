---
  title: "CheckBox 多选框"
---

# 多选框

#### 基础用法

- 示例：

<clientOnly>
  <checkboxDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/checkbox/checkboxDemo1.vue)
:::

#### 全选

- 示例：

<clientOnly>
  <checkboxDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/checkbox/checkboxDemo2.vue)
:::

#### 禁用

- 示例：

<clientOnly>
  <checkboxDemo3 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/checkbox/checkboxDemo3.vue)
:::

#### 多选

- 示例：

<clientOnly>
  <checkboxDemo4 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/checkbox/checkboxDemo4.vue)
:::

#### Checkbox Props 

| 参数 | 说明 | 类型  | 默认值  |
| --- | --- | --- |  --- |
| autofocus | 自动获取焦点 | boolean | false |
| checked(v-model) | 指定当前是否选中 | boolean | false |
| disabled | 失效状态 | Boolean | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | Boolean | false |
| value | 与 CheckboxGroup 组合使用时的值 | boolean \| string \| number | --- |

#### Checkbox Event

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 变化时回调函数 | function(e:Event) |

#### Checkbox Group Props 

| 参数 | 说明 | 类型  | 默认值  |
| --- | --- | --- |  --- |
| disabled | 整组失效 | boolean | false |
| name | CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性 | string | --- |
| options | 指定可选项，可以通过 slot="label" slot-scope="option" 定制label | string[] \| Array<{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }>	 | [] |
| value(v-model) | 指定选中的选项 | string[] | [] |

#### Checkbox Group Event

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 变化时回调函数 | function(checkedValue) |

#### Checkbox Method

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |
