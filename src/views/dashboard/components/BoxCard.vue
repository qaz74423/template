<script setup lang="ts">
import { Card, Avatar, Progress } from "ant-design-vue";
const logo = import.meta.env.VITE_LOGO as string;
</script>

<template>
  <Card class="card">
    <template #cover>
      <img
        class="bg"
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <div class="header">
      <Avatar class="avater" :size="50" :src="logo" />
      <div class="title">JC Ant Admin</div>
    </div>
    <div class="content">
      Vue
      <Progress :percent="76.5" />
      TypeScript
      <Progress :percent="19.1" />
      SCSS
      <Progress :percent="3.3" />
      HTML
      <Progress :percent="1.1" />
    </div>
  </Card>
</template>
<style scoped lang="scss">
.card {
  box-shadow: 12px rgb(0 0 0 / 10%);
  overflow: hidden;
  .bg {
    transition: all 0.5s ease-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avater {
      border: 1px solid #ff6;
    }
    .title {
      font-size: 25px;
      color: rgb(24, 144, 255);
    }
  }
}
</style>
