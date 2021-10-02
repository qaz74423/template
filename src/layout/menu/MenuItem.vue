<!-- <script setup lang="ts">
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'

import routes from '../../router/routes';

const menuRoutes = routes.find((item: RouteRecordRaw) => item.name === 'Layout')?.children

</script>
<template>
    <a-menu-item :key="item.path" v-for="item in menuRoutes">
        <component :is="item.meta?.icon" />
        <span class="nav-text">{{ item.meta?.title }}</span>
    </a-menu-item>
</template> -->

<script setup lang="ts">

const { item } = defineProps({
    item: {
        type: Object,
        default: {}
    }
})
console.log(item);


</script>

<template>
    <a-menu-item v-if="!item.children" :key="item.path">
        <template #icon>
            <component :is="item.meta?.icon" />
        </template>
        <span class="nav-text">{{ item.meta?.title }}</span>
    </a-menu-item>

    <a-sub-menu v-else :key="item.path">
        <template #icon>
            <component :is="item.meta?.icon" />
        </template>
        <template #title>{{ item.meta?.title }}</template>
        <MenuItem v-for="it in item.children" :key="it" :item="it"></MenuItem>
    </a-sub-menu>
</template>