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

import { ref, onMounted, onUnmounted, provide } from 'vue';
import {
    InjectCollapsed,
    InjectIsMob,
    InjectIsTabs,
    InjectShowFooter,
    RouterFadeType,
    InjectTransition,
    InjectIsLogin
} from '../context'
import { hasAuth } from "../utils/auth"

import ContentVue from './Content.vue';
import HeaderVue from './Header.vue';
import SiderVue from './Sider.vue';
import TabVue from './Tab.vue';
import SettingVue from './Setting.vue';

const collapsed = ref<boolean>(false)
const isMob = ref<boolean>(false)
const isTabs = ref<boolean>(true)
const showFooter = ref<boolean>(false)
const transition = ref<RouterFadeType>('fade-right')
const isLogin = ref<boolean>(hasAuth())

provide(InjectCollapsed, collapsed)
provide(InjectIsMob, isMob)
provide(InjectIsTabs, isTabs)
provide(InjectShowFooter, showFooter)
provide(InjectTransition, transition)
provide(InjectIsLogin, isLogin)

const checkIsMobile = () => {
    const EnvMobWidth: number = parseInt(import.meta.env.VITE_MOBILE_WIDTH as string)
    if (document.body.clientWidth < EnvMobWidth) {
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
onUnmounted(() => {
    window.removeEventListener('resize', () => { checkIsMobile() })
})

</script>

<style lang="scss">
</style>