<script lang="ts" setup>import { inject } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const transition: string | undefined = inject('transition')

</script>

<template>
    <a-layout-content class="content">
        <router-view v-slot="{ Component }">
            <transition :name="transition">
                <component :is="Component" />
            </transition>
        </router-view>
    </a-layout-content>
</template>
<style lang="scss" scoped>
.content {
    margin: 16px 16px 0;
    overflow: initial;
    overflow-x: hidden;
}
</style>