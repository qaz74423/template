<script setup lang="ts">
import { EmployeeRepository, Maybe } from "./Event";
import { Form, FormItem, Input, Button, message } from "ant-design-vue";
import { ref } from "vue-demi";

// 拿到repository
const repository = new EmployeeRepository();

// 核心方法
const getSupervisorName = (maybeEnteredId: Maybe<string>) =>
  maybeEnteredId
    .flatMap((employeeIdString) => Maybe.fromValue(parseInt(employeeIdString)))
    .flatMap((employeeId) => repository.findById(employeeId))
    .flatMap((employee) => employee.supervisorId)
    .flatMap((supervisorId) => repository.findById(supervisorId))
    .map((supervisor) => supervisor.name);

// 表单数据以及事件
const id = ref<string>("");
const findEmployeeButton = () => {
  const supervisorName = getSupervisorName(Maybe.fromValue(id.value));

  message.info(supervisorName.getOrElse("could not find"));
};
</script>

<template>
  <Form layout="inline">
    <FormItem label="employee ID">
      <Input v-model:value="id" />
    </FormItem>
    <FormItem>
      <Button @click="findEmployeeButton">Find supervisor`s name</Button>
    </FormItem>
  </Form>
</template>
