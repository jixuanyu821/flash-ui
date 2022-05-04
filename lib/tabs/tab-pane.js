import tabPane from './tab-pane.vue'

tabPane.install = function(Vue) {
  Vue.component(tabPane.name, tabPane)
}

export default tabPane
