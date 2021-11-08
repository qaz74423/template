<script lang="ts" setup>
import { Form, Input, Button, Row, Switch } from "ant-design-vue";
import { ref } from "@vue/reactivity";
import { loginService } from "./LoginService";
import Stars from "@components/stars.vue";

/**
 * @description v2
 */
const openStar = ref(true);

const { formState, loginBtn, reset, noAuthLogin, loading } = loginService();
</script>

<template>
  <!-- 背景 -->
  <Stars :open="openStar"></Stars>
  <!-- 主体登录内容 -->
  <div class="w">
    <div class="content">
      <Form :model="formState">
        <Form.Item label="username">
          <Input v-model:value="formState.username" />
        </Form.Item>
        <Form.Item label="password">
          <Input v-model:value="formState.password" />
        </Form.Item>

        <Form.Item>
          <Row justify="center">
            <Button type="primary" :loading="loading" @click="loginBtn"
              >login</Button
            >
            <Button style="margin-left: 10px" @click="reset">reset</Button>
            <Button style="margin-left: 10px" @click="noAuthLogin"
              >游客登录</Button
            >
          </Row>
        </Form.Item>
      </Form>
      <Row justify="center">
        开启星空特效
        <Switch style="margin-left: 10px" v-model:checked="openStar" />
      </Row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.w {
  display: flex;
  justify-content: center; /*x轴对齐方式*/
  align-items: center; /*y轴对滴方式*/
  height: 100vh;
  width: 100%;
  background: transparent;
  .content {
    width: 400px;
    border-radius: 20px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    transition: all 1s linear;
    &:hover {
      backdrop-filter: blur(0px);
    }
  }
}
</style>
