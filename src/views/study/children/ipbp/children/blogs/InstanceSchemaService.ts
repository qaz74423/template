import { ref } from "vue";

import { Record, RecordClass } from "./Shared";
import { useForm } from "ant-design-vue/lib/form";
import { createService } from "@hooks/soa";
type TRule<T> = { [key in keyof T]?: any[] };
function InstanceSchemaService() {
  const rules = ref<TRule<Record>>({
    title: [{ required: true, whitespace: true, message: "必须填" }],
    description: [{ required: true, whitespace: true, message: "必须填" }],
    content: [{ required: true, whitespace: true, message: "必须填" }],
  });

  // 可能是接口没多例导致新增有bug
  const record = ref<Record>(new RecordClass());
  console.log(record.value);

  const { validate, validateInfos, resetFields } = useForm(record, rules);

  return {
    rules,
    record,
    validateInfos,

    validate,
    resetFields,
  };
}

export const instanceSchemaService = createService(InstanceSchemaService);
