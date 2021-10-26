<script setup lang="ts">
import PublishSubscribe from "./children/publish-subscribe/PublishSubscribe.vue";
import Strategy from "./children/strategy/Strategy.vue";
import { appService } from "../../../../AppService";
import Singleton from "./children/singleton/Singleton.vue";
import Observer from "./children/observer/Observer.vue";
import Factory from "./children/factory/Factory.vue";
import Proxy from "./children/proxy/Proxy.vue";
import ChainOfResponsibility from "./children/chain-of-responsibility/ChainOfResponsibility.vue";

const { isMob } = appService.serviceDiscovery();
</script>

<template>
  <div :style="{ columns: isMob ? 1 : 2, columnGap: 8 }">
    <div class="item"><Strategy /></div>
    <div class="item"><PublishSubscribe /></div>
    <div class="item"><Singleton /></div>
    <div class="item"><Observer /></div>
    <div class="item"><Factory /></div>
    <div class="item"><Proxy /></div>
    <div class="item"><ChainOfResponsibility /></div>
  </div>
</template>
<style lang="scss" scoped>
.item {
  break-inside: avoid;

  // 加了好像有点问题
  margin-bottom: 8px;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
}
</style>
