import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";
import { _Event } from "./Event";
const obj: IPattern = {
  _Event,
  title: "函数柯里化",
  describe:
    "柯里化，英语：Currying，是把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术。",
  originArticle: "https://www.jianshu.com/p/c87242cd2f6c",
};
export function CurryingService() {
  basePanelService.serviceRigister(obj);
}
