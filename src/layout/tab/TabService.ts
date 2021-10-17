import { useRoute, useRouter } from "vue-router";
import { ref, watch, computed, ComputedRef } from "vue";
export interface TabType {
  path: string;
  title: string;
}

export function useTab() {
  const route = useRoute();
  const router = useRouter();

  const tabs = ref<TabType[]>([]);

  const onEdit = (targetKey: string, action: string) => {
    if (action === "remove") {
      removeTab(targetKey);
    }
  };

  const tabChange = (activeKey: string) => {
    router.push(activeKey);
  };

  const addTab = () => {
    if (!tabs.value.find((tab: TabType) => tab.path == route.path))
      tabs.value.push({
        path: route.path,
        title: route.meta.title as string,
      });
  };

  const removeTab = (tab: string) => {
    tabs.value = tabs.value.filter((item: TabType) => tab != item.path);
  };
  //   第二版
  const activeKey: ComputedRef<string> = computed(() => route.path);

  watch(
    () => route.path,
    () => addTab(),
    { immediate: true }
  );

  //   第一版

  //   const activeKey = ref(route.path);
  //   watch(
  //     () => route.path,
  //     () => {
  //       addTabs();
  //       activeKey.value = route.path;
  //     },
  //     { immediate: true }
  //   );

  return {
    tabs,
    activeKey,
    onEdit,
    tabChange,
  };
}
