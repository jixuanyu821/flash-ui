---
title: 'Modal 对话框'
---

# 对话框

### 何时使用 
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 等语法糖方法。

#### 基础用法

- 示例：

<clientOnly>
  <modalDemo1 />
</clientOnly>

::: details 点击查看代码
@[code vue](@components/modal/modalDemo1.vue)
:::

#### 参数

| 参数              | 说明                                                      | 类型                    | 默认值              |
| ----------------- | --------------------------------------------------------- | ----------------------- | ------------------- |
| afterClose        | Modal 完全关闭后的回调                                    | function                |                     |
| bodyStyle         | Modal body 样式                                           | object                  | {}                  |
| cancelButtonProps | cancel 按钮 props                                         |                         |                     |
| cancelText        | 取消按钮文字                                              | string \| slot          | 取消                |
| centered          | 垂直居中展示 Modal                                        | boolean                 | false               |
| closable          | 是否显示右上角的关闭按钮                                  | boolean                 | true                |
| closeIcon         | 自定义关闭图标                                            | slot                    |                     |
| confirmLoading    | 确定按钮 loading                                          | boolean                 |                     |
| destroyOnClose    | 关闭时销毁 Modal 里的子元素                               | boolean                 | false               |
| dialogClass       | 可用于设置浮层的类名                                      | string                  |                     |
| dialogStyle       | 可用于设置浮层的样式，调整浮层位置等                      | object                  |                     |
| footer            | 底部内容，当不需要默认底部按钮时，可以设为 :footer="null" | string\|slot            | 确定取消按钮        |
| forceRender       | 强制渲染 Modal                                            | boolean                 | false               |
| getContainer      | 指定 Modal 挂载的 HTML 节点                               | (instance): HTMLElement | () => document.body |
| keyboard          | 是否支持键盘 esc 关闭                                     | boolean                 | true                |
| mask              | 是否展示遮罩                                              | boolean                 | true                |
| maskClosable      | 点击蒙层是否允许关闭                                      | boolean                 | ture                |
| maskStyle         | 遮罩样式                                                  | object                  | {}                  |
| okButtonProps     | ok 按钮 props                                             |                         |                     |
| okText            | 确认按钮文字                                              | string\|slot            | 确认                |
| okType            | 确认按钮类型                                              | string                  | primary             |
| title             | 标题                                                      | boolean                 |                     |
| visible(v-model)  | 对话框是否可见                                            | boolean                 |                     |
| width             | 宽度                                                      | string\|number          | 520                 |
| wrapClassName     | 对话框外层容器的类名                                      | string                  |                     |
| zIndex            | 设置 Modal 的 z-index                                     | number                  | 1000                |

#### 事件

| 事件   | 说明                                 | 回调参数    |
| ------ | ------------------------------------ | ----------- |
| cancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) |
| ok     | 点击确定回调                         | function(e) |
