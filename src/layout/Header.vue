
<script lang="ts" setup>
import { inject } from 'vue'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons-vue';
const collapsed = inject('collapsed')
</script>

<template>
    <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="collapsed = false"></menu-unfold-outlined>
        <menu-fold-outlined v-else class="trigger" @click="collapsed = true"></menu-fold-outlined>
    </a-layout-header>
</template>

<style lang="scss" scoped>
.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}
</style>