<script lang="ts" setup>
import PenelItem from "./PenelItem.vue";
import { Row, Col } from "ant-design-vue";
import {
  GithubOutlined,
  PayCircleOutlined,
  LikeOutlined,
  SoundOutlined,
} from "@ant-design/icons-vue";

// 引入ref类型全局颜色样式---测试10.30
import { appService } from "@AppService";
const { color } = appService.serviceDiscovery();
type PenelType = {
  icon: any;
  text: string;
  number: string;
  bgcolor: string;
};
const PanelList: PenelType[] = [
  {
    icon: GithubOutlined,
    text: "New Visits",
    number: "122200",
    bgcolor: color.value.success,
  },
  {
    icon: SoundOutlined,
    text: "Messages",
    number: "81252",
    bgcolor: color.value.info,
  },
  {
    icon: PayCircleOutlined,
    text: "Purcases",
    number: "9000",
    bgcolor: color.value.warn,
  },
  {
    icon: LikeOutlined,
    text: "Goods",
    number: "13600",
    bgcolor: color.value.error,
  },
];
</script>

<template>
  <Row type="flex" justify="space-between" :gutter="[16, 16]">
    <Col
      v-for="item in PanelList"
      :key="item as any"
      :xl="6"
      :md="12"
      :sm="12"
      :xs="12"
    >
      <PenelItem :item="item"></PenelItem>
    </Col>
  </Row>
</template>
