/*
 * @Author: jixuanyu
 * @Date: 2022-04-12 16:00:30
 * @LastEditors: jixuanyu
 * @Description: file content
 */
module.exports = {
  '/guide/': [
    {
      text: '快速开始',
      collapsable: false,
      link: '/guide/getting-started.md'
    },
    {
      text: '更新记录',
      collapsable: false,
      link: '/guide/version.md'
    },
  ],
  '/components/': [
    {
      title: '组件',
      collapsable: false,
      children: [
         '/components/button',
         '/components/tree',
         '/components/input',
         '/components/radio',
         '/components/checkbox',
         '/components/select',
         '/components/treeSelect',
         '/components/cascader',
         '/components/datePicker',
         '/components/tag',
         '/components/pagination',
         '/components/table',
         '/components/form',
         '/components/menu',
         '/components/dropdown',
         '/components/switch',
         '/components/modal',
         '/components/divider',
         '/components/tabs',
         '/components/grid',
         '/components/inputNumber',
         '/components/timePicker'
      ]
    }
  ]

}