<script lang="ts" setup>
import ChartMaker from '../../../../../components/ChartMaker.vue';

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


</script>

<template>
    <ChartMaker :option="option" />
</template>

<style lang="scss" scoped>
</style>