<script lang="ts" setup>
import { Card, CardMeta, Row, Divider } from "ant-design-vue";
import {
  GithubOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import HighLightMaker from "@components/HighLightMaker.vue";
import { basePanelService } from "./BasePanelService";

// 发现被注册的Service
const { code, showCode, pattern, redirect } =
  basePanelService.serviceDiscovery();
</script>

<template>
  <div>
    <Card>
      <!-- 卡片源信息 -->
      <CardMeta :title="pattern.title" :description="pattern.describe" />

      <!-- 例子 -->
      <div style="margin: 20px 0; overflow: hidden">
        <component
          v-if="pattern.exampleComponent"
          :is="pattern.exampleComponent"
        />
      </div>

      <!-- 代码区 -->
      <Row v-show="showCode" style="transition: all 1s">
        <Divider />
        <HighLightMaker :code="code" />
      </Row>

      <!-- 底部按钮 -->
      <template class="ant-card-actions" #actions>
        <github-outlined key="setting" @click="redirect()" />
        <edit-outlined key="code" @click="showCode = !showCode" />
        <ellipsis-outlined
          key="ellipsis"
          @click="
            pattern.originArticle ? redirect(pattern.originArticle) : () => {}
          "
        />
      </template>
    </Card>
  </div>
</template>
