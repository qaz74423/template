<script setup lang="ts">
import { Menu } from "ant-design-vue";
const { item } = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <Menu.Item v-if="!item.children" :key="item.path">
    <template #icon>
      <component :is="item.meta?.icon" />
    </template>
    <span class="nav-text">{{ item.meta?.title }}</span>
  </Menu.Item>

  <Menu.SubMenu v-else :key="item.path">
    <template #icon>
      <component :is="item.meta?.icon" />
    </template>
    <template #title>{{ item.meta?.title }}</template>

    <!-- 试试看能不能解决性能问题，好像有if 和 for 混用的问题 -->
    <MenuItem v-for="it in item.children" :key="it" :item="it"></MenuItem>
  </Menu.SubMenu>
</template>
