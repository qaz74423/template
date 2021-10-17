import { computed } from "vue";
import { useRoute, useRouter, RouteRecordRaw } from "vue-router";
export function breadcrumbService() {
  const route = useRoute();
  const router = useRouter();
  const breadcrumbs = computed(() => {
    return route.matched.map((item: RouteRecordRaw) => {
      if (item.path == "/")
        return {
          path: "/",
          name: "首页",
        };
      return item;
    });
  });
  const handerClick = (path: string) => {
    router.push(path);
  };
  return {
    breadcrumbs,
    handerClick,
  };
}
