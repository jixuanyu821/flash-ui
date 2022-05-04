/*
 * @Author: wyf
 * @Date: 2022-1-17
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = [
  {
    path: '/',
    redirect: '/readme'
  },
  {
    // 首页
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '/readme',
        name: 'Readme',
        component: () => import('@/views/Readme/readme.vue')
      },
      {
        path: '/button',
        name: 'Button',
        component: () => import('@/views/Button/button.vue')
      },
      {
        path: '/input',
        name: 'Input',
        component: () => import('@/views/Input/input.vue')
      },
      {
        path: '/radio',
        name: 'Radio',
        component: () => import('@/views/Radio/radio.vue')
      },
      {
        path: '/checkbox',
        name: 'Checkbox',
        component: () => import('@/views/Checkbox/checkbox.vue')
      },
      {
        path: '/select',
        name: 'Select',
        component: () => import('@/views/Select/select.vue')
      },
      {
        path: '/tree-select',
        name: 'TreeSelect',
        component: () => import('@/views/TreeSelect/tree-select.vue')
      },
      {
        path: '/cascader',
        name: 'Cascader',
        component: () => import('@/views/Cascader/cascader.vue')
      },
      {
        path: '/datepicker',
        name: 'Datepicker',
        component: () => import('@/views/Datepicker/datepicker.vue')
      },
      {
        path: '/tag',
        name: 'Tag',
        component: () => import('@/views/Tag/tag.vue')
      },
      {
        path: '/pagination',
        name: 'Pagination',
        component: () => import('@/views/Pagination/pagination.vue')
      },
      {
        path: '/table',
        name: 'Table',
        component: () => import('@/views/Table/table.vue')
      },
      {
        path: '/form',
        name: 'Form',
        component: () => import('@/views/Form/form.vue')
      },
      {
        path: '/tree',
        name: 'Tree',
        component: () => import('@/views/Tree/tree.vue')
      },
      {
        path: '/menu',
        name: 'Menu',
        component: () => import('@/views/Menu/menu.vue')
      },
      {
        path: '/dropdown',
        name: 'Dropdown',
        component: () => import('@/views/Dropdown/dropdown.vue')
      },
      {
        path: '/switch',
        name: 'Switch',
        component: () => import('@/views/Switch/switch.vue')
      },
      {
        path: '/modal',
        name: 'Modal',
        component: () => import('@/views/Modal/modal.vue')
      },
      {
        path: '/divider',
        name: 'Divider',
        component: () => import('@/views/Divider/divider.vue')
      },
      {
        path: '/tabs',
        name: 'Tabs',
        component: () => import('@/views/Tabs/tabs.vue')
      },
      {
        path: '/grid',
        name: 'Grid',
        component: () => import('@/views/Grid/grid.vue')
      },
      {
        path: '/input-number',
        name: 'InputNumber',
        component: () => import('@/views/InputNumber/inputNumber.vue')
      },
      {
        path: '/time-picker',
        name: 'TimePicker',
        component: () => import('@/views/TimePicker/time-picker.vue')
      },
      {
        path: '/upload',
        name: 'Upload',
        component: () => import('@/views/Upload/upload.vue')
      },
      {
        path: '/config-provider',
        name: 'ConfigProvider',
        component: () => import('@/views/ConfigProvider/config-provider.vue')
      }
    ]
  }
]

const createHistory = createWebHistory()
const route = createRouter({
  history: createHistory,
  routes: router
})

export default route
