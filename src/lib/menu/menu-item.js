import menuItem from './menu-item.vue'

menuItem.install = function(Vue) {
  Vue.component(menuItem.name, menuItem)
}

export default menuItem
