<script setup lang="ts">
import { Button, Row, message } from "ant-design-vue";
import { _Event } from "./Event";
const { Subject, Observer } = _Event();

const subject = new Subject();
const createObsercer = (name: string) => {
  new Observer(name, subject);
  message.success(name + " 生成");
};
const updateState = () => {
  subject.setState((subject.getState() as number) + 1);
};
</script>
<template>
  <Row justify="space-around">
    <Button @click="createObsercer('observer1')">生成观察者1</Button>
    <Button @click="createObsercer('observer2')">生成观察者2</Button>
    <Button @click="updateState">改变状态</Button>
  </Row>
</template>
