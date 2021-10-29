<script setup lang="ts">
import { Form, FormItem, Row, Col, Input } from "ant-design-vue";
import { instanceSchemaService } from "./InstanceSchemaService";
const { rules, record, validateInfos } =
  instanceSchemaService.serviceDiscovery();
</script>

<template>
  <Form layout="vertical" :rules="rules" :model="record">
    <Row :gutter="16">
      <Col :span="12">
        <FormItem label="标题" name="title" v-bind="validateInfos.title">
          <Input allow-clear autocomplete="off" v-model:value="record.title" />
        </FormItem>
      </Col>

      <Col :span="12">
        <FormItem
          label="描述"
          name="description"
          v-bind="validateInfos.tdescriptionitle"
        >
          <Input
            allow-clear
            autocomplete="off"
            v-model:value="record.description"
          />
        </FormItem>
      </Col>

      <Col :span="12">
        <FormItem label="内容" name="title" v-bind="validateInfos.content">
          <Input
            allow-clear
            autocomplete="off"
            v-model:value="record.content"
          />
        </FormItem>
      </Col>
    </Row>
  </Form>
</template>
