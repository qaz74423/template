<!-- 可接收异步数据，样式之类的以后写 -->
<script setup lang="ts">
import Hljs from "highlight.js";
import "highlight.js/styles/base16/tomorrow.css";
import { Ref, ref, watch } from "vue-demi";
const props = defineProps<{ code: string | Ref<string> }>();

const codeRef = ref<HTMLElement | null>(null);
watch(
  codeRef,
  (v) => {
    Hljs.highlightBlock(v!);
  },
  { flush: "post" }
);
</script>

<template>
  <pre>
    <code ref="codeRef">{{props.code}}</code>
  </pre>
</template>
