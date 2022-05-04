import subMenu from './sub-menu.vue'

subMenu.install = function(Vue) {
  Vue.component(subMenu.name, subMenu)
}

export default subMenu
