import { computed, ref, Ref } from "vue";

export function useStoreKeeper<T>() {
  // 仓库
  const store = ref<T[]>([]) as Ref<T[]>;

  // 库存
  const stockSize = computed(() => store.value.length);

  // 有无库存
  const hasStocks = computed(() => Boolean(stockSize.value));

  return { store, stockSize, hasStocks };
}
