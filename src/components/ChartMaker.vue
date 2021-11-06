<script lang="ts" setup>
import { onMounted, onUnmounted, ref, Ref, PropType } from "@vue/runtime-core";
import * as echarts from "echarts";
import { useECharts } from "../hooks/useECharts";

const { height, width, theme, backgroundColor, option } = defineProps({
  height: {
    type: String,
    default: "300px",
  },
  width: {
    type: String,
    default: "100%",
  },
  option: {
    type: Object as PropType<echarts.EChartsCoreOption>,
    default: {},
  },
  theme: {
    type: String as PropType<"light" | "dark" | "default">,
    default: "default",
  },
  backgroundColor: {
    type: String,
    default: "transparent",
  },
});

const [chartRef] = useECharts(option);
</script>

<template>
  <div ref="chartRef" :style="{ height, width, backgroundColor }"></div>
</template>

<style lang="scss" scoped></style>
