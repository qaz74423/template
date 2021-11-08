<script lang="ts" setup>
import Currying from "./children/currying/Currying.vue";
import Monad from "./children/monad/Monad.vue";
import Monad2 from "./children/monad2/Monad.vue";
import Functional from "./children/functional/Functional.vue";
</script>

<template>
  <div>
    <div :style="{ columns: 1, columnGap: 8 }">
      <div class="item"><Currying /></div>
      <div class="item"><Monad /></div>
      <div class="item"><Monad2 /></div>
      <div class="item"><Functional /></div>
    </div>
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
