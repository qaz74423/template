<script setup lang="ts">

import { useBreadcrumb } from './BreadcrumbService'

const { breadcrumbs, handerClick } = useBreadcrumb()

</script>

<template>
    <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item
            @click="handerClick(item.path)"
            class="item"
            v-for="item in breadcrumbs"
            :key="item.path"
        >{{ item.name }}</a-breadcrumb-item>
    </a-breadcrumb>
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