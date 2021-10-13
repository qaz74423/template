<script lang="ts" setup>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

import { loginApi } from '../../api/user'
import Stars from "../../components/stars.vue";

const router = useRouter()
const formState = reactive({
    username: 'admin',
    password: '123456'
})
// 功能没完善，先是一个小demo
const login = () => {
    loginApi(formState).then(res => {
        const token = res.headers.authorization
        const userInfo = res.data?.data
        localStorage.setItem('token', token)
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }).then(
        // 保证所有token摄入
        () => {
            router.push('/')
        }
    )

}
const reset = () => {
    formState.username = '';
    formState.password = ''
}
const openStar = ref(true)

</script>

<template>
    <!-- 背景 -->
    <Stars :open="openStar"></Stars>
    <!-- 主体登录内容 -->
    <div class="w">
        <div class="content">
            <h2>测试，随便输入都可以登录</h2>
            <a-form :model="formState">
                <a-form-item label="username">
                    <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-form-item label="password">
                    <a-input v-model:value="formState.password" />
                </a-form-item>

                <a-form-item :wrapper-col="{ span: 24, offset: 8 }">
                    <a-button type="primary" @click="login">login</a-button>
                    <a-button style="margin-left: 10px" @click="reset">reset</a-button>
                </a-form-item>
            </a-form>
            <a-row justify="center">
                开启星空特效
                <a-switch style="margin-left: 10px;" v-model:checked="openStar" />
            </a-row>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.w {
    display: flex;
    justify-content: center; /*x轴对齐方式*/
    align-items: center; /*y轴对滴方式*/
    height: 100vh;
    background: transparent;
    .content {
        position: relative;
        width: 500px;
        background-color: #fff;
        border-radius: 20px;
        padding: 20px;
        opacity: 0.8;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 20px;
            z-index: -1;
            filter: blur(20px);
        }
    }
}
</style>