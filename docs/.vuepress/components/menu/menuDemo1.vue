<template>
  <div>
    <ZMenu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <ZMenuItem key-val="1">
        <template #icon>
          <MailOutlined />
        </template>
        Navigation One
      </ZMenuItem>
      <ZMenuItem key-val="2">
        <template #icon>
          <CalendarOutlined />
        </template>
        Navigation Two
      </ZMenuItem>
      <ZSubMenu key-val="sub1">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Three</template>
        <ZMenuItem key-val="3">Option 3</ZMenuItem>
        <ZMenuItem key-val="4">Option 4</ZMenuItem>
        <ZSubMenu key-val="sub1-2" title="Submenu">
          <ZMenuItem key-val="5">Option 5</ZMenuItem>
          <ZMenuItem key-val="6">Option 6</ZMenuItem>
        </ZSubMenu>
      </ZSubMenu>
      <ZSubMenu key-val="sub2">
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>Navigation Four</template>
        <ZMenuItem key-val="7">Option 7</ZMenuItem>
        <ZMenuItem key-val="8">Option 8</ZMenuItem>
        <ZMenuItem key-val="9">Option 9</ZMenuItem>
        <ZMenuItem key-val="10">Option 10</ZMenuItem>
      </ZSubMenu>
    </ZMenu>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const selectedKeys = ref(['1'])
      const openKeys = ref(['sub1'])
      return {
        selectedKeys,
        openKeys
      }
    }
  })
</script>
