---
title: 'Switch 开关'
---

# 开关

#### 基础用法

- 示例：

<clientOnly>
  <switchDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/switch/switchDemo1.vue)
:::

#### 共同的 API

| 参数              | 说明                           | 类型                           | 默认值  |
| ----------------- | ------------------------------ | ------------------------------ | ------- |
| autofocus         | 组件自动获取焦点               | boolean                        | false   |
| checked(v-model)  | 指定当前是否选中               | checkedValue \| unCheckedValue | false   |
| checkedChildren   | 选中时的内容                   | string                         |         |
| checkedValue      | 选中时的值                     | boolean \| string \| number    | true    |
| disabled          | 是否禁用                       | boolean                        | false   |
| loading           | 加载中的开关                   | string                         | default |
| size              | 开关大小,可选值: default small | string                         | default |
| unCheckedChildren | 非选中时的内容                 | string                         |         |
| unCheckedValue    | 非选中时的值                   | boolean                        | false   |

### 事件

| 事件   | 说明           | 回调参数                                                     |
| ------ | -------------- | ------------------------------------------------------------ |
| change | 变化时回调函数 | Function(checked: boolean \| string \| number, event: Event) |
| click  | 点击时回调函数 | Function(checked: boolean \| string \| number, event: Event) |
