<script setup lang="ts">
import ChartMaker from '../../../../../components/ChartMaker.vue';
import * as echarts from 'echarts'
import { useECharts } from '../../../../../hooks/useEcharts';
import { ref, Ref, onMounted, onUnmounted } from 'vue';

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
const chartRef = ref<HTMLDivElement | null>(null)

let listenerArray: Array<() => void> = [];

onMounted(() => {
    const { getInstance, removeResize } = useECharts(chartRef as Ref<HTMLDivElement>)
    const myChart = getInstance()
    myChart?.setOption(option)
    let currentIndex = -1;
    const ser = setInterval(function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart?.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen;
        // 高亮当前图形
        myChart?.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
        // 显示 tooltip
        myChart?.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
    }, 1000);
    const removeSer = () => {
        clearInterval(ser)
    }
    listenerArray.push(removeResize)
    listenerArray.push(removeSer)
})
onUnmounted(() => {
    listenerArray.map((item: () => void) => { item() })
})

</script>

<template>
    <div ref="chartRef" style="width: 100%;height: 500px;"></div>
</template>