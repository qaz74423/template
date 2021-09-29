<script setup lang="ts">

import { useStore } from 'vuex'
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'
import { ref, inject } from 'vue';
import { watch } from '@vue/runtime-core';
const store = useStore();
const route = useRoute();
const router = useRouter();
store.dispatch('generateRoutes')
const routes: RouteRecordRaw[] = store.getters.getRoutes
const selectedKeys = ref<string[]>([route.path])
watch(() => route.path, () => {
    selectedKeys.value = [route.path]
})

// 这个函数要改的--现在只有一层菜单----------------------------------
const handleClick = ({ key, keyPath }: { key: string, keyPath: string[] }) => {
    router.push(key)
}



</script>

<template>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" @click="handleClick">
        <a-menu-item :key="item.path" v-for="item in routes">
            <component :is="item.meta?.icon" />
            <span class="nav-text">{{ item.meta?.title }}</span>
        </a-menu-item>
    </a-menu>
</template>