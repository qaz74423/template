import * as echarts from "echarts";
import { ref, onUnmounted, watch } from "vue";

export function useECharts(option: echarts.EChartsCoreOption) {
  const chartRef = ref<HTMLDivElement | null>(null);

  let chartInstance: echarts.ECharts | null = null;

  const resizeHandler = () => chartInstance?.resize();

  const render = (dom: HTMLDivElement) => {
    chartInstance = echarts.init(dom);
    chartInstance.setOption(option);
    window.addEventListener("resize", resizeHandler);
  };

  onUnmounted(() => {
    window.removeEventListener("resize", resizeHandler);
  });

  watch(
    chartRef,
    (dom) => {
      render(dom!);
    },
    { flush: "post" }
  );

  return [chartRef] as const;
}
