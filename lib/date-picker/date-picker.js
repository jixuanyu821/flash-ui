import datePicker from './date-picker.vue'

datePicker.install = function(Vue) {
  Vue.component(datePicker.name, datePicker)
}

export default datePicker
