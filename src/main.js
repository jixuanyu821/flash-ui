import Vue from 'vue'
import App from './App.vue'

import flashElementUi from './plugins'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(flashElementUi)
Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
