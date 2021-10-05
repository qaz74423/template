<script lang="ts" setup>
import { onMounted, onUnmounted, ref, Ref } from '@vue/runtime-core'
import * as echarts from 'echarts'
import { useECharts } from '../../../../../hooks/useEcharts';

const { width, height } = defineProps({

    height: {
        type: String,
        default: '300px'
    },
    width: {
        type: String,
        default: '100%'
    }
})

const chartRef = ref<HTMLDivElement | null>(null);

const option: echarts.EChartsCoreOption = {
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
let removeListener: any = null
onMounted(() => {
    const { setOption, removeResize } = useECharts(chartRef as Ref<HTMLDivElement>)
    removeListener = removeResize
    setOption(option)
})
onUnmounted(() => {
    removeListener()
})
</script>

<template>
    <div ref="chartRef" :style="{ height, width }" />
</template>

<style lang="scss" scoped>
</style>