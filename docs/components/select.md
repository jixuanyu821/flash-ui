---
  title: "Select 选择器"
---

# 选择器

#### 基础用法

- 示例：

<clientOnly>
  <selectDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/select/selectDemo1.vue)
:::

#### 下拉框方式

- 示例：

<clientOnly>
  <selectDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/select/selectDemo2.vue)
:::

#### 多选 | 可清除

- 示例：

<clientOnly>
  <selectDemo3 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/select/selectDemo3.vue)
:::

#### 搜索框

- 示例：

<clientOnly>
  <selectDemo4 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/select/selectDemo4.vue)
:::

#### Select Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 支持清除 | boolean | false |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效。 | boolean | true |
| autofocus | 默认获取焦点 | boolean | false |
| bordered | 是否有边框 | boolean | true |
| clearIcon | 自定义的多选框清空图标 | VNode \| slot | --- |
| defaultActiveFirstOption | 是否默认高亮第一个选项。 | boolean | true |
| defaultOpen | 是否默认展开下拉菜单 | boolean | --- |
| disabled | 是否禁用 | boolean | false |
| dropdownClassName | 下拉菜单的 className 属性 | string | --- |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true |
| dropdownMenuStyle | dropdown 菜单自定义样式 | object | --- |
| dropdownRender | 自定义下拉框内容 | ({menuNode: VNode, props}) => VNode \| v-slot | --- |
| dropdownStyle | 下拉菜单的 style 属性 | object | --- |
| fieldNames | 自定义节点 label、value、options 的字段 | object | { label: label, value: value, options: options } |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。 | boolean \| function(inputValue, option) | true |
| filterSort | 搜索时对筛选结果项的排序函数, 类似Array.sort里的 compareFunction | (optionA: Option, optionB: Option) => number | --- |
| firstActiveValue | 默认高亮的选项 | string \| string[] | --- |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode) | () => document.body	 |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes, originLabel: any} 的格式, originLabel（3.1） 保持原始类型，如果通过 a-select-option children 构造的节点，该值是是个函数（即 a-select-option 的默认插槽） | boolean | false |
| listHeight | 设置弹窗滚动高度 | number | 256 |
| maxTagCount | 最多显示多少个 tag | number | --- |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | slot \| function(omittedValues) | --- |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | --- |
| menuItemSelectedIcon | 自定义当前选中的条目图标 | VNode \| slot | --- |
| mode | 设置 Select 的模式为多选或标签 | 'multiple' \| 'tags' \| 'combobox' | --- |
| notFoundContent | 当下拉列表为空时显示的内容 | string \| slot | 'Not Found' |
| open | 是否展开下拉菜单 | boolean | --- |
| option | 通过 option 插槽，自定义节点 | v-slot:option="{value, label, [disabled, key, title]}" | --- |
| optionFilterProp | 搜索时过滤对应的 option 属性，不支持 children | string | value |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。 | string | children \| label(设置 options 时) |
| options | options 数据，如果设置则不需要手动构造 selectOption 节点 | array<{value, label, [disabled, key, title]}> | [] |
| placeholder | 选择框默认文字 | string \| slot | --- |
| removeIcon | 自定义的多选框清除图标 | VNode \| slot | --- |
| searchValue | 控制搜索文本 | string | --- |
| showArrow | 是否显示下拉小箭头 | boolean | true |
| showSearch | 使单选模式可搜索 | boolean | false |
| size | 选择框大小，可选 large small | string | default |
| suffixIcon | 自定义的选择框后缀图标 | VNode \| slot | --- |
| tagRender | 自定义 tag 内容 render，仅在 mode 为 multiple 或 tags 时生效 | slot \| (props) => any | --- |
| tokenSeparators | 在 tags 和 multiple 模式下自动分词的分隔符 | string[] | --- |
| value(v-model) | 指定当前选中的条目 | string \| string[] \| number \| number[] | --- |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true |

#### Select Event

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| blur | 失去焦点的时回调 | function |
| change | 选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数 | function(value, option:Option) |
| deselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效 | function(value，option:Option) |
| dropdownVisibleChange | 展开下拉菜单的回调 | function(open) |
| focus | 获得焦点时回调 | function |
| inputKeyDown | 键盘按下时回调 | function |
| mouseenter | 鼠标移入时回调 | function |
| mouseleave | 鼠标移出时回调 | function |
| popupScroll | 下拉列表滚动时的回调 | function |
| search | 文本框值变化时回调 | function(value: string) |
| select | 被选中时调用，参数为选中项的 value (或 key) 值 | function(value, option:Option) |

#### Select Method

| 名称 | 说明 |
| --- | --- |
| blur() | 取消焦点 |
| focus() | 获取焦点 |

#### Option Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| class | Option 器类名 | string | --- |
| disabled | 是否禁用 | boolean | false |
| key | 和 value 含义一致。如果 Vue 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置 | string | --- |
| title | 选中该 Option 后，Select 的 title | string | --- |
| value | 默认根据此属性值进行筛选 | string \| number | --- |

#### OptGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | --- | string | --- |
| label | 组名	 | string \| function(h) \| slot | --- |
