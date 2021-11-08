<script lang="ts" setup>
import { Layout } from "ant-design-vue";
import ContentVue from "./content/Content.vue";
import HeaderVue from "./header/Header.vue";
import SiderVue from "./sider/Sider.vue";
import TabVue from "./tab/Tab.vue";
import SettingVue from "./setting/Setting.vue";
import { LayoutService } from "./LayoutService";

const { showFooter, isTabs } = LayoutService();
</script>
<template>
  <Layout :style="{ height: '100%' }">
    <!-- 侧边栏 -->
    <SiderVue />
    <Layout :style="{ overflowX: 'hidden' }">
      <!-- 主题头部 -->
      <HeaderVue />
      <!-- 主题标签 -->
      <TabVue v-if="isTabs" />
      <!-- 主体内容 -->
      <ContentVue />
      <Layout.Footer v-if="showFooter" :style="{ textAlign: 'center' }"
        >Ant Design ©2018 Created by Ant UED</Layout.Footer
      >
    </Layout>
    <!-- 右边设置栏 -->
    <SettingVue />
  </Layout>
</template>
<style lang="scss"></style>
