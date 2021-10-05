<script setup lang="ts">
import { ref, inject } from "vue";
import { SettingOutlined, CloseOutlined } from "@ant-design/icons-vue";
const isTabs = inject('isTabs')
const showFooter = inject('showFooter')
const transition = inject('transition')
const isVisible = ref<boolean>(false)
const onClose = () => {
    isVisible.value = false
}
</script>

<template>
    <a-drawer
        title="Page style setting"
        :placement="'right'"
        :visible="isVisible"
        @close="onClose"
        width="260"
    >
        <template #handle>
            <div class="icon">
                <SettingOutlined @click="() => (isVisible = true)" v-if="!isVisible" />
                <CloseOutlined @click="() => (isVisible = false)" v-else />
            </div>
        </template>
        <a-row class="setting-item" type="flex" justify="space-between">
            <span>Open Tags-View</span>
            <a-switch v-model:checked="isTabs" />
        </a-row>
        <a-row class="setting-item" type="flex" justify="space-between">
            <span>Show Footer</span>
            <a-switch v-model:checked="showFooter" />
        </a-row>
        <a-row class="setting-item" type="flex" justify="space-between">
            <span>Router Transition</span>
            <a-select ref="select" v-model:value="transition">
                <a-select-option value="fade-left">fade-left</a-select-option>
                <a-select-option value="fade-right">fade-right</a-select-option>
            </a-select>
        </a-row>
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
    border-radius: 6px 0 0 6px;
}
.setting-item {
    margin-bottom: 25px;
    align-items: center;
}
</style>