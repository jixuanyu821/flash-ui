/*
 * @Author: jixuanyu
 * @Date: 2022-04-11 18:12:55
 * @LastEditors: jixuanyu
 * @Description: VitePress配置文件，用于配置静态页
 */

const {
  navbar,
  sidebar,
  plugins
} = require('./config/index.js')

const { path } = require('@vuepress/utils')
const { defaultTheme } = require('vuepress')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { viteBundler } = require('vuepress')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

module.exports = {
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  title: 'ZRAR-UI',
  description: '基于ant-design-vue定制的UI控件',
  // 主题和它的配置
  port: 5510,
  open: false,
  theme: defaultTheme({
    logo: '/logo.png',
    displayAllHeaders: true,
    navbar: navbar,
    sidebar: sidebar,
    sidebarDepth: 1,
  }),
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'center',
        },
      },
    },
  }),
  markdown: {
    extractHeaders: {
      level: [2]
    },
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@components/, path.resolve(__dirname, './components/')),
    },
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components/'),
      components: plugins
    }),
    backToTopPlugin(),
  ],
}