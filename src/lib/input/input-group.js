import inputGroup from './input-group.vue'

inputGroup.install = function(Vue) {
  Vue.component(inputGroup.name, inputGroup)
}

export default inputGroup
