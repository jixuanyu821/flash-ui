---
title: 'Divider 分割线'
---

# 分割线

#### 基础用法

- 示例：

<clientOnly>
  <dividerDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/divider/dividerDemo1.vue)
:::

#### 共同的 API

| 参数              | 说明                                                                                      | 类型                           | 默认值     |
| ----------------- | ----------------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| dashed            | 是否虚线                                                                                  | boolean                        | false      |
| orientation       | 分割线标题的位置                                                                          | string                         | center     |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right | string \| number               |            |
| plain             | 文字是否显示为普通正文样式                                                                | boolean                        | false      |
| type              | 水平还是垂直类型                                                                          | string: horizontal \| vertical | horizontal |
