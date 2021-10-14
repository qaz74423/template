import { useRouter, useRoute } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import { inject, watch } from "vue";
import { InjectIsLogin } from "../context";
export function useMenu() {
  const router = useRouter();
  const route = useRoute();
  // 是否登录
  const isLogin = inject(InjectIsLogin);
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

  // 处理路由地址
  const resolvePath = (path: Array<string>): string => {
    return path.map((item) => "/" + item).join("");
  };
  // 菜单点击事件
  const handleClick = ({ keyPath }: { key: string; keyPath: string[] }) => {
    router.push(resolvePath(keyPath));
  };
  //

  //   根据权限获取路由
  const getFilterMenuRouter = () => filter(isLogin?.value!, getAllMenuRouter());

  return {
    getFilterMenuRouter,
    handleClick,
  };
}
