<script lang="ts" setup>
import LineCharts from './components/LineCharts.vue';
import PieCharts from './components/PieCharts.vue';
</script>

<template>
    <div class="commen-charts">
        <a-card class="chart-container" title="LineCharts">
            <LineCharts />
        </a-card>
        <a-card class="chart-container" title="LineCharts">
            <PieCharts />
        </a-card>
    </div>
</template>

<style>
.chart-container {
    width: 100%;
    height: 500px;
    margin-bottom: 16px;
}
</style>