<script lang="ts" setup>
import { getStorage, hasAuth } from '../../utils/auth'
const token = getStorage('token')
const userInfo = getStorage('userInfo')
const isLogin = hasAuth()
</script>
<template>
    <div>
        <div>token:{{ token }}</div>
        <div>userInfo:{{ userInfo }}</div>
        <div>hasAuth?:{{ isLogin }}</div>
    </div>
</template>