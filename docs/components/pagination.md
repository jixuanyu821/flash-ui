---
title: 'Pagination 分页'
---

# 分页

#### 基础用法

- 示例：

<clientOnly>
  <paginationDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/pagination/paginationDemo1.vue)
:::

#### 更多分页

- 示例：

<clientOnly>
  <paginationDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/pagination/paginationDemo2.vue)
:::

#### 简单版本

- 示例：

<clientOnly>
  <paginationDemo4 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/pagination/paginationDemo4.vue)
:::

#### 跳转版本

- 示例：

<clientOnly>
  <paginationDemo3 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/pagination/paginationDemo3.vue)
:::

#### 参数

| 参数              | 说明                          | 类型    | 默认值                    |
| ----------------- | ----------------------------- | ------- | ------------------------- |
| current(v-model)  | 当前页数                      | number  | 1                         |
| pageSize(v-model) | 每页条数                      | number  | -                         |
| pageSizeOptions   | 指定每页可以显示多少条        | array   | ['10', '20', '50', '100'] |
| showLessItems     | 是否显示较少页面内容          | boolean | false                     |
| showQuickJumper   | 是否可以快速跳转至某页        | boolean | false                     |
| total             | 数据总数                      | number  | 0                         |
| defaultPageSize   | 默认的每页条数                | number  | 10                        |
| hideOnSinglePage  | 只有一页时是否隐藏分页器      | boolean | false                     |
| showSizeChanger   | 是否可以改变 pageSize         | boolean | false                     |
| simple            | 当添加该属性时,显示为简单分页 | boolean | -                         |

#### 事件

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| showSizeChange | pageSize 变化的回调 | Function(current, size) |
| change | 页码改变的回调,参数是改变后的页码及每页条数 | Function(page, pageSize) |