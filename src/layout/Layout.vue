<template>
    <a-layout :style="{ height: '100%' }">
        <!-- 侧边栏 -->
        <SiderVue />
        <a-layout :style="{ overflowX: 'hidden' }">
            <!-- 主题头部 -->
            <HeaderVue />
            <!-- 主题标签 -->
            <TabVue />
            <!-- 主体内容 -->
            <ContentVue />
            <a-layout-footer :style="{ textAlign: 'center' }">Ant Design ©2018 Created by Ant UED</a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>

import { ref, onMounted, provide } from 'vue';
import { useStore } from 'vuex'
import ContentVue from './Content.vue';
import HeaderVue from './Header.vue';
import SiderVue from './Sider.vue';
import TabVue from './Tab.vue';
const store = useStore();

const collapsed = ref(false)
const isMob = ref(false)

provide("collapsed", collapsed)
provide("isMob", isMob)

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

</script>

<style lang="scss">
#app {
    height: 100%;
}
</style>