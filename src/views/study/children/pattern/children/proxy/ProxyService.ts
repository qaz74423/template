import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";
import { _Event } from "./Event";
import Example from "./Example.vue";
const proxy: IPattern = {
  _Event,
  title: "代理模式",
  describe:
    "代理模式给某一个对象提供一个代理对象，并由代理对象控制对原对象的引用。通俗的来讲代理模式就是我们生活中常见的中介。",
  exampleComponent: Example,
};
export function ProxyService() {
  basePanelService.serviceRigister(proxy);
}
