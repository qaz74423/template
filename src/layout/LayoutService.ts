import { onMounted, onUnmounted, inject, Ref } from "vue";

import { appService } from "../AppService";
import { hasAuth } from "../utils/auth";
import { useDebounceFn } from "@vueuse/core";

export function LayoutService() {
  // 发现服务
  const { showFooter, isTabs, isMob, collapsed, isLogin } =
    appService.serviceDiscovery();

  isLogin.value = hasAuth();

  const checkIsMobile = () => {
    const EnvMobWidth: number = parseInt(
      import.meta.env.VITE_MOBILE_WIDTH as string
    );
    if (document.body.clientWidth < EnvMobWidth) {
      isMob.value = true;
      // 当宽度过低时收起菜单
      collapsed.value = true;
    } else {
      isMob.value = false;
    }
  };

  //有问题，得改
  const checkIsMobileDebounce = useDebounceFn(checkIsMobile, 500);
  const addResizeFn = () => {
    checkIsMobileDebounce();
    window.addEventListener("resize", checkIsMobileDebounce);
  };
  const removeResizeFn = () => {
    window.removeEventListener("resize", checkIsMobileDebounce);
  };
  addResizeFn();
  onUnmounted(() => {
    removeResizeFn();
  });
  return {
    showFooter,
    isTabs,
    isMob,
    collapsed,
  };
}
