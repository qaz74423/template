import { onMounted, onUnmounted, inject, Ref } from "vue";
import {
  InjectCollapsed,
  InjectIsMob,
  InjectIsTabs,
  InjectShowFooter,
  InjectIsLogin,
} from "../context";
import { hasAuth } from "../utils/auth";
import { useDebounceFn } from "@vueuse/core";
export function useLayout() {
  const showFooter = inject(InjectShowFooter) as Ref<boolean>;
  const isTabs = inject(InjectIsTabs) as Ref<boolean>;
  const isMob = inject(InjectIsMob) as Ref<boolean>;
  const collapsed = inject(InjectCollapsed) as Ref<boolean>;
  // 每次进Lauout取一次登录状态
  const isLogin = inject(InjectIsLogin) as Ref<boolean>;
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
  const checkIsMobileDebounce = useDebounceFn(checkIsMobile, 500);
  const addResizeFn = () => {
    window.addEventListener("resize", checkIsMobileDebounce);
  };
  const removeResizeFn = () => {
    window.removeEventListener("resize", checkIsMobileDebounce);
  };
  onMounted(() => {
    addResizeFn();
  });
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
