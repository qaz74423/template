<script setup lang="ts">
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'
import { ref } from 'vue';
import { watch } from '@vue/runtime-core';
import MenuItem from './MenuItem.vue';
import { useMenu } from '../../hooks/useMenu';

const route = useRoute();
const selectedKeys = ref<string[]>([route.path])

const { getFilterMenuRouter, handleClick } = useMenu()

// // 过滤路由
const filterRouter = getFilterMenuRouter()

// 监控path变化来改变selectedKeys
watch(() => route.path, () => {
    selectedKeys.value = [route.path]
})






</script>

<template>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" @click="handleClick">
        <MenuItem v-for="item in filterRouter" :key="item.path" :item="item"></MenuItem>
    </a-menu>
</template>