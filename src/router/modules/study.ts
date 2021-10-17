import { RouteRecordRaw } from "vue-router";
import { FileUnknownOutlined, FileUnknownTwoTone } from "@ant-design/icons-vue";

const route: RouteRecordRaw = {
  path: "study",
  name: "Study",
  component: () => import("@views/study/Study.vue"),
  meta: {
    title: "study",
    icon: FileUnknownOutlined,
  },
  children: [
    {
      path: "pattern",
      name: "Pattern",
      component: () => import("@views/study/children/pattern/Pattern.vue"),

      meta: {
        title: "pattern",
        icon: FileUnknownOutlined,
      },
      children: [
        {
          path: "strategy",
          name: "Strategy",
          component: () =>
            import("@views/study/children/pattern/children/Strategy.vue"),
          meta: {
            title: "strategy",
            icon: FileUnknownTwoTone,
          },
        },
        {
          path: "publish-subscribe",
          name: "PublishSubscribe",
          component: () =>
            import(
              "@views/study/children/pattern/children/PublishSubscribe.vue"
            ),
          meta: {
            title: "publish-subscribe",
            icon: FileUnknownTwoTone,
          },
        },
        {
          path: "test",
          name: "Test",
          component: () =>
            import("@views/study/children/pattern/children/Test.vue"),
          meta: {
            title: "test",
            icon: FileUnknownTwoTone,
          },
        },
      ],
    },
  ],
};

export default route;
