import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";
import { _Event } from "./Event";
import Example from "./Example.vue";
const factory: IPattern = {
  _Event,
  title: "工厂模式",
  describe:
    "工厂方法模式是对简单工厂的进一步优化， 在工厂方法模式中，我们不再提供一个统一的工厂类来创建所有的对象，而是针对不同的对象提供不同的工厂。也就是说每个对象都有一个与之对应的工厂。说的好像挺复杂，简单来说就是解决简单工厂模式存在不方便添加新的类的问题，因为添加新的类以后依然需要修改工厂函数。",
  exampleComponent: Example,
};
export function FactoryService() {
  basePanelService.serviceRigister(factory);
}
