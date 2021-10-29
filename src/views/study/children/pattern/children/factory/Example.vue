<script setup lang="ts">
import { ref } from "vue";
import { Form, FormItem, Input, Button } from "ant-design-vue";
import { _Event } from "./Event";

//例子
const { Pet } = _Event();
const type = ref("");
const name = ref("");
const buy = () => {
  new Pet(type.value, name.value);
};
</script>
<template>
  <Form layout="inline">
    <FormItem>
      <Input v-model:value="type" placeholder="输入宠物类型(dog,duck,cat)" />
    </FormItem>
    <FormItem>
      <Input v-model:value="name" placeholder="输入宠物名字" />
    </FormItem>
    <FormItem>
      <Button @click="buy">购买</Button>
    </FormItem>
  </Form>
</template>
