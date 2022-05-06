import { defineClientAppEnhance } from '@vuepress/client'
import Antd from 'ant-design-vue'
import '../../lib/index.less'
import ZUI from '../../lib/index'
import * as Icons from '@ant-design/icons-vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
// import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'


export default defineClientAppEnhance(({ app, router, siteData }) => {
  // ...
  app.use(Antd).use(ZUI)
  // app.config.globalProperties.locale = locale
  app.config.globalProperties.dayjs = dayjs
  const icons = Icons
  for (const i in icons) {
    app.component(i, icons[i])
  }

})