import { $t } from "@/plugins/i18n";
import { course } from "@/router/enums";
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/course",
  name: "Course",
  component: Layout,
  redirect: "/course/index",
  meta: {
    icon: "ep:reading",
    title: $t("menus.pureCourse"),
    rank: course
  },
  children: [
    {
      path: "/course/index",
      name: "CourseIndex",
      component: () => import("@/views/course/index.vue"),
      meta: {
        title: $t("menus.pureCourse"),
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
