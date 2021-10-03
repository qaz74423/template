<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import * as echarts from 'echarts'

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

onMounted(() => {
    const charts = echarts.init(document.getElementById('echarts')!)
    charts.setOption(option)
    window.onresize = function () {
        charts.resize();
    };
})

</script>

<template>
    <div class="wrap">
        <div id="echarts"></div>
    </div>
</template>

<style lang="scss">
.wrap {
    background-color: #fff;
    height: 500px;
    #echarts {
        height: 100%;
    }
}
</style>