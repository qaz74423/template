import { message } from "ant-design-vue";
import { PartternService } from "../../PartternService";
const { commenService } = PartternService();
export function ProxyService() {
  function _Event() {
    const sendFile = (files: any) => {
      message.success(files + "send success");
    };

    const proxySendFile = (() => {
      const caches: any[] = [];
      let timer: number | undefined;

      return (file: any, wait: number) => {
        caches.push(file);
        if (timer) return;

        timer = setTimeout(() => {
          sendFile(caches);
          clearInterval(timer);
          timer = undefined;
          caches.length = 0;
        }, wait) as any;
      };
    })();

    return {
      sendFile,
      proxySendFile,
    };
  }
  const { code, showCode, redirect } = commenService(_Event);

  return {
    _Event,
    code,
    showCode,
    redirect,
  };
}
