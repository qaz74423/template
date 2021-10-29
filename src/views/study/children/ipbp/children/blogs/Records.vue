<script setup lang="ts">
import { Table, Divider } from "ant-design-vue";
import { recordsService } from "./RecordsService";
import RecordsHandler from "./RecordsHandler.vue";
import RecordsToolBar from "./RecordsToolBar.vue";

const { columns, records, loading, rowSelection } =
  recordsService.serviceDiscovery();
</script>

<template>
  <RecordsToolBar />

  <Divider />

  <Table
    bordered
    :columns="columns"
    :loading="loading"
    :data-source="records"
    row-key="id"
    :row-selection="rowSelection"
  >
    <template #handler="{ record }">
      <RecordsHandler :record="record" />
    </template>
  </Table>
</template>
