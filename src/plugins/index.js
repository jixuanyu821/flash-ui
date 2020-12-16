import FTree from './tree/index.js'
import FSelectTree from './select-tree/index.js'

const components = [FTree, FSelectTree]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  FTree,
  FSelectTree
}
