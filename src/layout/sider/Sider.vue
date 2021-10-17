<script lang="ts" setup>
import MenuVue from './menu/Menu.vue';
import SiteLogoVue from './SiteLogo.vue';
import { appService } from '../../AppService'
const { collapsed, isMob } = appService.serviceDiscovery()

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
        <SiteLogoVue />
        <MenuVue />
    </a-drawer>
    <a-layout-sider v-else collapsible :trigger="null" v-model:collapsed="collapsed" width="240">
        <SiteLogoVue />
        <MenuVue />
    </a-layout-sider>
</template>

<style lang="scss">
// 左边抽屉颜色、样式
.layout-sider-drawer {
    .ant-drawer-wrapper-body {
        background-color: #001529;
    }
    .ant-drawer-body {
        padding: 0px;
    }
}
</style>