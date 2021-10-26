<script lang="ts" setup>
import { Card, CardMeta, Button, Row, Divider, message } from "ant-design-vue";
import {
  GithubOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import { PublishSubscribeService } from "./PublishSubscribeService";
import HighLightMaker from "@components/HighLightMaker.vue";
const { _Event, showCode, code, redirect } = PublishSubscribeService();

const { addlisten, remove, trigger, clientlist } = _Event();

// 示范
const fn = () => {
  message.success("发出去的消息体");
};
const publish = () => {
  addlisten("陈杰", fn);
  message.info("发出一条消息");
};
const receive = () => {
  trigger("陈杰");
};
const removeFn = () => {
  remove("陈杰", undefined);
};
</script>

<template>
  <div>
    <Card>
      <CardMeta
        title="发布订阅模式"
        description="在发布订阅模式里，发布者，并不会直接通知订阅者，换句话说，发布者和订阅者，彼此互不相识。"
      >
      </CardMeta>

      <Row style="margin: 20px 0" justify="space-around">
        <Button @click="publish">发布信息</Button>
        <Button @click="receive">订阅消息</Button>
        <Button danger @click="removeFn">删除消息</Button>
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
<style></style>
