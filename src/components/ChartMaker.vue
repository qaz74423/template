<script lang="ts" setup>
import { onMounted, onUnmounted, ref, Ref, PropType } from '@vue/runtime-core'
import * as echarts from 'echarts'
import { useECharts } from '../hooks/useECharts'
const { width, height, option, theme } = defineProps({
    height: {
        type: String,
        default: '300px'
    },
    width: {
        type: String,
        default: '100%'
    },
    option: {
        type: Object as PropType<echarts.EChartsCoreOption>,
        default: {}
    },
    theme: {
        type: String as PropType<"light" | "dark" | "default">,
        default: 'default'
    }
})
const [chartRef] = useECharts(option)
</script>

<template>
    <div ref="chartRef" :style="{ height, width }" />
</template>

<style lang="scss" scoped>
</style>