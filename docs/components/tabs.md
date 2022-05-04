---
title: 'Tabs 标签页'
---

# 标签页

#### 基础用法

- 示例：

<clientOnly>
  <tabsDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/tabs/tabsDemo1.vue)
:::

#### 共同的 API

| 参数                   | 说明                                                    | 类型    | 默认值                           |
| ---------------------- | ------------------------------------------------------- | ------- | -------------------------------- |
| activeKey(v-model)     | 当前激活 tab 面板的 key                                 | string  |                                  |
| animated               | 是否使用动画切换 Tabs,在 `tabPosition=topbottom` 时有效 | boolean | false(当 type="card" 时为 false) |
| centered               | 标签居中展示                                            | boolean | false                            |
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构                               | boolean | false                            |
| hideAdd                | 是否隐藏加号图标，在 type="editable-card" 时有效        | boolean | false                            |
| size                   | 大小，提供 large default 和 small 三种大小              | string  | default                          |
| tabBarGutter           | tabs 之间的间隙                                         | number  |                                  |
| tabBarStyle            | tab bar 的样式对象                                      | object  |                                  |
| tabPosition            | 页签位置，可选值有 top right bottom left                | string  | top                              |
| type                   | 页签的基本样式，可选 line、card editable-card 类型      | string  | line                             |

### 事件

| 事件      | 说明                                                 | 回调参数                                              |
| --------- | ---------------------------------------------------- | ----------------------------------------------------- |
| change    | 切换面板的回调                                       | Function(activeKey) {}                                |
| edit      | 新增和删除页签的回调，在 type="editable-card" 时有效 | (targetKey, action): void                             |
| tabClick  | tab 被点击的回调                                     | Function                                              |
| tabScroll | 滚动 TabBar 是触发                                   | { direction: 'left' \| 'right' \| 'top' \| 'bottom' } |

### Tabs 插槽

| 插槽名称     | 说明                           | 参数              |
| ------------ | ------------------------------ | ----------------- |
| addIcon      | 自定义添加按钮                 |                   |
| leftExtra    | tab bar 上左侧额外的元素       |                   |
| moreIcon     | 自定义折叠 icon                |                   |
| renderTabBar | 替换 TabBar,用于二次封装标签头 | { DefaultTabBar } |
| rightExtra   | tab bar 上右侧额外的元素       |                   |

#### Tabs.TabPane 参数

| 参数        | 说明                      | 类型    | 默认值 |
| ----------- | ------------------------- | ------- | ------ |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false  |
| key         | 对应 activeKey            | string  |        |
| tab         | 选项卡头显示文字          | string  |        |

### Tabs.TabPane 插槽

| 插槽名称  | 说明                                          | 参数 |
| --------- | --------------------------------------------- | ---- |
| closeIcon | 自定义关闭图标，在 type="editable-card"时有效 |      |
