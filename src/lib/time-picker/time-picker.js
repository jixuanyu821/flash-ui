import timePicker from './time-picker.vue'

timePicker.install = function(Vue) {
  Vue.component(timePicker.name, timePicker)
}

export default timePicker
