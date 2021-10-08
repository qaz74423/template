<script setup lang="ts">
import ChartMaker from '../../../components/ChartMaker.vue';

const option = {
    xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {},
    series: [
        {
            data: [10, 22, 28, 23, 19],
            type: 'line',
            smooth: true
        }
    ]
};

</script>

<template>
    <ChartMaker :width="'100%'" :height="'500px'" :option="option" :theme="'dark'" />
</template>

<style lang="scss">
</style>