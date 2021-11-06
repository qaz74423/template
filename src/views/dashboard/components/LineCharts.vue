<script setup lang="ts">
import ChartMaker from "../../../components/ChartMaker.vue";

const option = {
  xAxis: {
    data: ["A", "B", "C", "D", "E"],
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: "line",
      smooth: true,
    },
  ],
};
</script>

<template>
  <ChartMaker
    class="chart"
    :width="'100%'"
    :height="'500px'"
    :option="option"
    :theme="'dark'"
    :background-color="'white'"
  />
</template>

<style lang="scss" scoped>
.chart {
  box-shadow: 0 8px 10px rgba(49, 8, 8, 0.1);
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
  }
}
</style>
