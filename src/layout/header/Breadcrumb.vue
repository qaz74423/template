<script setup lang="ts">
import { Breadcrumb } from "ant-design-vue";
import { breadcrumbService } from "./BreadcrumbService";

const { breadcrumbs, handerClick } = breadcrumbService();
</script>

<template>
  <Breadcrumb class="breadcrumb">
    <Breadcrumb.Item
      @click="handerClick(item.path)"
      class="item"
      v-for="item in breadcrumbs"
      :key="item.path"
      >{{ item.name }}</Breadcrumb.Item
    >
  </Breadcrumb>
</template>
<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;

  .item {
    &:hover {
      color: red;
      cursor: pointer;
    }
  }
}
</style>
