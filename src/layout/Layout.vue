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

import { ref, onMounted, provide } from 'vue';
import { useStore } from 'vuex'
import ContentVue from './Content.vue';
import HeaderVue from './Header.vue';
import SiderVue from './Sider.vue';
import TabVue from './Tab.vue';
import SettingVue from './Setting.vue';
const store = useStore();

const collapsed = ref(false)
const isMob = ref(false)
const isTabs = ref(true)
const showFooter = ref(false)
const transition = ref<string>('fade-right')

provide("collapsed", collapsed)
provide("isMob", isMob)
provide('isTabs', isTabs)
provide('showFooter', showFooter)
provide('transition', transition)
const checkIsMobile = () => {
    if (document.body.clientWidth < store.getters.getMobileWidth) {
        isMob.value = true
        // 当宽度过低时收起菜单
        collapsed.value = true
    } else {
        isMob.value = false
    }
}
onMounted(() => {
    checkIsMobile()
    window.addEventListener("resize", () => { checkIsMobile() })
})

</script>

<style lang="scss">
</style>