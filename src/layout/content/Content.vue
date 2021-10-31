<script lang="ts" setup>
import { appService } from "../../AppService";
const { transition } = appService.serviceDiscovery();
</script>

<template>
  <a-layout-content class="content">
    <router-view v-slot="{ Component }">
      <transition :name="transition">
        <component :is="Component" />
      </transition>
    </router-view>
  </a-layout-content>
</template>
<style lang="scss" scoped>
.content {
  padding: 16px 16px 0;
  overflow: initial;
  overflow-x: hidden;
}
</style>
