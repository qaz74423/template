<script setup lang="ts">import { useStore } from 'vuex';

const store = useStore();
const logo = store.getters.getLogo

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </script>

<template>
    <a-card class="card">
        <template #cover>
            <img
                class="bg"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        </template>
        <div class="header">
            <a-avatar class="avater" :size="50" :src="logo" />
            <div class="title">JC Ant Admin</div>
        </div>
        <div class="content">
            Vue
            <a-progress :percent="76.5" />TypeScript
            <a-progress :percent="19.1" />SCSS
            <a-progress :percent="3.3" />HTML
            <a-progress :percent="1.1" />
        </div>
    </a-card>
</template>
<style scoped lang="scss">
.card {
    box-shadow: 12px rgb(0 0 0 / 10%);
    overflow: hidden;
    .bg {
        transition: all 0.5s ease-out;
        &:hover {
            transform: scale(1.2);
        }
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .avater {
            border: 1px solid #ff6;
        }
        .title {
            font-size: 25px;
            color: rgb(24, 144, 255);
        }
    }
}
</style>