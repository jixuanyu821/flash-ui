# flash-ui

基于elementUi开发  需首先安装elementUi 

npm install flash-element-ui --S

并全局引入elementUi样式

import 'element-ui/lib/theme-chalk/index.css'

引入本组件

npm install flash-element-ui --S

## 常用用法
tree-select 
disabled(type:Boolen,default:false) 禁用下拉框
width(type:String,default: '240') 下拉弹出框宽度 

lazy(type:Boolen,default:false) 子节点是否异步加载 若异步加载 需传入loadNode

loadNode(type:Function,default:undefind) 异步加载方法 function(node, resolve) 同elementUI

onlyChild(type:Boolen,default:false) 父节点是否可选中 默认可选 如传入true 且某项父节点 定制选中 可以通过数据传入disable:true 单独控制

isFullName(type:Boolen,default:false) 是否使用全称  开启后输入框内显示 父节点 - 子节点 （限单选）

breakKey(type:String,default: ' - ') 搭配isFullName属性使用  可自定义分隔符

showCheckbox(type: Boolean,default: false) 显示复选框 搭配多选功能使用
      
multiple(type:Boolen,default:false) 多选功能

v-model 绑定的为树节点id 默认取id,可通过props变更 若传入得props无id字段则取label字段的值 多选时为逗号隔开的字符串

@getValueName(name(type: String || Array)) 可以获取选中的字段label 多选时为所有选中节点的label 若想获取选中框内显示部分则调用showNodes方法

@showNodes(node(type:Array)) 多选时提供 参数为展示的所有节点(不包含选中节点的子节点)

## update

0.3.0 新增多选菜单功能 value绑定值为id数组字符串 逗号隔开

0.3.7 新增disabled选项 可以控制禁用下拉选择

0.3.8 树组件 添加slot插槽 可以自定义按钮了

0.3.9 修改slot插槽功能 支持自定义按钮和默认按钮混用 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
