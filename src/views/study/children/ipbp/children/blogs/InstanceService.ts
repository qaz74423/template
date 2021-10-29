import {
  IPattern,
  patternMatchService,
} from "../../shared/pattern-match/PatternMatchService";
import { createService } from "@hooks/soa";
import InstanceSchema from "./InstanceSchema.vue";
import { EditOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { recordsService } from "./RecordsService";
import { instanceSchemaService } from "./InstanceSchemaService";
import { editRecords } from "./Apis";
import { renderMessage } from "@utils/renderHelper";
import { Record } from "./Shared";
function InstanceService() {
  const patternsMap = new Map<string, IPattern>();
  patternsMap.set("CREATE", {
    icon: PlusOutlined,
    width: "30%",
    title: "新增",
    pattern: "CREATE",
    component: InstanceSchema,
    handler: handleCreate,
  });

  patternsMap.set("UPDATE", {
    icon: EditOutlined,
    width: "30%",
    title: "编辑",
    pattern: "UPDATE",
    component: InstanceSchema,
    handler: handleUpdate,
  });

  const { request } = recordsService.serviceDiscovery();
  // 把instanceSchemaService注入
  const { record, validate, resetFields } =
    instanceSchemaService.serviceRigister();
  // 这边把patternMatchService注入
  const { loading, visible, pattern } = patternMatchService.serviceRigister(
    patternsMap,
    handleInit
  );

  function handleInit() {
    resetFields();
  }

  function handleFinally() {
    request();
    handleInit();
    visible.value = false;
    loading.value = false;
  }

  //真正新增的事件
  async function handleCreate() {
    try {
      loading.value = true;
      //我的接口问题，先把id删除,才可以新增
      delete record.value.id;
      const { msg, code } = await editRecords(record.value);
      renderMessage(code, msg);
    } catch (error) {
      renderMessage("error", JSON.stringify(error));
    } finally {
      handleFinally();
    }
  }

  // 弹出侧边抽屉的事件
  const handleCreateBefore = () => {
    visible.value = true;
    pattern.value = "CREATE";
  };

  // 真正更新的事件
  async function handleUpdate() {
    try {
      await validate();
    } catch (error) {
      return;
    }

    try {
      loading.value = true;
      const { msg, code } = await editRecords(record.value);
      renderMessage(code, msg);
    } catch (error) {
      renderMessage("error", JSON.stringify(error));
    } finally {
      handleFinally();
    }
  }

  // 弹出侧边抽屉的事件
  const handleUpdateBefore = (r: Record) => {
    record.value = { ...r };
    // 处理不必要传的属性,应该是我的后端有问题，处理不了时间类型
    delete record.value.created;
    //------------------
    visible.value = true;
    pattern.value = "UPDATE";
  };

  return {
    handleUpdateBefore,
    handleCreateBefore,
  };
}

export const instanceService = createService(InstanceService);
