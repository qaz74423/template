<script lang="ts" setup>
import { SingletonService } from "./SingletonService";
import BasePanel from "@components/base-panel/BasePanel.vue";

SingletonService();
</script>

<template>
  <BasePanel />
</template>
