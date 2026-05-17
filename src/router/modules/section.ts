import { $t } from "@/plugins/i18n";
import { section } from "@/router/enums";
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/section",
  name: "Section",
  component: Layout,
  redirect: "/section/index",
  meta: {
    icon: "ri/time-line",
    title: $t("menus.pureSection"),
    rank: section
  },
  children: [
    {
      path: "/section/index",
      name: "SectionIndex",
      component: () => import("@/views/section/index.vue"),
      meta: {
        title: $t("menus.pureSection"),
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
