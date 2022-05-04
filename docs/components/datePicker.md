---
 title: "DatePicker 日期选择器"
---

# 日期选择器

#### 基础用法

- 示例：

<clientOnly>
  <datePickerDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/datePicker/datePickerDemo1.vue)
:::

#### 范围选择器

- 示例：

<clientOnly>
  <datePickerDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/datePicker/datePickerDemo2.vue)
:::

#### 无边框

- 示例：

<clientOnly>
  <datePickerDemo3 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/datePicker/datePickerDemo3.vue)
:::

#### 禁用

- 示例：

<clientOnly>
  <datePickerDemo4 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/datePicker/datePickerDemo4.vue)
:::

#### 日期时间选择

- 示例：

<clientOnly>
  <datePickerDemo5 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/datePicker/datePickerDemo5.vue)
:::

#### 选择不超过7天的范围

- 示例：

<clientOnly>
  <datePickerDemo6 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/datePicker/datePickerDemo6.vue)
:::

#### 不可选择日期和时间

- 示例：

<clientOnly>
  <datePickerDemo7 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/datePicker/datePickerDemo7.vue)
:::
#### 共同的API

| 参数 | 说明 | 类型  | 默认值 |
| --- | --- | --- |  --- |
| allowClear | 是否显示清除按钮 | boolean | true |
| autofocus | 自动获取焦点 | boolean | false |
| bordered | 是否有边框 | boolean | true |
| dateRender | 自定义日期单元格的内容 | v-slot:dateRender="{current, today}" | --- |
| disabled | 禁用 | boolean | false |
| disabledDate | 不可选择的日期 | (currentDate: dayjs) => boolean | true |
| dropdownClassName | 额外的弹出日历 className | string | --- |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | --- |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |
| locale | 国际化配置 | object | --- |
| mode | 日期面板的状态 | `time` \| `date` \| `month` \| `year` \| `decade` | --- |
| nextIcon | 自定义下一个图标 | slot | --- |
| open | 控制弹层是否展开 | boolean | --- |
| picker | 设置选择器类型 | `date` \| `week` \| `month` \| `quarter` \| `year` | `date` |
| placeholder | 输入框提示文字 | string \| [string, string] | --- |
| popupStyle | 额外的弹出日历样式 | CSSProperties | {} |
| prevIcon | 自定义上一个图标 | slot | --- |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `large` \| `middle` \| `small` | --- |
| suffixIcon | 自定义的选择框后缀图标 | v-slot:suffixIcon | --- |
| superNextIcon | 自定义 `<<` 切换图标 | slot | --- |
| superPrevIcon | 自定义 `>>` 切换图标 | slot | --- |
| valueFormat | 可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 dayjs 对象 | string | --- |

#### 共有的事件

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| openChange | 弹出日历和关闭日历的回调 | function(status) |
| panelChange | 日期面板变化时的回调 | function(value, mode) |

#### 共同的方法

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |

#### DatePicker

| 参数 | 说明 | 类型  | 默认值 |
| --- | --- | --- |  --- |
| defaultPickerValue | 默认面板日期 | dayjs |  --- |
| disabledTime | 不可选择的时间 | function(date) | --- |
| format | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 dayjs，支持自定义格式 | string \| (value: dayjs) => string \| (string \| (value: dayjs) => string)[] | YYYY-MM-DD |
| renderExtraFooter | 在面板中添加额外的页脚 | v-slot:renderExtraFooter="mode" |  --- |
| showNow | 当设定了 `showTime` 的时候，面板是否显示“此刻”按钮 | boolean |  --- |
| showTime | 增加时间选择功能 | Object \| boolean	 | TimePicker Options |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒 | dayjs | dayjs() |
| showToday | 是否展示“今天”按钮 | boolean |  true |
| value(v-model) | 日期 | dayjs |  --- |

#### DatePicker 事件

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 时间发生变化的回调 | function(date: dayjs \| string, dateString: string) |
| ok | 点击确定按钮的回调 | function(date: dayjs \| string) |

#### DatePicker[picker=year]

| 参数 | 说明 | 类型  | 默认值 |
| --- | --- | --- |  --- |
| format | 展示的日期格式，配置参考 dayjs | string | `YYYY` |

#### DatePicker[picker=quarter]

| 参数 | 说明 | 类型  | 默认值 |
| --- | --- | --- |  --- |
| format | 展示的日期格式，配置参考 dayjs | string | `YYYY-\QQ` |

#### DatePicker[picker=month]

| 参数 | 说明 | 类型  | 默认值 |
| --- | --- | --- |  --- |
| format | 展示的日期格式，配置参考 dayjs | string | `YYYY-MM` |
| monthCellRender | 自定义的月份内容渲染方法 | v-slot:monthCellRender="{current, locale}" | --- |

#### DatePicker[picker=week]

| 参数 | 说明 | 类型  | 默认值 |
| --- | --- | --- |  --- |
| format | 展示的日期格式，配置参考 dayjs | string | `YYYY-WO` |

#### RangePicker

| 参数 | 说明 | 类型  | 默认值 |
| --- | --- | --- |  --- |
| allowEmpty | 允许起始项部分为空 | [boolean, boolean] | [false, false] |
| dateRender | 自定义日期单元格的内容。 | v-slot:dateRender="{current: dayjs, today: dayjs, info: { range: start \| end }}"	 | --- |
| defaultPickerValue | 默认面板日期 | dayjs[] | --- |
| disabled | 禁用起始项 | [boolean, boolean] | --- |
| disabledTime | 不可选择的时间 | function(date: dayjs, partial: start \| end) | --- |
| format | 展示的日期格式 | string | `YYYY-MM-DD HH:mm:ss` |
| ranges | 预设时间范围快捷选择 | { [range: string]: dayjs[] } \| { [range: string]: () => dayjs[] } | --- |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | --- |
| separator | 设置分隔符 | string \| v-slot:separator | `<SwapRightOutlined />` |
| showTime | 增加时间选择功能 | Object \| boolean	 | TimePicker Options |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，例子 | dayjs[] | [dayjs(), dayjs()] |
| value(v-model) | 日期 | dayjs[] | --- |

#### RangePicker 事件

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| calendarChange | 待选日期发生变化的回调 | function(dates: [dayjs, dayjs] \| [string, string], dateStrings: [string, string], info: { range:start \| end }) |
| change | 日期范围发生变化的回调 | function(dates: [dayjs, dayjs] \| [string, string], dateStrings: [string, string]) |
| ok | 点击确定按钮的回调 | function(dates: [dayjs, dayjs] \| [string, string]) |
