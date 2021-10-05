<script lang="ts" setup>
import { onMounted, ref, Ref, PropType } from '@vue/runtime-core'
import { useECharts } from '../../../../../hooks/useEcharts';
import * as echarts from 'echarts'

const { height, width } = defineProps({
    height: {
        type: String as PropType<string>,
        default: '500px'
    },
    width: {
        type: String as PropType<string>,
        default: '100%'
    }
})

const chartRef = ref<HTMLDivElement | null>()
const option: echarts.EChartsCoreOption = {
    series: [
        {
            type: 'pie',
            data: [
                {
                    value: 335,
                    name: '直接访问'
                },
                {
                    value: 234,
                    name: '联盟广告'
                },
                {
                    value: 1548,
                    name: '搜索引擎'
                }
            ],
            radius: '50%'
        }
    ]
}

onMounted(() => {
    const { setOption } = useECharts(chartRef as Ref<HTMLDivElement>)
    setOption(option)
})
</script>

<template>
    <div ref="chartRef" :style="{ height, width }"></div>
</template>

<style lang="scss" scoped>
</style>