<script lang="ts" setup>
import { Card } from "ant-design-vue";
import LineCharts from "./components/LineCharts.vue";
import PieCharts from "./components/PieCharts.vue";
</script>

<template>
  <div class="commen-charts">
    <Card class="chart-container" title="LineCharts">
      <LineCharts />
    </Card>
    <Card class="chart-container" title="PieCharts">
      <PieCharts />
    </Card>
  </div>
</template>

<style>
.chart-container {
  /* width: 100%; */
  /* height: 500px; */
  margin-bottom: 16px;
}
</style>
