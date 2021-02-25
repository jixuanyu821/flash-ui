import FTree from './vue-tree.vue'

FTree.install = function (Vue) {
  console.log(FTree.name)
  Vue.component(FTree.name, FTree)
}

export default FTree
