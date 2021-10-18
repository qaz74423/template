<script setup lang="ts">
import { blogsService } from './BlogsService'
import { Button, Popconfirm } from 'ant-design-vue'
const props = defineProps<{ id: number }>()

const { handleDelete } = blogsService.serviceDiscovery()
</script>

<template>
    <Popconfirm title="确定要删除么？" @confirm="handleDelete(false, props.id)">
        <Button danger type="primary">删除所选</Button>
    </Popconfirm>
</template>