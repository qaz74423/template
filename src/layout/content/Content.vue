<script lang="ts" setup>
import { appService } from "../../AppService";
import { LayoutContent } from "ant-design-vue";
const { transition } = appService.serviceDiscovery();
</script>

<template>
  <LayoutContent class="content">
    <router-view v-slot="{ Component }">
      <transition :name="transition">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- v2 -->
    <!-- <router-view v-slot="{ Component }">
      <template v-if="Component">
        <transition :name="transition">
          <keep-alive>
            <suspense>
              <component :is="Component" />
              <template #fallback>
                <div>loading...</div>
              </template>
            </suspense>
          </keep-alive>
        </transition>
      </template>
    </router-view> -->
  </LayoutContent>
</template>
<style lang="scss" scoped>
.content {
  padding: 16px 16px 0;
  overflow: initial;
  overflow-x: hidden;
}
</style>
