<script setup lang="ts">
import { ref } from "vue";
import { SettingOutlined, CloseOutlined } from "@ant-design/icons-vue";
const isVisible = ref<boolean>(false)
const onClose = () => {
    isVisible.value = false
}
</script>

<template>
    <a-drawer title="设置" :placement="'right'" :visible="isVisible" @close="onClose" width="260">
        <template #handle>
            <div class="icon">
                <SettingOutlined @click="() => (isVisible = true)" v-if="!isVisible" />
                <CloseOutlined @click="() => (isVisible = false)" v-else />
            </div>
        </template>
    </a-drawer>
</template>

<style lang="scss" scoped>
.icon {
    position: absolute;
    top: 300px;
    right: 260px;
    font-size: 28px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #1890ff;
    color: #fff;
    cursor: pointer;
}
</style>