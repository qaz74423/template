import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";
import { _Event } from "./Event";
import Example from "./Example.vue";
const chainOfResponsibility: IPattern = {
  _Event,
  title: "责任链模式",
  describe:
    "责任链（Chain of Responsibility）模式的定义：为了避免请求发送者与多个请求处理者耦合在一起，将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止。",
  exampleComponent: Example,
  originArticle: "https://zhuanlan.zhihu.com/p/163843181",
};
export function ChainOfResponsibilityService() {
  basePanelService.serviceRigister(chainOfResponsibility);
}
