<template>
    <a-layout :style="{ height: '100%' }">
        <!-- 侧边栏 -->
        <SiderVue />
        <a-layout :style="{ overflowX: 'hidden' }">
            <!-- 主题头部 -->
            <HeaderVue />
            <!-- 主题标签 -->
            <TabVue v-if="isTabs" />
            <!-- 主体内容 -->
            <ContentVue />
            <a-layout-footer
                v-if="showFooter"
                :style="{ textAlign: 'center' }"
            >Ant Design ©2018 Created by Ant UED</a-layout-footer>
        </a-layout>
        <!-- 右边设置栏 -->
        <SettingVue />
    </a-layout>
</template>

<script lang="ts" setup>

import ContentVue from "./Content.vue";
import HeaderVue from "./Header.vue";
import SiderVue from "./Sider.vue";
import TabVue from "./Tab.vue";
import SettingVue from "./Setting.vue";
import { useLayout } from "../hooks/useLayout";

const { showFooter, isTabs } = useLayout();
</script>

<style lang="scss">
</style>
