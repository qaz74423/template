import { RouteRecordRaw } from "vue-router";
import {
  AreaChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from "@ant-design/icons-vue";
const route: RouteRecordRaw = {
  path: "charts",
  name: "Charts",
  component: () => import("@views/charts/Charts.vue"),
  meta: {
    title: "charts",
    icon: AreaChartOutlined,
  },
  children: [
    {
      path: "commen-charts",
      name: "CommenCharts",
      component: () =>
        import("@views/charts/children/commoncharts/CommonCharts.vue"),
      meta: {
        title: "CommenCharts",
        icon: LineChartOutlined,
      },
    },
    {
      path: "action-charts",
      name: "ActionCharts",
      component: () => import("@views/charts/children/action/ActionChart.vue"),
      meta: {
        title: "ActionCharts",
        icon: PieChartOutlined,
      },
    },
  ],
};

export default route;
