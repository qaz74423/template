<script setup lang="ts">
import { ref, Ref, inject } from "vue";
import { SettingOutlined, CloseOutlined } from "@ant-design/icons-vue";
import { appService } from "../../AppService";
const { isTabs, showFooter, transition, theme } = appService.serviceDiscovery();

const isVisible = ref<boolean>(false);
const onClose = () => {
  isVisible.value = false;
};
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

    <!-- 展示Tab -->
    <a-row class="setting-item" type="flex" justify="space-between">
      <span>Show Tags-View</span>
      <a-switch v-model:checked="isTabs" />
    </a-row>

    <!-- 展示footer -->
    <a-row class="setting-item" type="flex" justify="space-between">
      <span>Show Footer</span>
      <a-switch v-model:checked="showFooter" />
    </a-row>

    <!-- 路由动画 -->
    <a-row class="setting-item" type="flex" justify="space-between">
      <span>Router Transition</span>
      <a-select ref="select" v-model:value="transition">
        <a-select-option value="fade-left">fade-left</a-select-option>
        <a-select-option value="fade-right">fade-right</a-select-option>
      </a-select>
    </a-row>

    <!-- 主题 -->
    <a-row class="setting-item" type="flex" justify="space-between">
      <span>Theme</span>
      <a-select ref="select" v-model:value="theme">
        <a-select-option value="light">light</a-select-option>
        <a-select-option value="dark">dark</a-select-option>
      </a-select>
    </a-row>
  </a-drawer>
</template>

<style lang="scss" scoped>
.icon {
  position: absolute;
  top: 50%;
  right: 260px;
  font-size: 25px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #fff;
  color: #1890ff;
  cursor: pointer;
  border-radius: 6px 0 0 6px;
  transition: all 0.2s linear;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #1890ff;
    color: #fff;
  }
}
.setting-item {
  margin-bottom: 25px;
  align-items: center;
}
</style>
