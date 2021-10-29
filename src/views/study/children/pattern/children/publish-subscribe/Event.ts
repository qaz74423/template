import { reactive } from "vue";

type fn = (...args: any[]) => any;
type ListTpe = { [key: string]: fn[] };
export function _Event() {
  let clientlist = reactive<ListTpe>({});
  // 增加订阅者
  const addlisten = (key: string, fn: fn) => {
    if (!clientlist[key]) {
      clientlist[key] = [];
    }
    clientlist[key].push(fn);
  };

  // 订阅消息
  const trigger = async (...args: any[]) => {
    let key = args.shift();
    const fns = clientlist[key];

    if (!fns || fns.length == 0) {
      return false;
    }

    for await (const fn of fns) {
      fn.apply(null, args);
    }
  };

  // 删除消息
  const remove = (key: string, fn?: fn) => {
    // 拿到引用
    let fns = clientlist[key];
    if (!fns) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      fns.forEach((item: fn) => {
        if (fn === item) fns.splice(fns.indexOf(fn), 1);
      });
    }
  };
  return {
    clientlist,
    addlisten,
    trigger,
    remove,
  };
}
