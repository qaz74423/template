import { useRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { hasAuth } from "../utils/auth";
export function useMenu() {
  const router = useRouter();

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
  const resolvePath = (path: Array<string>): string =>
    path.map((item) => "/" + item).join("");

  // 菜单点击事件
  const handleClick = ({ keyPath }: { key: string; keyPath: string[] }) => {
    router.push(resolvePath(keyPath));
  };

  //   根据权限获取路由
  const getFilterMenuRouter = () => filter(hasAuth(), getAllMenuRouter());

  return {
    getFilterMenuRouter,
    handleClick,
  };
}
