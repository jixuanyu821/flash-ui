---
title: 'Grid 栅格'
---

# 栅格

#### 基础用法

- 示例：

<clientOnly>
  <gridDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/grid/gridDemo1.vue)
:::

#### 栅格间距

- 示例：

<clientOnly>
  <gridDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/grid/gridDemo2.vue)
:::

#### row 参数

| 参数    | 说明                                                                                                                               | 类型                  | 默认值 |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------ |
| align   | flex 布局下的垂直对齐方式: top middle bottom                                                                                       | string                | top    |
| gutter  | 格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距] | number\|object\|array | 0      |
| justify | flex 布局下的水平排列方式: start end center space-around space-between                                                             | string                | start  |
| wrap    | 取消按钮文字                                                                                                                       | boolean               | false  |

#### col 参数

| 参数   | 说明                                                   | 类型             | 默认值 |
| ------ | ------------------------------------------------------ | ---------------- | ------ |
| flex   | flex 布局填充                                          | string\|number   |        |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格                 | number           | 0      |
| order  | 栅格顺序,flex 布局模式下有效                           | number           | 0      |
| pull   | 栅格向左移动格数                                       | number           | 0      |
| push   | 栅格向右移动格数                                       | number           | 0      |
| span   | 栅格占位格数，为 0 时相当于 display: none              | number           |        |
| xxxl   | ≥2000px 响应式栅格，可为栅格数或一个包含其他属性的对象 | number\|object   |        |
| xs     | <576px 响应式栅格，可为栅格数或一个包含其他属性的对象  | number\|object   |        |
| sm     | ≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象  | number \| object |        |
| md     | ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象  | number \| object |        |
| lg     | ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象  | number \| object |        |
| xl     | ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object |        |
| xxl    | ≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object |        |
