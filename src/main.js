import Vue from 'vue'
import App from './App.vue'

import flashElementUi from './plugins'

Vue.use(flashElementUi)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
