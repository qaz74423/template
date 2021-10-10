
<script lang="ts" setup>
import { inject } from 'vue'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons-vue';
import { InjectCollapsed, InjectIsMob } from '../context'
import BreadcrumbVue from './Breadcrumb.vue';
import UserInfoVue from './UserInfo.vue';
const collapsed = inject(InjectCollapsed)
const isMob = inject(InjectIsMob)
</script>

<template>
    <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="collapsed = false"></menu-unfold-outlined>
        <menu-fold-outlined v-else class="trigger" @click="collapsed = true"></menu-fold-outlined>
        <!-- 面包屑 -->
        <BreadcrumbVue v-if="!isMob"></BreadcrumbVue>
        <!-- 个人信息 -->
        <UserInfoVue></UserInfoVue>
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