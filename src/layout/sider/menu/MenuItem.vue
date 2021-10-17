
<script setup lang="ts">

const { item } = defineProps({
    item: {
        type: Object,
        default: {}
    }
})


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