<script lang="ts" setup>
import ChartMaker from '../../../../../components/ChartMaker.vue';


const option: echarts.EChartsCoreOption = {
    xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {},
    series: [
        {
            data: [10, 22, 28, 23, 19],
            type: 'line',
            smooth: true,
            color: [
                '#c23531',

            ]
        },
        {
            data: [20, 15, 20, 23, 15],
            type: 'line',
            smooth: true,
            color: [

                '#61a0a8',

            ]
        },

    ],


};

</script>

<template>
    <ChartMaker :option="option" />
</template>

<style lang="scss" scoped>
</style>