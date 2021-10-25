<script lang="ts" setup>
import PenelItem from "./PenelItem.vue";
import {
  GithubOutlined,
  PayCircleOutlined,
  LikeOutlined,
  SoundOutlined,
} from "@ant-design/icons-vue";
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
    bgcolor: "#2b982b",
  },
  {
    icon: SoundOutlined,
    text: "Messages",
    number: "81252",
    bgcolor: "#00b0e4",
  },
  {
    icon: PayCircleOutlined,
    text: "Purcases",
    number: "9000",
    bgcolor: "#ff9600",
  },
  {
    icon: LikeOutlined,
    text: "Goods",
    number: "13600",
    bgcolor: "#FF7875",
  },
];
</script>

<template>
  <a-row type="flex" justify="space-between" :gutter="[16, 16]">
    <a-col
      v-for="item in PanelList"
      :key="item"
      :xl="6"
      :md="12"
      :sm="12"
      :xs="12"
    >
      <PenelItem :item="item"></PenelItem>
    </a-col>
  </a-row>
</template>
