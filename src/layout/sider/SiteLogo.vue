<script setup lang="ts">
import { appService } from "@AppService";
import { computed } from "vue-demi";

const logo = import.meta.env.VITE_LOGO as string;
const title = import.meta.env.VITE_TITLE as string;
const { theme } = appService.serviceDiscovery();
// 适配主题
const fontStyle = computed(() => {
  return {
    color: theme.value == "dark" ? "#fff" : "#000",
  };
});
</script>

<template>
  <div class="site-logo">
    <div>
      <div class="logo">
        <img :src="logo" />
      </div>
      <h1 :style="fontStyle">{{ title }}</h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.site-logo {
  // padding-left: 20px;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  padding-left: 24px;
  display: inline-block;
  .logo {
    display: inline-block;
    box-sizing: content-box;
    img,
    svg {
      height: 32px;
      width: 32px;
      vertical-align: middle;
    }
  }

  h1 {
    display: inline-block;
    margin-left: 10px;
    // color: #fff;
    font-size: 20px;
  }
}
</style>
