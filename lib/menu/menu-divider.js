import menuDivider from './menu-divider.vue'

menuDivider.install = function(Vue) {
  Vue.component(menuDivider.name, menuDivider)
}

export default menuDivider
