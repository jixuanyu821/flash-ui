<!-- wyf 2022-1-19 -->
<template>
  <div class="main-box">
    <div class="left-box">
      <z-menu :selected-keys="[$route.path]" @click="handleClick">
        <z-menu-item
          v-for="submenus in menus"
          :key="submenus.path"
          :key-val="submenus.path"
        >
          {{ submenus.title }}
        </z-menu-item>
      </z-menu>
    </div>
    <div class="right-box">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup() {
    const menus = reactive([
      {
        title: '组件安装使用',
        path: '/readme'
      },
      {
        title: 'Button  按钮',
        path: '/button'
      },
      {
        title: 'Input  输入框',
        path: '/input'
      },
      {
        title: 'Radio  单选框',
        path: '/radio'
      },
      {
        title: 'Checkbox  多选框',
        path: '/checkbox'
      },
      {
        title: 'Select  选择器',
        path: '/select'
      },
      {
        title: 'TreeSelect  树选择',
        path: '/tree-select'
      },
      {
        title: 'Cascader  级联选择',
        path: '/cascader'
      },
      {
        title: 'DatePicker  日期选择器',
        path: '/datepicker'
      },
      {
        title: 'Tag  标签',
        path: '/tag'
      },
      {
        title: 'Pagination  分页',
        path: '/pagination'
      },
      {
        title: 'Table  表格',
        path: '/table'
      },
      {
        title: 'Form  表单',
        path: '/form'
      },
      {
        title: 'Tree  树形',
        path: '/tree'
      },
      {
        title: 'Menu  导航菜单',
        path: '/menu'
      },
      {
        title: 'Dropdown  下拉菜单',
        path: '/dropdown'
      },
      {
        title: 'Switch  开关',
        path: '/switch'
      },
      {
        title: 'Modal  对话框',
        path: '/modal'
      },
      {
        title: 'Divider  分割线',
        path: '/divider'
      },
      {
        title: 'Tabs  标签页',
        path: '/tabs'
      },
      {
        title: 'Grid  栅格',
        path: '/grid'
      },
      {
        title: 'InputNumber  数字输入框',
        path: '/input-number'
      },
      {
        title: 'TimePicker  时间选择框',
        path: '/time-picker'
      },
      {
        title: 'Upload  上传',
        path: '/upload'
      },
      {
        title: 'ConfigProvider  全局配置',
        path: '/config-provider'
      }
    ])
    const router = useRouter()
    const handleClick = (item) => {
      router.push(item.key)
    }
    return {
      menus,
      handleClick
    }
  }
})
</script>

<style lang="less">
.main-box {
  width: 100%;
  height: 100%;
  display: flex;
  .left-box {
    width: 260px;
    height: 100%;
    float: left;
    overflow: auto;
    .ant-menu {
      height: 100%;
    }
    .ant-menu-item-selected {
      border-right: 3px solid #2956f2;
    }
  }
  .right-box {
    flex: 1;
    height: 100%;
    overflow: auto;
    padding-left: 80px;
  }
}
</style>
