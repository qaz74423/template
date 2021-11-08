<script setup lang="ts">
import { Form, Select, Input } from "ant-design-vue";
import { ref, watch } from "vue";
import { _Event, strategyType } from "./Event";

const { calculateBonus } = _Event();

const baseMoney = ref(0);
const level = ref<strategyType>("C");
const totalMoney = ref(0);

watch(
  [baseMoney, level],
  ([b, l]) => {
    totalMoney.value = calculateBonus(l, b);
  },
  { flush: "post" }
);
</script>

<template>
  <Form layout="inline">
    <Form.Item label="基础工资">
      <Input v-model:value="baseMoney" placeholder="baseMoney" />
    </Form.Item>
    <Form.Item label="等级">
      <Select v-model:value="level">
        <Select.Option value="S">S</Select.Option>
        <Select.Option value="A">A</Select.Option>
        <Select.Option value="B">B</Select.Option>
        <Select.Option value="C">C</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item label="总工资">
      <Input disabled v-model:value="totalMoney" />
    </Form.Item>
  </Form>
</template>
