<script setup lang="ts">
import { ref } from "vue";
import { Form, Input, Button } from "ant-design-vue";
import { _Event } from "./Event";

//例子
const { Pet } = _Event();
const type = ref("");
const name = ref("");
const buy = () => {
  new Pet(type.value as any, name.value);
};
</script>
<template>
  <Form layout="inline">
    <Form.Item>
      <Input v-model:value="type" placeholder="输入宠物类型(dog,duck,cat)" />
    </Form.Item>
    <Form.Item>
      <Input v-model:value="name" placeholder="输入宠物名字" />
    </Form.Item>
    <Form.Item>
      <Button @click="buy">购买</Button>
    </Form.Item>
  </Form>
</template>
