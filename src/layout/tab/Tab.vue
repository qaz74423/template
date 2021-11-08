<script setup lang="ts">
import { Tabs } from "ant-design-vue";
import { tabService } from "./TabService";

const { tabs, activeKey, onEdit, tabChange } = tabService();
</script>

<template>
  <div class="layout-tabs">
    <Tabs
      v-model:activeKey="activeKey"
      type="editable-card"
      tabPosition="top"
      @edit="onEdit"
      @change="tabChange"
      hideAdd
    >
      <Tabs.TabPane
        v-for="(tab, index) in tabs"
        :key="tab.path"
        :tab="tab.title"
        :closable="tabs.length > 1 && index != tabs.length - 1"
      ></Tabs.TabPane>
    </Tabs>
  </div>
</template>

<style lang="scss" scoped>
.layout-tabs {
  padding: 0 15px;
  border-bottom: 1px solid #d8dce5;
}
:deep(.ant-tabs-bar) {
  margin: 0px;
}
</style>
