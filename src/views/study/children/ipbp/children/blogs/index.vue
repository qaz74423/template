<script setup lang="ts">
import IndexWrapper from "./IndexWrapper.vue";
import { recordsService } from "./RecordsService";

recordsService.serviceRigister();
</script>

<template>
  <IndexWrapper />
</template>
