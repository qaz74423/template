import { ref } from "vue";

export function PartternService() {
  function commenService(_Event: Function) {
    // 代码字符串
    const code = _Event.toString();

    // 是否显示代码
    const showCode = ref(false);

    // 跳转github
    const redirect = (
      path: string = import.meta.env.VITE_GITHUB_PATH as string
    ) => {
      window.open(path, "_blank");
    };
    return {
      _Event,
      code,
      showCode,
      redirect,
    };
  }

  return {
    commenService,
  };
}