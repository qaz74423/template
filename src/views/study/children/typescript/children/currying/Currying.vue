<script setup lang="ts">
import { CurryingService } from "./CurryingService";
import BasePanel from "@components/base-panel/BasePanel.vue";
import { _Event } from "./Event";
CurryingService();

const { testFn, currying1, currying2 } = _Event();
</script>

<template>
  <BasePanel />
</template>
