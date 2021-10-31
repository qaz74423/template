<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
import { menuService } from "./MenuService";

const { getMenuRouter, handleClick, selectedKeys, color, theme } =
  menuService();
</script>

<template>
  <a-menu
    :theme="theme"
    mode="inline"
    :selectedKeys="selectedKeys"
    @click="handleClick"
  >
    <!-- 试试看能不能解决性能问题，好像有if 和 for 混用的问题 -->

    <MenuItem
      v-for="item in getMenuRouter()"
      :key="item.path"
      :item="item"
    ></MenuItem>
  </a-menu>
</template>
