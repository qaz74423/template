<script setup lang="ts">
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,

} from '@ant-design/icons-vue';
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
</script>

<template>
    <a-menu theme="dark" mode="inline">
        <a-menu-item :key="item.key" v-for="item in menuList">
            <component :is="item.icon" />
            <span class="nav-text">{{ item.title }}</span>
        </a-menu-item>
    </a-menu>
</template>