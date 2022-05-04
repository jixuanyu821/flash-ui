import checkboxGroup from './checkbox-group.vue'

checkboxGroup.install = function(Vue) {
  Vue.component(checkboxGroup.name, checkboxGroup)
}

export default checkboxGroup
