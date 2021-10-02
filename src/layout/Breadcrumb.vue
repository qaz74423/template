<script setup lang="ts">import { computed } from "@vue/reactivity";
import { useRoute, RouteRecordRaw } from "vue-router";
const route = useRoute()

const breadcrumbs = computed(() => {
    return route.matched.map((item: RouteRecordRaw) => {
        if (item.path == '/')
            return {
                path: "/",
                name: '首页'
            }
        return item
    })
})
</script>

<template>
    <a-breadcrumb style="display: inline-block;">
        <a-breadcrumb-item v-for="item in breadcrumbs" :key="item.path">{{ item.name }}</a-breadcrumb-item>
    </a-breadcrumb>
</template>