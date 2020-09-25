import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'

import FlashElementUi from './plugins/index'
Vue.use(FlashElementUi)

new Vue({
  el: '#app',
  render: h => h(App)
})
