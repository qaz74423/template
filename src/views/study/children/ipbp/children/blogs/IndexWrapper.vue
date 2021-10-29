<script lang="ts" setup>
import Records from "./Records.vue";
import { instanceService } from "./InstanceService";
import Instance from "./Instance.vue";

instanceService.serviceRigister();
</script>
<template>
  <div>
    <Records />
    <Instance />
  </div>
</template>
