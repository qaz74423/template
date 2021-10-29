import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";
import { _Event } from "./Event";
import Example from "./Example.vue";
const observer: IPattern = {
  _Event,
  title: "观察者模式",
  describe:
    "观察者模式就是一对多事件，当事件发生的时候通知到多个观察者，所有观察者进行对应的更新操作update执行事件操作。",
  exampleComponent: Example,
};
export function ObserverService() {
  basePanelService.serviceRigister(observer);
}
