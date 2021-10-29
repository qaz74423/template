import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";
import Example from "./Example.vue";
import { _Event } from "./Event";
const SingleTon: IPattern = {
  _Event,
  title: "单例",
  describe: "单例模式:构造函数每次创建对象,只有一个被创建.",
  exampleComponent: Example,
};
export function SingletonService() {
  // 只需要注册Service
  basePanelService.serviceRigister(SingleTon);
}
