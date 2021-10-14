<script lang="ts" setup>
import { UserOutlined } from "@ant-design/icons-vue";
import { useRouter } from 'vue-router'
import { getStorage } from '../utils/auth'
import type { UserType } from '../api/user'
import { inject } from "vue-demi";
import { InjectIsLogin } from '../context'

const router = useRouter();

const isLogin = inject(InjectIsLogin)

let userInfo: UserType = {}
if (isLogin?.value) {
    userInfo = JSON.parse(getStorage('userInfo'))
}

const handlerClick = () => {
    if (!isLogin?.value)
        router.push('/login')
}

const logout = () => {

    localStorage.clear()
    router.push('/login')
}
</script>
<template>
    <a-dropdown class="right" @click="handlerClick">
        <span class="hover-con">
            <a-avatar :size="55" :src="isLogin ? userInfo.avatar : ''">
                <template #icon>
                    <UserOutlined />
                </template>
            </a-avatar>
            <a class="username">{{ isLogin ? userInfo.username : '登录' }}</a>
        </span>
        <template #overlay>
            <a-menu v-if="isLogin">
                <a-menu-item key="0" @click="router.push('user-info')">个人中心</a-menu-item>
                <a-menu-item key="1">个人设置（没写）</a-menu-item>
                <a-menu-divider />
                <a-menu-item key="2" @click="logout">退出登录</a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<style lang="scss" scoped>
.right {
    width: 180px;
    white-space: nowrap;
}
.right {
    width: 180px;
    white-space: nowrap;
    float: right;
}
.hover-con {
    cursor: pointer;
}
.username {
    padding-left: 10px;
}
</style>
