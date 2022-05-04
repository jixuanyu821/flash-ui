---
title: 'Table 表格'
---

# 表格

#### 基础用法

- 示例：

<clientOnly>
  <tableDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/table/tableDemo1.vue)
:::

#### 添加表格边框线，页头和页脚

- 示例：

<clientOnly>
  <tableDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/table/tableDemo2.vue)
:::

#### 带斑马纹表格

- 示例：

<clientOnly>
  <tableDemo3 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/table/tableDemo3.vue)
:::

#### 固定头和列

若列头与内容不对齐或出现列重复,请指定固定列的宽度 width。如果指定 width 不生效或出现白色垂直空隙,请尝试建议留一列不设宽度以适应弹性布局,或者检查是否有超长连续字段破坏布局。
建议指定 scroll.x为大于表格宽度的固定值或百分比。注意,且非固定列宽度之和不要超过 scroll.x。
- 示例：

<clientOnly>
  <tableDemo4 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/table/tableDemo4.vue)
:::