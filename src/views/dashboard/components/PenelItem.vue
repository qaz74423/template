<script setup lang="ts">
import { GithubOutlined } from "@ant-design/icons-vue";
import { inject } from "@vue/runtime-core";

const isMob = inject('isMob')
const { item } = defineProps({
    item: {
        type: Object,
        default: {}
    }
})

</script>

<template>
    <a-card class="card">
        <a-row type="flex" :justify="isMob ? 'center' : 'space-between'">
            <a-col>
                <component class="icon" :is="item.icon" />
            </a-col>
            <a-col v-if="!isMob">
                <div class="text">{{ item.text }}</div>
                <div class="number">{{ item.number }}</div>
            </a-col>
        </a-row>
    </a-card>
</template>
<style scoped lang="scss">
.card {
    border-radius: 8px;
    cursor: pointer;
    backdrop-filter: blur(5px);
    box-shadow: 0 8px 12px rgba(255, 255, 255, 0.3);
    &:hover .icon {
        background-color: rgb(24, 144, 255);
        color: #fff;
        transition: all 0.8s;
        border-radius: 8px;
    }
    .icon {
        font-size: 70px;
    }
    .text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
    }
    .number {
        font-size: 20px;
    }
}
</style>