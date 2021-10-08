import * as echarts from "echarts";
import { Ref, unref } from "vue";
import { useDebounceFn } from "@vueuse/core";

export function useECharts(
  elRef: Ref<HTMLDivElement>,
  theme: "light" | "dark" | "default" = "default"
) {
  let chartInstance: echarts.ECharts | null = null;
  let resize = () => {
    chartInstance?.resize();
  };

  // 防抖
  resize = useDebounceFn(resize, 200);

  const addResize = () => {
    window.addEventListener("resize", resize);
  };
  const removeResize = () => {
    window.removeEventListener("resize", resize);
  };

  const initCharts = () => {
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }
    chartInstance = echarts.init(el, theme);
    addResize();
  };

  const getInstance = (): echarts.ECharts | null => {
    if (!chartInstance) {
      initCharts();
    }
    return chartInstance;
  };

  const setOption = (option: echarts.EChartsCoreOption): void => {
    if (!chartInstance) {
      initCharts();
    }
    chartInstance?.setOption(option);
  };

  return {
    getInstance,
    setOption,
    removeResize,
  };
}
