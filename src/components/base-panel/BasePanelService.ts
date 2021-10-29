import { ref, Component } from "vue";
import { createService } from "@hooks/soa";

export interface IPattern {
  _Event: Function;
  code?: string;
  title: string;
  describe: string;
  originArticle?: string;
  exampleComponent?: Component;
}
function BasePanelService(pattern: IPattern) {
  // 代码字符串
  const code = pattern.code ? pattern.code : pattern._Event.toString();

  // 是否显示代码
  const showCode = ref(false);

  // 跳转---默认跳转github
  const redirect = (
    path: string = import.meta.env.VITE_GITHUB_PATH as string
  ) => {
    window.open(path, "_blank");
  };
  return {
    pattern,
    code,
    showCode,
    redirect,
  };
}

export const basePanelService = createService(BasePanelService);
