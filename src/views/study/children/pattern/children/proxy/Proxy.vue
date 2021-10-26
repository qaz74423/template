<script setup lang="ts">
import { ProxyService } from "./ProxyService";
import {
  Card,
  CardMeta,
  Button,
  Row,
  Divider,
  Input,
  Form,
  FormItem,
} from "ant-design-vue";
import {
  GithubOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import HighLightMaker from "@components/HighLightMaker.vue";
import { ref } from "vue-demi";
const { _Event, code, showCode, redirect } = ProxyService();
const { sendFile, proxySendFile } = _Event();

// 例子
const wait = ref(1000);
const file = ref("");
</script>
<template>
  <div class="proxy">
    <Card>
      <CardMeta
        title="代理模式"
        description="代理模式给某一个对象提供一个代理对象，并由代理对象控制对原对象的引用。通俗的来讲代理模式就是我们生活中常见的中介。"
      />
      <Row style="margin: 20px 0" justify="space-around">
        <!-- <Button @click="sendFile(1)">发送文件</Button>
        <div><Input v-model:value="wait" placeholder="多少秒发送一次" /></div>
        <Button @click="proxySendFile(1, wait)">代理发送</Button> -->
        <Form>
          <FormItem label="文件名">
            <Input v-model:value="file" />
          </FormItem>

          <FormItem label="延迟">
            <Input v-model:value="wait" />
          </FormItem>

          <FormItem>
            <Button @click="sendFile(file)">普通发送</Button>
            <Button @click="proxySendFile(file, wait)">代理发送</Button>
          </FormItem>
        </Form>
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
<style lang="scss" scoped></style>
