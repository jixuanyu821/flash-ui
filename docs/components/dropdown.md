---
title: 'Dropdown 下拉菜单'
---

# 下拉菜单

#### 基础用法

- 示例：

<clientOnly>
  <dropdownDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/dropdown/dropdownDemo1.vue)
:::

#### 右键菜单

- 示例：

<clientOnly>
  <dropdownDemo2 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/dropdown/dropdownDemo2.vue)
:::

#### 参数

| 参数              | 说明                                                                                                 | 类型                                 | 默认值     |
| ----------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------- |
| disabled          | 菜单是否禁用                                                                                         | boolean                              |            |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function(triggerNode)                |            |
| overlay(v-slot)   | 菜单                                                                                                 | menu                                 |            |
| overlayClassName  | 下拉根元素的类名称                                                                                   | string                               |            |
| overlayStyle      | 下拉根元素的样式                                                                                     | object                               |            |
| placement         | 菜单弹出位置: bottomLeft bottomCenter bottomRight topLeft topCenter topRight                         | string                               | bottomLeft |
| trigger           | 触发下拉的行为, 移动端不支持 hover                                                                   | Array<click \| hover \| contextmenu> | ['hover']  |
| visible(v-model)  | 菜单是否显示                                                                                         | boolean                              |            |

### 事件

| 事件          | 说明                                   | 回调参数          |
| ------------- | -------------------------------------- | ----------------- |
| visibleChange | 菜单显示状态改变时调用，参数为 visible | function(visible) |

### Dropdown.Button 参数

| 参数             | 说明                                                                         | 类型                             | 默认值    |
| ---------------- | ---------------------------------------------------------------------------- | -------------------------------- | --------- |
| disabled         | 菜单是否禁用                                                                 | boolean                          |           |
| icon             | 右侧的 icon                                                                  | slot                             |           |
| overlay(v-slot)  | 菜单                                                                         | menu                             |           |
| size             | 按钮大小，和 Button 一致                                                     | string                           | default   |
| type             | 按钮类型，和 Button 一致                                                     | string                           | default   |
| placement        | 菜单弹出位置: bottomLeft bottomCenter bottomRight topLeft topCenter topRight | string                           | default   |
| trigger          | 触发下拉的行为, 移动端不支持 hover                                           | Array<click\|hover\|contextmenu> | ['hover'] |
| visible(v-model) | 菜单是否显示                                                                 | boolean                          | -         |

### Dropdown.Button 事件

| 事件          | 说明                                   | 回调参数          |
| ------------- | -------------------------------------- | ----------------- |
| click         | 点击左侧按钮的回调，和 Button 一致     | function          |
| visibleChange | 菜单显示状态改变时调用，参数为 visible | function(visible) |
