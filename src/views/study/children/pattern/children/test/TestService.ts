import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";
const _Event = () => {};
const testParam: IPattern = {
  _Event,
  code: "123123",
  title: "测试title",
  describe: "测试describe",
  originArticle: "123456",
};

export function TestService() {
  // 服务注册
  basePanelService.serviceRigister(testParam);
}
