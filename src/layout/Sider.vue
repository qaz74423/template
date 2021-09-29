<script lang="ts" setup>

import { inject } from 'vue'
import MenuVue from './menu/Menu.vue';
const collapsed = inject('collapsed')
const isMob = inject('isMob')
</script>

<template>
    <a-drawer
        v-if="isMob"
        placement="left"
        :closable="false"
        :visible="!collapsed"
        @close="() => (collapsed = true)"
        width="240"
        class="layout-sider-drawer"
    >
        <MenuVue />
    </a-drawer>
    <a-layout-sider v-else collapsible :trigger="null" v-model:collapsed="collapsed" width="240">
        <!-- <div class="logo" /> -->
        <MenuVue />
    </a-layout-sider>
</template>