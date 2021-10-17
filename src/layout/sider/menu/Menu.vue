<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
import { menuService } from "./MenuService";

const { getFilterMenuRouter, handleClick, selectedKeys } = menuService();
</script>

<template>
    <a-menu theme="dark" mode="inline" :selectedKeys="selectedKeys" @click="handleClick">
        <MenuItem v-for="item in getFilterMenuRouter()" :key="item.path" :item="item"></MenuItem>
    </a-menu>
</template>
