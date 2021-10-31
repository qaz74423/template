import { ref } from "vue";
import { createService } from "./hooks/soa";
type RouterFadeType = "fade-right" | "fade-left";
/**
 * @description 注册全局变量的地方
 */
function AppService() {
  // 是否折叠
  const collapsed = ref<boolean>(false);
  // 是否是手机样式
  const isMob = ref<boolean>(false);
  // 是否展示tabs
  const isTabs = ref<boolean>(true);
  // 是否展示footer
  const showFooter = ref<boolean>(false);
  // 路由过度样式
  const transition = ref<RouterFadeType>("fade-right");
  // 是否登录
  const isLogin = ref<boolean>(false);

  // 10.30新增动态颜色样式--测试
  const color = ref({
    primary: "#3b94f3",
    success: "#2b982b",
    info: "#00b0e4",
    warn: "#ff9600",
    error: "#ff7875",
    sider: "#001529",
  });

  // 10.31新增动态主题--测试
  const theme = ref<"dark" | "light">("dark");

  return {
    collapsed,
    isMob,
    isTabs,
    showFooter,
    transition,
    isLogin,
    // --10.30
    color,
    theme,
  };
}
export const appService = createService(AppService);
