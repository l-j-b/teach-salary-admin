import { $t } from "@/plugins/i18n";
import { schedule } from "@/router/enums";
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/schedule",
  name: "Schedule",
  component: Layout,
  redirect: "/schedule/index",
  meta: {
    icon: "ep/calendar",
    title: $t("menus.pureSchedule"),
    rank: schedule
  },
  children: [
    {
      path: "/schedule/index",
      name: "ScheduleIndex",
      component: () => import("@/views/schedule/index.vue"),
      meta: {
        title: $t("menus.pureSchedule"),
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;