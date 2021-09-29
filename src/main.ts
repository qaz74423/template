import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Store from "./store";
import Router from "./router";
createApp(App).use(Antd).use(Store).use(Router).mount("#app");
