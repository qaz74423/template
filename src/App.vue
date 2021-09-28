<template>
  <a-layout :style="{ height: '100%' }">
    <a-drawer
      v-if="isMob"
      placement="left"
      :closable="false"
      :visible="!collapsed"
      @close="() => (collapsed = true)"
      width="240"
      class="layout-sider-drawer"
    >
      <a-menu theme="dark" mode="inline">
        <a-menu-item :key="item.key" v-for="item in menuList">
          <component :is="item.icon" />
          <span class="nav-text">{{ item.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-drawer>
    <a-layout-sider v-else collapsible :trigger="null" v-model:collapsed="collapsed" width="240">
      <!-- <div class="logo" /> -->
      <a-menu theme="dark" mode="inline">
        <a-menu-item :key="item.key" v-for="item in menuList">
          <component :is="item.icon" />
          <span class="nav-text">{{ item.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ overflowX: 'hidden' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="collapsed = false"></menu-unfold-outlined>
        <menu-fold-outlined v-else class="trigger" @click="collapsed = true"></menu-fold-outlined>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial', overflowX: 'hidden' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          ...
          <br />Really
          <br />...
          <br />...
          <br />...
          <br />long
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />...
          <br />content
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import { ref, Ref, computed, onMounted, watch, render, h, createElementVNode } from 'vue';
import { useStore } from 'vuex'

const store = useStore();
const menuList = [{
  key: '1',
  title: 'nav1',
  icon: UserOutlined
}, {
  key: '2',
  title: 'nav2',
  icon: VideoCameraOutlined
}, {
  key: '3',
  title: 'nav3',
  icon: UploadOutlined
}, {
  key: '4',
  title: 'nav4',
  icon: BarChartOutlined
}, {
  key: '5',
  title: 'nav5',
  icon: CloudOutlined
}, {
  key: '6',
  title: 'nav6',
  icon: AppstoreOutlined
}]
const collapsed = ref(false)
const isMob = ref(false)
console.log(store.getters.getMobileWidth);

const checkIsMobile = () => {
  if (document.body.clientWidth < store.getters.getMobileWidth) {
    store.commit('setIsmob', true)
    // 当宽度过低时收起菜单
    collapsed.value = true
  } else {
    store.commit('setIsmob', false)
  }
  isMob.value = store.getters.getIsMob
}
onMounted(() => {
  checkIsMobile()
  window.addEventListener("resize", () => { checkIsMobile() })
})

// collapsed.value = c
// const collapsed = computed(() => store.getters.getIsMob)
</script>

<style lang="scss">
#app {
  height: 100%;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
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