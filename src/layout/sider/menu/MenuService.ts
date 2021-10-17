import { useRouter, useRoute } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import { inject, computed, ComputedRef } from "vue";
// import { InjectIsLogin } from "../../../context";
import { appService } from "../../../AppService";
export function menuService() {
  const router = useRouter();
  const route = useRoute();
  // 是否登录
  const { isLogin } = appService.serviceDiscovery();
  // const isLogin = inject(InjectIsLogin);
  //   取所有菜单项路由
  const getAllMenuRouter = () =>
    router.options.routes.find((item: RouteRecordRaw) => item.name === "Layout")
      ?.children as RouteRecordRaw[];

  // 过滤路由
  const filter = (
    auth: boolean,
    routes: RouteRecordRaw[]
  ): RouteRecordRaw[] => {
    if (auth) return routes;
    else {
      return routes.filter((item: RouteRecordRaw) => !item.meta?.auth);
    }
  };

  // 处理路由地址加上‘/’
  const resolvePath = (path: Array<string>): string => {
    return path.map((item) => "/" + item).join("");
  };
  // 菜单点击事件
  const handleClick = ({ keyPath }: { key: string; keyPath: string[] }) => {
    router.push(resolvePath(keyPath));
  };

  //   根据权限获取路由
  const getFilterMenuRouter = () => filter(isLogin?.value!, getAllMenuRouter());

  // 被选菜单项
  // 用'/'截取，取最后一项route
  const selectedKeys: ComputedRef<string[]> = computed(() => {
    const path: string = route.path.split("/").pop() as string;
    return [path];
  });

  return {
    getFilterMenuRouter,
    handleClick,
    selectedKeys,
  };
}
