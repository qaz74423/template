<script lang="ts" setup>
import { ObserverService } from "./ObserverService";
import { Card, CardMeta, Button, Row, Divider, message } from "ant-design-vue";
import {
  GithubOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import HighLightMaker from "@components/HighLightMaker.vue";
const { _Event, showCode, redirect, code } = ObserverService();
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
  <div>
    <Card>
      <CardMeta
        title="观察者模式"
        description="观察者模式就是一对多事件，当事件发生的时候通知到多个观察者，所有观察者进行对应的更新操作update执行事件操作。"
      />
      <Row style="margin: 20px 0" justify="space-around">
        <Button @click="createObsercer('observer1')">生成观察者1</Button>
        <Button @click="createObsercer('observer2')">生成观察者2</Button>
        <Button @click="updateState">改变状态</Button>
      </Row>
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
