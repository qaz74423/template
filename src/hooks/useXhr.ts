import { ref, Ref } from "vue-demi";

export function useXhr<T>(
  adapter: () => Promise<T>,
  bindingValue: T,
  immediate = true
) {
  const ready = ref(false);
  const error = ref<Error>();
  const result = ref<T>(bindingValue) as Ref<T>;

  const execute = async () => {
    try {
      ready.value = true;
      const promiseResult = await adapter();

      result.value = promiseResult;
    } catch (e) {
      error.value = e as Error;
    } finally {
      ready.value = false;
    }
  };

  if (immediate) execute();

  return [execute, result, ready, { error }] as const;
}
