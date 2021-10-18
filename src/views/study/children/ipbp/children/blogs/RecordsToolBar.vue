<script setup lang="ts">
import { SyncOutlined } from '@ant-design/icons-vue'
import { Button, Tooltip, Badge, Popconfirm, Input, Divider, Select, Space } from 'ant-design-vue'
import { blogsService } from './BlogsService'
const { loading, request, handleDelete, stockSize, hasStocks } = blogsService.serviceDiscovery()
</script>

<template>
    <Space>
        <Tooltip title="刷新">
            <Button shape="circle" @click="request" :loading="loading">
                <template #icon>
                    <SyncOutlined />
                </template>
            </Button>
        </Tooltip>

        <Divider type="vertical" />

        <Popconfirm title="确定要删除么？" @confirm="handleDelete(true)">
            <Badge :count="stockSize">
                <Button danger type="primary" :disabled="!hasStocks">删除所选</Button>
            </Badge>
        </Popconfirm>
    </Space>
</template>