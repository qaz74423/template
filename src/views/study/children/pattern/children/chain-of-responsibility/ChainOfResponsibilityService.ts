import { message } from "ant-design-vue";
import { ref } from "vue";
import { PartternService } from "../../PartternService";
import { isFunction } from "@utils/is";
const { commenService } = PartternService();

export function ChainOfResponsibilityService() {
  function _Event() {
    class Middleware {
      private cache: Function[] | undefined;
      private middlewares: Function[] | undefined;
      private events: any | undefined;

      constructor() {
        this.cache = [];
        this.middlewares = [];
      }

      /**
       * @description 链式调用,注册中间件
       */
      use(...args: Function[]): Middleware {
        args.forEach((item) => {
          if (isFunction(item)) {
            this.cache?.push(item);
          }
        });

        return this;
      }

      /**
       * @description 每个中间件只有两个形参
       */
      next(params: any) {
        while (this.middlewares?.length) {
          const ware = this.middlewares.shift();
          // 什么写法？？
          ware?.call(this, params, this.next.bind(this));
        }
      }

      execute(params: any) {
        this.middlewares = this.cache?.map((fn) => fn); //copy
        this.next(params);
      }

      /**
       * @description 注册事件
       */
      on(name: string, callback: Function) {
        if (isFunction(callback)) {
          this.events[name] = callback;
        } else {
          throw "事件回调必须为函数";
        }
      }

      /**
       * @description 触发事件
       */
      emit(name: string, params: any[]) {
        if (this.events[name]) {
          let callback = this.events[name];
          callback.call(this, params);
        } else {
          throw "没有注册这个事件";
        }
      }
    }

    return {
      Middleware,
    };
  }

  const { code, showCode, redirect } = commenService(_Event);

  return {
    _Event,
    code,
    showCode,
    redirect,
  };
}
