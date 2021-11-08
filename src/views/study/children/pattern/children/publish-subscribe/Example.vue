<script lang="ts" setup>
import { Button, Row, message } from "ant-design-vue";
import { _Event } from "./Event";

const { addlisten, trigger, remove } = _Event();
// 示范
const fn = () => {
  message.success("发出去的消息体");
};
const publish = () => {
  addlisten("陈杰", fn);
  message.info("发出一条消息");
};
const receive = () => {
  trigger("陈杰");
};
const removeFn = () => {
  remove("陈杰", undefined);
};
</script>

<template>
  <Row justify="space-around">
    <Button @click="publish">发布信息</Button>
    <Button @click="receive">订阅消息</Button>
    <Button danger @click="removeFn">删除消息</Button>
  </Row>
</template>
