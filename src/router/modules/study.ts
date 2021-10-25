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
      // children: [
      //   {
      //     path: "strategy",
      //     name: "Strategy",
      //     component: () =>
      //       import("../../views/study/children/pattern/children/strategy"),
      //     meta: {
      //       title: "strategy",
      //       icon: FileUnknownTwoTone,
      //     },
      //   },
      //   {
      //     path: "publish-subscribe",
      //     name: "PublishSubscribe",
      //     component: () =>
      //       import(
      //         "../../views/study/children/pattern/children/publish-subscribe"
      //       ),
      //     meta: {
      //       title: "publish-subscribe",
      //       icon: FileUnknownTwoTone,
      //     },
      //   },
      //   {
      //     path: "mvc",
      //     name: "MVC",
      //     component: () =>
      //       import("@views/study/children/pattern/children/MVC/MVC.vue"),
      //     meta: {
      //       title: "mvc",
      //       icon: FileUnknownTwoTone,
      //     },
      //   },
      // ],
    },
    {
      path: "ipbp",
      name: "Ipbp",
      component: () => import("../../views/study/children/ipbp/Ipbp.vue"),
      meta: {
        title: "ipbp",
        icon: FileUnknownOutlined,
      },
      children: [
        {
          path: "blogs",
          name: "Blogs",
          component: () =>
            import("../../views/study/children/ipbp/children/blogs"),
          meta: {
            title: "blogs",
            icon: FileUnknownTwoTone,
            auth: true,
          },
        },
      ],
    },
  ],
};

export default route;
