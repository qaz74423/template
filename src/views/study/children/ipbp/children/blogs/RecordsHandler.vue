<script setup lang="ts">
import { recordsService } from "./RecordsService";
import { Button, Popconfirm, Space } from "ant-design-vue";
import { instanceService } from "./InstanceService";
import { Record } from "./Shared";
const props = defineProps<{ record: Record }>();

const { handleDelete } = recordsService.serviceDiscovery();
const { handleUpdateBefore } = instanceService.serviceDiscovery();
</script>

<template>
  <Space>
    <Popconfirm
      title="确定要删除么？"
      @confirm="handleDelete(false, props.record.id)"
    >
      <Button danger type="primary">删除</Button>
    </Popconfirm>

    <Button type="dashed" @click="handleUpdateBefore(props.record)"
      >编辑</Button
    >
  </Space>
</template>
