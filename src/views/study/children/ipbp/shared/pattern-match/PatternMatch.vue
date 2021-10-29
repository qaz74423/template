<script lang="ts" setup>
import { patternMatchService } from "./PatternMatchService";
import { Button, Row, Space, Drawer, Tooltip } from "ant-design-vue";
import {
  RollbackOutlined,
  CheckOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons-vue";
const { loading, visible, currentPattern } =
  patternMatchService.serviceDiscovery();
</script>

<template>
  <Drawer
    destroy-on-close
    placement="left"
    :width="currentPattern.width"
    :closable="false"
    v-model:visible="visible"
  >
    <template #title>
      <Row type="flex" align="middle" justify="space-between">
        <Space>
          <component :is="currentPattern.icon" />
          <span>{{ currentPattern.title }}</span>
        </Space>

        <Space size="middle">
          <Tooltip
            title="通过取消按钮关闭抽屉，可保留数据"
            placement="left"
            :overlay-style="{ maxWidth: '300px' }"
          >
            <QuestionCircleFilled />
          </Tooltip>

          <Button @click="visible = false">
            <template #icon>
              <RollbackOutlined />
            </template>
            <span>取消</span>
          </Button>

          <Button
            type="primary"
            :loading="loading"
            @click="currentPattern.handler"
          >
            <template #icon>
              <CheckOutlined />
            </template>
            <span>提交</span>
          </Button>
        </Space>
      </Row>
    </template>

    <component :is="currentPattern.component" />
  </Drawer>
</template>
