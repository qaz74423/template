import { createService } from "@hooks/soa";
import { FireOutlined } from "@ant-design/icons-vue";
import { Component, computed, FunctionalComponent, ref, watch } from "vue-demi";
import { AntdIconProps } from "@ant-design/icons-vue/lib/components/AntdIcon";

export interface IPattern {
  icon: FunctionalComponent<AntdIconProps> | null;
  width: string;
  title: string;
  pattern: string;
  component: Component | null;
  handler: ((...args: any) => void) | ((...payload: any[]) => void);
}
const INIT_PATTERN = "INIT";
/**
 *
 * @param patternsMap
 * @param initHandler
 */
function PatternMatchService(
  patternsMap: Map<string, IPattern>,
  initHandler: () => void
) {
  patternsMap.set(INIT_PATTERN, {
    icon: FireOutlined,
    width: "30%",
    title: "模式匹配服务",
    pattern: INIT_PATTERN,
    component: null,
    handler: () => {},
  });

  const visible = ref(false);
  const loading = ref(false);
  const pattern = ref(INIT_PATTERN);
  const currentPattern = computed(() => patternsMap.get(pattern.value));

  watch(visible, (v) => {
    if (v) return;

    pattern.value = INIT_PATTERN;
    initHandler();
  });

  return {
    loading,
    visible,
    pattern,
    currentPattern,
  };
}

export const patternMatchService = createService(PatternMatchService);
