<template>
  <z-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
    </a>
    <template #overlay>
      <z-menu>
        <z-menu-item>
          <a href="javascript:;">1st menu item</a>
        </z-menu-item>
        <z-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </z-menu-item>
        <z-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </z-menu-item>
      </z-menu>
    </template>
  </z-dropdown>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({})
</script>
