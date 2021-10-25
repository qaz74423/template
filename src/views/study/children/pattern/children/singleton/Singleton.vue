<script lang="ts" setup>
import { Card, CardMeta, Row, Divider, Button, message } from "ant-design-vue";
import { SingletonService } from "./SingletonService";
import {
  GithubOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import HighLightMaker from "@components/HighLightMaker.vue";
const { _Event, showCode, code, redirect } = SingletonService();
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
  <div>
    <Card>
      <CardMeta
        title="单例模式"
        description="单例模式：限制类实例化次数只能一次，一个类只有一个实例，并提供一个访问它的全局访问点。"
      />

      <Row justify="space-around" style="margin: 20px 0">
        <Button @click="create('小红')">生成实例小红</Button>
        <Button @click="create('小明')">生成实例小明</Button>
        <Button @click="remove">销毁实例</Button>
      </Row>

      <Row v-show="showCode" style="transition: all 1s">
        <Divider />
        <HighLightMaker :code="code" />
      </Row>

      <template class="ant-card-actions" #actions>
        <github-outlined key="setting" @click="redirect" />
        <edit-outlined key="code" @click="showCode = !showCode" />
        <ellipsis-outlined key="ellipsis" />
      </template>
    </Card>
  </div>
</template>
