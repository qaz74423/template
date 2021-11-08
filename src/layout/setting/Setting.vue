<script setup lang="ts">
import { Row, Switch, Select, SelectOption, Drawer } from "ant-design-vue";
import { ref } from "vue";
import { SettingOutlined, CloseOutlined } from "@ant-design/icons-vue";
import { appService } from "../../AppService";
const { isTabs, showFooter, transition, theme } = appService.serviceDiscovery();

const isVisible = ref<boolean>(false);
const onClose = () => {
  isVisible.value = false;
};
</script>

<template>
  <Drawer
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
    <Row class="setting-item" type="flex" justify="space-between">
      <span>Show Tags-View</span>
      <Switch v-model:checked="isTabs" />
    </Row>

    <!-- 展示footer -->
    <Row class="setting-item" type="flex" justify="space-between">
      <span>Show Footer</span>
      <Switch v-model:checked="showFooter" />
    </Row>

    <!-- 路由动画 -->
    <Row class="setting-item" type="flex" justify="space-between">
      <span>Router Transition</span>
      <Select ref="select" v-model:value="transition">
        <SelectOption value="fade-left">fade-left</SelectOption>
        <SelectOption value="fade-right">fade-right</SelectOption>
      </Select>
    </Row>

    <!-- 主题 -->
    <Row class="setting-item" type="flex" justify="space-between">
      <span>Theme</span>
      <Select ref="select" v-model:value="theme">
        <SelectOption value="light">light</SelectOption>
        <SelectOption value="dark">dark</SelectOption>
      </Select>
    </Row>
  </Drawer>
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
