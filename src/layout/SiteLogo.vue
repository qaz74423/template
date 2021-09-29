<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore();
const logo = store.getters.getLogo
const title = store.getters.getTitle
</script>

<template>
    <div class="site-logo">
        <div>
            <div class="logo">
                <img :src="logo" />
            </div>
            <h1>{{ title }}</h1>
        </div>
    </div>
</template>
<style lang="scss" scoped>
* {
    margin: 0px;
    padding: 0px;
}
.site-logo {
    // padding-left: 20px;
    height: 64px;
    line-height: 64px;
    overflow: hidden;
    padding-left: 24px;
    display: inline-block;
    .logo {
        display: inline-block;
        box-sizing: content-box;
        img,
        svg {
            height: 32px;
            width: 32px;
            vertical-align: middle;
        }
    }

    h1 {
        display: inline-block;
        // vertical-align: middle;
        margin-left: 10px;
        color: #fff;
        font-size: 20px;
    }
}
</style>