<script setup lang="ts">
import { Form, Row, Col, Input } from "ant-design-vue";
import { instanceSchemaService } from "./InstanceSchemaService";
const { rules, record, validateInfos } =
  instanceSchemaService.serviceDiscovery();
</script>

<template>
  <Form layout="vertical" :rules="rules" :model="record">
    <Row :gutter="16">
      <Col :span="12">
        <Form.Item label="标题" name="title" v-bind="validateInfos.title">
          <Input allow-clear autocomplete="off" v-model:value="record.title" />
        </Form.Item>
      </Col>

      <Col :span="12">
        <Form.Item
          label="描述"
          name="description"
          v-bind="validateInfos.tdescriptionitle"
        >
          <Input
            allow-clear
            autocomplete="off"
            v-model:value="record.description"
          />
        </Form.Item>
      </Col>

      <Col :span="12">
        <Form.Item label="内容" name="title" v-bind="validateInfos.content">
          <Input
            allow-clear
            autocomplete="off"
            v-model:value="record.content"
          />
        </Form.Item>
      </Col>
    </Row>
  </Form>
</template>
