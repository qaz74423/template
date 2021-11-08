<script lang="ts" setup>
import { Drawer, Layout } from "ant-design-vue";
import MenuVue from "./menu/Menu.vue";
import SiteLogoVue from "./SiteLogo.vue";
import { appService } from "../../AppService";
import { computed } from "vue-demi";
const { collapsed, isMob, color, theme } = appService.serviceDiscovery();

// // 样式
// // 抽屉样式--适配sider的theme
const drawerStyle = computed(() => {
  return {
    backgroundColor: theme.value == "dark" ? color.value.sider : "#fff",
  };
});

const width = 240;
</script>

<template>
  <!-- 宽度低时，用抽屉 -->
  <Drawer
    v-if="isMob"
    placement="left"
    :closable="false"
    :visible="!collapsed"
    @close="() => (collapsed = true)"
    class="layout-sider-drawer"
    :width="width"
    :body-style="{ padding: '0px' }"
    :drawer-style="drawerStyle"
  >
    <SiteLogoVue />
    <MenuVue />
  </Drawer>

  <!-- 宽度高时用Sider -->
  <Layout.Sider
    v-else
    collapsible
    :trigger="null"
    v-model:collapsed="collapsed"
    :width="width"
    :theme="theme"
    style="box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1)"
  >
    <SiteLogoVue />
    <MenuVue />
  </Layout.Sider>
</template>

<style lang="scss" scoped></style>
