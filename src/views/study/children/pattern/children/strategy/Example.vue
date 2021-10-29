<script setup lang="ts">
import { Form, FormItem, Select, SelectOption, Input } from "ant-design-vue";
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
    <FormItem label="基础工资">
      <Input v-model:value="baseMoney" placeholder="baseMoney" />
    </FormItem>
    <FormItem label="等级">
      <Select v-model:value="level">
        <SelectOption value="S">S</SelectOption>
        <SelectOption value="A">A</SelectOption>
        <SelectOption value="B">B</SelectOption>
        <SelectOption value="C">C</SelectOption>
      </Select>
    </FormItem>
    <FormItem label="总工资">
      <Input disabled v-model:value="totalMoney" />
    </FormItem>
  </Form>
</template>
