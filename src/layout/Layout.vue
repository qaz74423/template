<template>
    <a-layout :style="{ height: '100%' }">
        <SiderVue />
        <a-layout :style="{ overflowX: 'hidden' }">
            <HeaderVue />
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