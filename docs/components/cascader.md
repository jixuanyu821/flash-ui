---
  title: "Cascader 级联选择"
---

# 级联选择

#### 基础用法

- 示例：

<clientOnly>
  <cascaderDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/cascader/cascaderDemo1.vue)
:::

#### 多选

- 示例：

<clientOnly>
  <cascaderDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/cascader/cascaderDemo2.vue)
:::

#### 可搜索选项并选择

- 示例：

<clientOnly>
  <cascaderDemo3 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/cascader/cascaderDemo3.vue)
:::

#### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否支持清除 | boolean | false |
| autofocus | 自动获取焦点 | boolean | false |
| bordered | 是否有边框 | boolean | true |
| clearIcon | 自定义的选择框清空图标 | slot | --- |
| changeOnSelect | （单选时生效）当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | boolean | false |
| defaultValue | 默认的选中项 | string[] \| number[] | [] |
| disabled | 禁用 | boolean | false |
| displayRender | 选择后展示的渲染函数,可使用 #displayRender="{labels, selectedOptions}" | ({labels, selectedOptions}) => VNode | labels => labels.join(' / ')	 |
| dropdownClassName | 自定义浮层类名 | string | --- |
| dropdownStyle | 自定义浮层样式 | CSSProperties | {} |
| expandIcon | 自定义次级菜单展开图标 | slot | --- |
| expandTrigger | 次级菜单的展开方式 | click \| hover | 'click' |
| fieldNames | 自定义 options 中 label name children 的字段 | object | { label: 'label', value: 'value', children: 'children' } |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode) | () => document.body	 |
| loadData | 用于动态加载选项，无法与 showSearch 一起使用 | (selectedOptions) => void | --- |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| responsive | --- |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | v-slot \| function(omittedValues) | --- |
| multiple | 支持多选节点 | boolean | --- |
| notFoundContent | 当下拉列表为空时显示的内容 | string \| slot | 'Not Found' |
| open | 控制浮层显隐 | boolean | --- |
| options | 可选项数据源 | Option[] | --- |
| placeholder | 输入框占位文本 | string | '请选择' |
| placement | 浮层预设位置 | bottomLeft \| bottomRight \| topLeft \| topRight | bottomLeft |
| removeIcon | 自定义的多选框清除图标 | slot | --- |
| searchValue | 设置搜索的值，需要与 showSearch 配合使用 | string | --- |
| showSearch | 在选择框中显示搜索框 | boolean \| object | false |
| size | 输入框大小 | large \| default \| small | default |
| suffixIcon | 自定义的选择框后缀图标 | string \| VNode \| slot | --- |
| tagRender | 自定义 tag 内容，多选时生效 | slot | --- |
| value(v-model) | 指定选中项 | string[] \| number[] | --- |

#### showSearch(showSearch 为对象时，其中的字段:)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| filter | 接收 inputValue path 两个参数，当 path 符合筛选条件时，应返回 true，反之则返回 false。	 | function(inputValue, path): boolean | --- |
| limit | 搜索结果展示数量 | number \| false	 | 50 |
| matchInputWidth | 搜索结果列表是否与输入框同宽 | boolean | --- |
| render | 用于渲染 filter 后的选项,可使用 #showSearchRender="{inputValue, path}" | function({inputValue, path}): VNode | --- |
| sort | 用于排序 filter 后的选项 | function(a, b, inputValue) | --- |

#### Event

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选择完成后的回调 | (value, selectedOptions) => void |
| dropdownVisibleChange | 显示/隐藏浮层的回调 | (value) => void |
| search | 监听搜索，返回输入的值 | (value) => void |

#### Method

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |
