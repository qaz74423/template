import { useRouter, useRoute } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { cloneDeep } from "lodash";

import { computed, ComputedRef } from "vue";
import { appService } from "../../../AppService";
export function menuService() {
  const router = useRouter();
  const route = useRoute();
  // 是否登录
  const { isLogin, color, theme } = appService.serviceDiscovery();

  //   取所有菜单项路由
  const getAllMenuRouter = (): RouteRecordRaw[] => {
    const cache = router.options.routes.find(
      (item: RouteRecordRaw) => item.name === "Layout"
    )?.children as RouteRecordRaw[];

    // 返回一个通用深拷贝的router，暂时解决问题
    return cloneDeep(cache);
  };

  // 过滤路由
  // const filter = (
  //   auth: boolean,
  //   routes: RouteRecordRaw[]
  // ): RouteRecordRaw[] => {
  //   if (auth) return routes;
  //   else {
  //     return routes.filter((item: RouteRecordRaw) => !item.meta?.auth);
  //   }
  // };

  // foreach的异步问题！！！！！！！
  //存在引用值的问题,好像把过滤前的数组给改变了
  const filter = (routes: RouteRecordRaw[]): void => {
    for (const route of routes) {
      if (route.meta?.auth) {
        routes.splice(routes.indexOf(route), 1);
        // console.log(routes.indexOf(route));
      }
      if (route.children) {
        filter(route.children);
      }
    }
  };

  const getMenuRouter = () => {
    const r = getAllMenuRouter();
    if (!isLogin.value) {
      filter(r);
    } else {
    }

    return r;
  };

  // 处理路由地址加上‘/’
  const resolvePath = (path: Array<string>): string => {
    return path.map((item) => "/" + item).join("");
  };

  // 菜单点击事件
  const handleClick = ({ keyPath }: { key: string; keyPath: string[] }) => {
    router.push(resolvePath(keyPath));
  };

  // 被选菜单项
  // 用'/'截取，取最后一项route
  const selectedKeys: ComputedRef<string[]> = computed(() => {
    const path: string = route.path.split("/").pop() as string;
    return [path];
  });

  return {
    getMenuRouter,

    handleClick,
    selectedKeys,

    // --
    color,
    theme,
  };
}
