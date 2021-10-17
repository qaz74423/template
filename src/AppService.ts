import { ref } from "vue";
import { createService } from "./hooks/soa";
type RouterFadeType = "fade-right" | "fade-left";
function AppService() {
  const collapsed = ref<boolean>(false);
  const isMob = ref<boolean>(false);
  const isTabs = ref<boolean>(true);
  const showFooter = ref<boolean>(false);
  const transition = ref<RouterFadeType>("fade-right");
  const isLogin = ref<boolean>(false);

  return {
    collapsed,
    isMob,
    isTabs,
    showFooter,
    transition,
    isLogin,
  };
}

export const appService = createService(AppService);
