<script setup lang="ts">
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'
import routes from '../../router/routes';
import { ref } from 'vue';
import { watch } from '@vue/runtime-core';
import MenuItem from './MenuItem.vue';

const route = useRoute();
const router = useRouter();
const selectedKeys = ref<string[]>([route.path])

const menuRoutes = routes.find((item: RouteRecordRaw) => item.name === 'Layout')?.children
// 监控path变化来改变selectedKeys
watch(() => route.path, () => {
    selectedKeys.value = [route.path]
})

const resolvPath = (path: Array<string>): string => {
    return path.map((item) => "/" + item).join("")
}

const handleClick = ({ keyPath }: { key: string, keyPath: string[] }) => {
    router.push(resolvPath(keyPath))
}

</script>

<template>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" @click="handleClick">
        <MenuItem v-for="item in menuRoutes" :key="item.path" :item="item"></MenuItem>
    </a-menu>
</template>