---
  title: "Tree 树形"
  sidebarDepth: 1
---

# 树结构组件

#### 基础用法

- 示例：

<clientOnly>
  <TreeDemo1 ></TreeDemo1>
</clientOnly>

- 使用：
  
  - `treeData` 传入 treeData 数组，即可渲染对应的树样式

  - `fieldNames` 如想要自定义展示的字段，则传入 fieldNames 覆盖默认值

::: details 点击查看代码
@[code vue](@components/tree/treeDemo1.vue)
:::

#### 带编辑功能

- 示例：

<clientOnly>
  <TreeDemo2  style="margin-top: 20px;"></TreeDemo2>
</clientOnly>

- 使用：

  - `isAdd`type: Boolen 会影响所有的节点

  - `isDelete`type: Boolen 会影响所有的节点

  - `isEdit`type: Boolen 会影响所有的节点
  
  在`treeData`中传入属性`addable` `deleteable` `editable`可以覆盖显示按钮的配置

  - `addable`type: Boolen

  - `deleteable`type: Boolen

  - `editable`type: Boolen

  ::: warning
  如果需要在点击时默认展开下级菜单，则需要传入`expandedKeys`
  :::

::: details 点击查看代码
@[code vue](@components/tree/treeDemo2.vue)
:::

#### 节点事件

- 树组件自带处理方法，可以完成树的编辑，新增，删除。如需额外操作可以绑定节点事件

- methods: 
  
  `addNode`：点击新增icon触发

  `editNode`：点击编辑icon触发

  `deleteNode`：点击删除icon触发

  `complateEdit`：编辑状态下，点击完成icon触发

  `cancleEdit`：编辑状态下，点击取消icon触发

- 示例：

<clientOnly>
  <TreeDemo3  style="margin-top: 20px;"></TreeDemo3>
</clientOnly>

::: details 点击查看代码
@[code vue](@components/tree/treeDemo3.vue)
:::

- beforeDeleteNode:
  
<clientOnly>
  <TreeDemo4  style="margin-top: 20px;"></TreeDemo4>
</clientOnly>

::: details 点击查看代码
@[code vue](@components/tree/treeDemo4.vue)
:::

#### 插槽

- 使用自定义插槽可以个性化显示内容
  
  - `switcherIcon` 
  - `title` 自定义标题
  - `operateArea` 固定在每行尾部，默认接受三个参数 `node` `key` `parentKey` 

  ::: danger

  `operateArea`是`title`插槽的子集如果使用`title`插槽会覆盖`operateArea`

  :::

<clientOnly>
  <TreeDemo5  style="margin-top: 20px;"></TreeDemo5>  
</clientOnly>

::: details 点击查看代码
@[code vue](@components/tree/treeDemo5.vue)
:::
  
#### Tree props

| 参数 | 说明 | 类型 | 默认值 | 版本 |  |
| --- | --- | --- | --- | --- | --- |
| autoExpandParent | 是否自动展开父节点 | boolean | false |  |  |
| blockNode | 是否节点占据一行 | boolean | false |  |  |
| checkable | 节点前添加 Checkbox 复选框 | boolean | false |  |  |
| checkedKeys(v-model) | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置`checkable`和`checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | string\[] \| number\[] \| {checked: string\[] \| number\[], halfChecked: string\[] \| number\[]} | \[] |  |  |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | boolean | false |  |  |
| defaultExpandAll | 默认展开所有树节点, 如果是异步数据，需要在数据返回后再实例化，建议用 v-if="data.length"；当有 expandedKeys 时，defaultExpandAll 将失效 | boolean | false |  |  |
| disabled | 将树禁用 | bool | false |  |  |
| draggable | 设置节点可拖拽 | boolean | false |  |  |
| expandedKeys(v-model) | （受控）展开指定的树节点 | string\[] \| number\[] | \[] |  |  |
| fieldNames | 替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段 | object | {children:'children', title:'title', key:'key' } |  |  |
| filterTreeNode | 按需筛选树节点（高亮），返回 true | function(node) | - |  |  |
| loadData | 异步加载数据 | function(node) | - |  |  |
| loadedKeys | （受控）已经加载的节点，需要配合 `loadData` 使用 | string\[] \| number\[] | \[] |  |  |
| multiple | 支持点选多个节点（节点本身） | boolean | false |  |  |
| selectable | 是否可选中 | boolean | true |  |  |
| selectedKeys(v-model) | （受控）设置选中的树节点 | string\[] \| number\[] | - |  |  |
| showIcon | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | boolean | false |  |  |
| showLine | 是否展示连接线 | boolean \| {showLeafIcon: boolean}(3.0+) | false |  |  |
| switcherIcon | 自定义树节点的展开/折叠图标 | slot | - |  |  |
| title | 自定义标题 | slot |  | |  |
| treeData | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一） | [TreeNode\[\]](#TreeNode) | -- |  |  |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true |  |  |
| isAdd | 全局开启新增按钮，可被`treeNode`的 addable 参数覆盖 | boolean | false | 0.2.6 |  |
| isEdit | 全局开启编辑按钮，可被`treeNode`的 editable 参数覆盖 | boolean | false | 0.2.6 |  |
| isAdd | 全局开启新增按钮，可被`treeNode`的 deleteable 参数覆盖 | boolean | false | 0.2.6 |  |
| operateArea | 固定在每行尾部，默认接受三个参数`node` `key` `parentKey` | slot | - | 0.2.7 |  |

#### 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| check | 点击复选框触发 | function(checkedKeys, e:{checked: bool, checkedNodes, node, event}) |
| dragend | dragend 触发时调用 | function({event, node}) |
| dragenter | dragenter 触发时调用 | function({event, node, expandedKeys}) |
| dragleave | dragleave 触发时调用 | function({event, node}) |
| dragover | dragover 触发时调用 | function({event, node}) |
| dragstart | 开始拖拽时调用 | function({event, node}) |
| drop | drop 触发时调用 | function({event, node, dragNode, dragNodesKeys}) |
| expand | 展开/收起节点时触发 | function(expandedKeys, {expanded: bool, node}) |
| load | 节点加载完毕时触发 | function(loadedKeys, {event, node}) |
| rightClick | 响应右键点击 | function({event, node}) |
| select | 点击树节点触发 | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) |
| addNode | 点击树节点新增icon触发 | function(node) |
| editNode | 点击树节点编辑icon触发 | function(node) |
| deleteNode | 点击树节点删除icon触发 | function(node) |
| complateEdit | 编辑状态下，点击树节点完成icon触发，返回值为当前节点，和完整树目录结构 | function(node, treeData) |
| cancleEdit | 点击树节点新增icon触发，返回值为当前节点，和完整树目录结构  | function(node, treeData) |

#### TreeNode

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| checkable | 当树为 checkable 时，设置独立节点是否展示 Checkbox | boolean | - |  |
| class | 节点的 class | string | - |  |
| disableCheckbox | 禁掉 checkbox | boolean | false |  |
| disabled | 禁掉响应 | boolean | false |  |
| icon | 自定义图标。可接收组件，props 为当前节点 props | slot\|slot-scope | - |  |
| isLeaf | 设置为叶子节点(设置了`loadData`时有效) | boolean | false |  |
| key | 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！ | string \| number | 内部计算出的节点位置 |  |
| selectable | 设置节点是否可被选中 | boolean | true |  |
| style | 节点的 style | string\|object | - |  |
| title | 标题 | string | '---' |  |
| addable | 开启节点新增功能 | boolean | false | 0.2.6 |
| editable | 开启节点编辑功能 | boolean | false | 0.2.6 |
| deleteable | 开启节点删除功能 | boolean | false | 0.2.6 |

#### DirectoryTree props

| 参数         | 说明                                              | 类型   | 默认值 |
| ------------ | ------------------------------------------------- | ------ | ------ |
| expandAction | 目录展开逻辑，可选 `false` `'click'` `'dblclick'` | string | click  |
