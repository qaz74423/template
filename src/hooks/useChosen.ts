import { reactive } from "vue-demi";
import { useStoreKeeper } from "./useStoreKeeper";

export function useChosen<T = number>() {
  //init
  const { store, stockSize, hasStocks } = useStoreKeeper<T>();

  // change handler
  const handlerChange = (selectedKey: T[]) => {
    store.value = selectedKey;
    return store.value;
  };

  //aggregation
  const rowSelection = reactive({
    onChange: handlerChange,
    selectedRowKeys: store,
  });

  return { store, stockSize, hasStocks, rowSelection };
}
