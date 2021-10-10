<script setup lang="ts">

import * as echarts from 'echarts'
import { useECharts } from '../../../../../hooks/useEcharts';


const option: echarts.EChartsCoreOption = {
    title: {
        text: '饼图程序调用高亮示例',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' },
                { value: 2200, name: 'jc长官提供' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

const [chartRef] = useECharts(option)




</script>

<template>
    <div ref="chartRef" style="width: 100%;height: 500px;"></div>
</template>