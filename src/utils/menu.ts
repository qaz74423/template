// 取所有菜单路由
import { useRouter, RouteRecordRaw } from "vue-router";

const router = useRouter();

// 取所有菜单路由
export const getAllMenuRoutes = () =>
  router.options.routes.find((item: RouteRecordRaw) => item.name === "Layout")
    ?.children;

// 路由过滤
export const getFilterMenuRouter = (
  auth: boolean,
  routes: RouteRecordRaw[]
): RouteRecordRaw[] => {
  if (auth) return routes;
  else {
    return routes.filter((item: RouteRecordRaw) => !item.meta?.auth);
  }
};
