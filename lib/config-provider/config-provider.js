import configProvider from './config-provider.vue'

configProvider.install = function(Vue) {
  Vue.component(configProvider.name, configProvider)
}

export default configProvider
