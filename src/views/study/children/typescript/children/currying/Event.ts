export function _Event() {
  const testFn = (a: number, b: number) => {
    return a + b;
  };
  // 第一种
  const currying1 = (fn: Function, arr: any[] = []) => {
    return (...args: any) => {
      // 判断参数总数是否和fn参数个数相等
      if ([...arr, ...args].length === fn.length) {
        return fn(...arr, ...args);
      } else {
        return currying1(fn, [...arr, ...args]);
      }
    };
  };

  // 第二种
  type Func<T, U> = T extends any[] ? (...args: T) => U : (arg: T) => U;
  type AnyFunc = Func<any[], any>;
  type Argc<T extends AnyFunc> = T extends (...args: infer R) => any
    ? R["length"]
    : never;
  type isTuple<T extends { length: number }> = T["length"] extends number
    ? number extends T["length"]
      ? false
      : true
    : true;
  type Curry<T extends AnyFunc> = Argc<T> extends 1 ? T : Funcs<T>;
  type Funcs<T extends AnyFunc> = T extends (
    ...args: [infer F, ...infer R]
  ) => infer U
    ? (arg: F) => Curry<Func<R, U>>
    : never;
  type Args<T extends AnyFunc> = T extends (...args: infer U) => any
    ? U
    : never;

  function currying2<T extends AnyFunc>(
    fn: T,
    context: any = null
  ): isTuple<Args<T>> extends true ? Curry<T> : never {
    const curried: any = function (this: any, ...t: any[]) {
      if (t.length >= fn.length) {
        return context ? fn.call(context, ...t) : fn(...t);
      }
      return curried.bind(null, ...t);
    };
    return curried;
  }

  return {
    testFn,
    currying1,
    currying2,
  };
}
