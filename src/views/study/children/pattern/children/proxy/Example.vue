<script setup lang="ts">
import { ref } from "vue";
import { Button, Row, Input, Form } from "ant-design-vue";
import { _Event } from "./Event";

const { sendFile, proxySendFile } = _Event();

// 例子
const wait = ref(1000);
const file = ref("");
</script>

<template>
  <Row justify="space-around">
    <Form>
      <Form.Item label="文件名">
        <Input v-model:value="file" />
      </Form.Item>

      <Form.Item label="延迟">
        <Input v-model:value="wait" />
      </Form.Item>

      <Form.Item>
        <Button @click="sendFile(file)">普通发送</Button>
        <Button @click="proxySendFile(file, wait)">代理发送</Button>
      </Form.Item>
    </Form>
  </Row>
</template>
