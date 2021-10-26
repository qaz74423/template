<script lang="ts" setup>
import {
  Card,
  CardMeta,
  Row,
  Divider,
  Input,
  Select,
  SelectOption,
  Form,
  FormItem,
} from "ant-design-vue";
import { StrategyService, strategyType } from "./StrategyService";
import HighLightMaker from "@components/HighLightMaker.vue";
import {
  GithubOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import { ref, watch } from "vue-demi";

const { _Event, code, showCode, redirect } = StrategyService();
const { strategies, calculateBonus } = _Event();

const baseMoney = ref(0);
const level = ref<strategyType>("C");
const totalMoney = ref(0);

watch(
  [baseMoney, level],
  ([b, l]) => {
    console.log(b, l);

    totalMoney.value = calculateBonus(l, b);
  },
  { flush: "post" }
);
</script>

<template>
  <div>
    <Card>
      <CardMeta
        title="策略模式"
        description="该模式定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的变化不会影响使用算法的客户。策略模式属于对象行为模式，它通过对算法进行封装，把使用算法的责任和算法的实现分割开来，并委派给不同的对象对这些算法进行管理。"
      >
      </CardMeta>

      <Form style="margin: 20px 0" layout="inline">
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

      <Row v-if="showCode">
        <Divider />
        <HighLightMaker :code="code" />
      </Row>

      <template class="ant-card-actions" #actions>
        <github-outlined key="setting" @click="redirect()" />
        <edit-outlined key="code" @click="showCode = !showCode" />
        <ellipsis-outlined key="ellipsis" />
      </template>
    </Card>
  </div>
</template>

<style scoped lang="scss"></style>
