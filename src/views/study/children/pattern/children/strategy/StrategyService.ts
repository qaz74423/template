import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";
import Example from "./Example.vue";
import { _Event } from "./Event";

const strategy: IPattern = {
  _Event,
  title: "策略模式",
  describe:
    "在策略模式（Strategy Pattern）中，一个类的行为或其算法可以在运行时更改。这种类型的设计模式属于行为型模式。在策略模式中，我们创建表示各种策略的对象和一个行为随着策略对象改变而改变的 context 对象。策略对象改变 context 对象的执行算法。",
  exampleComponent: Example,
};

export function StrategyService() {
  // 注册Service实例
  basePanelService.serviceRigister(strategy);
}
