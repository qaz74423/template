import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import { router } from "./router";
import "./assets/scss/base.scss";
import "./assets/scss/transition.scss";

createApp(App).use(Antd).use(router).mount("#app");
