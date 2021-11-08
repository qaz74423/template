<script setup lang="ts">
//  测试页面，先保留
import { TestService } from "./TestService";
import BasePanel from "@components/base-panel/BasePanel.vue";
async function fn() {
  setTimeout(() => {}, 1000);
}
await fn();
TestService();
</script>
<template>
  <BasePanel />
</template>
