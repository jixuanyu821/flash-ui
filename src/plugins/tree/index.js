import ZTree from './vue-tree.vue'

ZTree.install = function (Vue) {
  console.log(ZTree.name)
  Vue.component(ZTree.name, ZTree)
}

export default ZTree
