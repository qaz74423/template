<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue';
import { computed } from '@vue/runtime-core';
import MenuItem from './MenuItem.vue';
import { useMenu } from '../../hooks/useMenu';

const route = useRoute();
const selectedKeys = ref<string[]>([route.path])

const { getFilterMenuRouter, handleClick } = useMenu()

// // 过滤路由
const filterRouter = getFilterMenuRouter()


// 有bug 二级路由不能高亮
// watch(
//     () => route.path,
//     () => {
//         console.log(route);

//         // selectedKeys.value = [path.slice(1)];
//     },
//     { immediate: true }
// );
const activeMenu = computed(() => {
    const path = route.path;
    return [path.slice(1)]
})





</script>

<template>
    <a-menu theme="dark" mode="inline" :selectedKeys="activeMenu" @click="handleClick">
        <MenuItem v-for="item in filterRouter" :key="item.path" :item="item"></MenuItem>
    </a-menu>
</template>