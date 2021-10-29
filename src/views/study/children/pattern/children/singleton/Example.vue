<script setup lang="ts">
import { Row, Button, message } from "ant-design-vue";
import { _Event } from "./Event";
const { Singleton1 } = _Event();
const create = (name: string) => {
  const instance = new Singleton1(name);
  message.success("生成实例为" + instance.getName());
};
const remove = () => {
  message.warning(Singleton1.instance?.getName() + "实例销毁!");
  Singleton1.removeInstance();
};
</script>

<template>
  <Row justify="space-around">
    <Button @click="create('小红')">生成实例小红</Button>
    <Button @click="create('小明')">生成实例小明</Button>
    <Button @click="remove">销毁实例</Button>
  </Row>
</template>
