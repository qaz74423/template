<script lang="ts" setup>
import { UserOutlined } from "@ant-design/icons-vue";
import { useRouter } from 'vue-router'
const router = useRouter();
const logout = () => {
    // 清除token之类的操作
    localStorage.clear()
    router.push('/login')
}
</script>
<template>
    <a-dropdown class="right">
        <span class="hover-con">
            <a-avatar
                :size="55"
                src="https://img1.baidu.com/it/u=3440739454,362477188&fm=26&fmt=auto"
            >
                <template #icon>
                    <UserOutlined />
                </template>
            </a-avatar>
            <a class="username">JC长官</a>
        </span>
        <template #overlay>
            <a-menu>
                <a-menu-item key="0">个人中心（没写）</a-menu-item>
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
