import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";
import { _Event } from "./Event";
import Example from "./Example.vue";
const PublishSubScribe: IPattern = {
  _Event,
  title: "发布-订阅模式",
  describe:
    "发布-订阅模式其实是一种对象间一对多的依赖关系，当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知。订阅者（Subscriber）把自己想订阅的事件注册（Subscribe）到调度中心（Event Channel），当发布者（Publisher）发布该事件（Publish Event）到调度中心，也就是该事件触发时，由调度中心统一调度（Fire Event）订阅者注册到调度中心的处理代码。",
  exampleComponent: Example,
  originArticle: "https://www.jianshu.com/p/d755909b85f8",
};
export function PublishSubscribeService() {
  basePanelService.serviceRigister(PublishSubScribe);
}
