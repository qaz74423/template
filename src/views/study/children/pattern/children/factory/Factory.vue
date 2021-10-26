<script lang="ts" setup>
import {
  Card,
  CardMeta,
  Row,
  Divider,
  Input,
  Button,
  Form,
  FormItem,
} from "ant-design-vue";
import { FactoryService } from "./FactoryService";
import {
  GithubOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import HighLightMaker from "@components/HighLightMaker.vue";
import { ref } from "vue-demi";
const { _Event, showCode, code, redirect } = FactoryService();
const { Pet } = _Event();

const type = ref("");
const name = ref("");

const buy = () => {
  new Pet(type.value, name.value);
};
</script>

<template>
  <div>
    <Card>
      <CardMeta
        title="工厂模式"
        description="工厂方法模式是对简单工厂的进一步优化， 在工厂方法模式中，我们不再提供一个统一的工厂类来创建所有的对象，而是针对不同的对象提供不同的工厂。也就是说每个对象都有一个与之对应的工厂。说的好像挺复杂，简单来说就是解决简单工厂模式存在不方便添加新的类的问题，因为添加新的类以后依然需要修改工厂函数。"
      />

      <Form style="margin: 20px 0" layout="inline">
        <FormItem>
          <Input
            v-model:value="type"
            placeholder="输入宠物类型(dog,duck,cat)"
          />
        </FormItem>
        <FormItem>
          <Input v-model:value="name" placeholder="输入宠物名字" />
        </FormItem>
        <FormItem>
          <Button @click="buy">购买</Button>
        </FormItem>
      </Form>

      <Row v-show="showCode" style="transition: all 1s">
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
