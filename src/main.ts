import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import { router } from "./router";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import "./assets/scss/index.scss";

const app = createApp(App);
app.use(Antd).use(router).mount("#app");

app.directive("highlight", (el: HTMLElement) => {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block as HTMLElement);
  });
});
