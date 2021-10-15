import * as echarts from "echarts";
import { ref, onUnmounted, watch } from "vue";
import { useDebounceFn } from "@vueuse/core";
export function useECharts(option: echarts.EChartsCoreOption) {
  const chartRef = ref<HTMLDivElement | null>(null);

  let chartInstance: echarts.ECharts | null = null;

  const resizeHandler = () => chartInstance?.resize();
  // 防抖函数
  const resizeHandlerDebounce = useDebounceFn(resizeHandler, 500);
  const render = (dom: HTMLDivElement) => {
    chartInstance = echarts.init(dom);
    chartInstance.setOption(option);
    window.addEventListener("resize", resizeHandlerDebounce);
  };

  onUnmounted(() => {
    window.removeEventListener("resize", resizeHandlerDebounce);
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
