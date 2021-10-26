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
  message,
} from "ant-design-vue";
import { ChainOfResponsibilityService } from "./ChainOfResponsibilityService";
import {
  GithubOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import HighLightMaker from "@components/HighLightMaker.vue";
import { reactive } from "vue-demi";

const { _Event, showCode, code, redirect } = ChainOfResponsibilityService();
const { Middleware } = _Event();
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
  <div>
    <Card>
      <CardMeta
        title="责任链模式"
        description="责任链（Chain of Responsibility）模式的定义：为了避免请求发送者与多个请求处理者耦合在一起，将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止。"
      />
      <Row style="margin-top: 20px" justify="center">
        <Form v-model:value="fromState">
          <FormItem label="名字">
            <Input v-model:value="fromState.data.name" />
          </FormItem>

          <FormItem label="年龄">
            <Input v-model:value="fromState.data.age" />
          </FormItem>

          <FormItem>
            <Button @click="request">请求</Button>
          </FormItem>
        </Form>
      </Row>
      <Row v-show="showCode" style="transition: all 1s">
        <Divider />
        <HighLightMaker :code="code" />
      </Row>

      <template class="ant-card-actions" #actions>
        <github-outlined key="setting" @click="redirect()" />
        <edit-outlined key="code" @click="showCode = !showCode" />
        <ellipsis-outlined
          key="ellipsis"
          @click="redirect('https://zhuanlan.zhihu.com/p/163843181')"
        />
      </template>
    </Card>
  </div>
</template>
