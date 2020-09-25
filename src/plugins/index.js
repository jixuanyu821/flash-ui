import ZTree from './tree/index.js'
import ZSelectTree from './select-tree/index.js'

const components = [ZTree, ZSelectTree]

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
  ZTree,
  ZSelectTree
}
