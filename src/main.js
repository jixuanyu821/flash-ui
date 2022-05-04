import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue'
import * as Icons from '@ant-design/icons-vue'
import '../lib/index.less'
// eslint-disable-next-line no-unused-vars
import ZUI from '../lib/index'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'

const app = createApp(App)
app.use(router).use(Antd).use(ZUI).mount('#app')
app.config.globalProperties.locale = locale
app.config.globalProperties.dayjs = dayjs

const icons = Icons
for (const i in icons) {
  app.component(i, icons[i])
}
