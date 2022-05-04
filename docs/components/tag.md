---
  title: "Tag 标签"
---

# 标签

#### 基础用法

- 示例：

<clientOnly>
  <tagDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/tag/tagDemo1.vue)
:::

#### icon标签

- 示例：

<clientOnly>
  <tagDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/tag/tagDemo2.vue)
:::

#### 彩色标签

- 示例：

<clientOnly>
  <tagDemo3 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/tag/tagDemo3.vue)
:::

#### 预设4种标签

- 示例：

<clientOnly>
  <tagDemo4 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/tag/tagDemo4.vue)
:::

#### 标签的添加和删除

- 示例：

<clientOnly>
  <tagDemo5 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/tag/tagDemo5.vue)
:::

#### 参数
| 参数 | 说明 | 类型  | 默认值 |
| --- | --- | --- |  --- |
| closable | 标签是否可关闭 | boolean | false |
| color | 标签色 | string | - |
| closeIcon | 自定义关闭按钮 | slot | -|
| icon | 设置图标 | slot | - |
| visible(v-model) | 是否显示标签 | boolean | true |
| checked(v-model) | 设置标签的选中状态 | boolean | false |

#### 事件

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭时的回调 | (e) => void |
| change | 点击标签时触发的回调 | (checked) => void |