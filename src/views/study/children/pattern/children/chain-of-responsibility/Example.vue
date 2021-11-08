<script lang="ts" setup>
import { reactive } from "vue";
import { Row, Input, Button, Form, message } from "ant-design-vue";
import { _Event } from "./Event";

const { Middleware } = _Event();

// 例子
type FromData = {
  data: {
    name: string;
    age: number;
  };
  header: {
    Authorization: string;
  };
};

/**
 * @description 添加header
 */
function transform(options: FromData, next: Function) {
  // 添加权限
  options.header.Authorization = "auth";
  next(options);
}

/**
 * @description 表单验证
 */
function validate(options: FromData, next: Function) {
  if (options.data.name == "" || !options.data.age) {
    next();
  } else {
    next(options);
  }
}

/**
 * @description 模拟发送请求
 */
function send(options: FromData, next: Function) {
  let hide: any;
  new Promise<FromData>((resolve, reject) => {
    hide = message.loading("请求发送中");

    setTimeout(() => {
      if (options) resolve(options);
      else reject("发送失败");
    }, 1000);
  })
    .then((value) => {
      message.success("发送成功，姓名:" + value.data.name);
    })
    .catch((reson) => {
      message.error(reson);
    })
    .finally(() => hide?.());
}

const fromState = reactive<FromData>({
  data: {
    name: "",
    age: 0,
  },
  header: {
    Authorization: "",
  },
});

const request = () => {
  const middleware = new Middleware();
  middleware.use(transform).use(validate).use(send);
  middleware.execute(fromState);
};
</script>
<template>
  <Row justify="center">
    <Form v-model:value="fromState">
      <Form.Item label="名字">
        <Input v-model:value="fromState.data.name" />
      </Form.Item>

      <Form.Item label="年龄">
        <Input v-model:value="fromState.data.age" />
      </Form.Item>

      <Form.Item>
        <Button @click="request">请求</Button>
      </Form.Item>
    </Form>
  </Row>
</template>
