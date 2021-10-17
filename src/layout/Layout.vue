<script lang="ts" setup>
import ContentVue from "./content/Content.vue";
import HeaderVue from "./header/Header.vue";
import SiderVue from "./sider/Sider.vue";
import TabVue from "./tab/Tab.vue";
import SettingVue from "./setting/Setting.vue";
import { LayoutService } from "./LayoutService";

const { showFooter, isTabs } = LayoutService();
</script>
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
<style lang="scss">
</style>
