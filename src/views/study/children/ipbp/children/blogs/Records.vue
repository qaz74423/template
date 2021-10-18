<script setup lang="ts">
import { Table } from "ant-design-vue";
import { blogsService } from "./BlogsService";
import RecordsHandler from "./RecordsHandler.vue";

const { columns, records, loading, rowSelection } = blogsService.serviceDiscovery();
</script>

<template>
    <Table
        bordered
        :columns="columns"
        :loading="loading"
        :data-source="records"
        row-key="id"
        :row-selection="rowSelection"
    >
        <template #handler="{ record }">
            <RecordsHandler :id="record.id" />
        </template>
    </Table>
</template>
