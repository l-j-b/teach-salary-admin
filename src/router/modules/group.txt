import { $t } from "@/plugins/i18n";
import { group } from "@/router/enums";
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/group",
  name: "Group",
  component: Layout,
  redirect: "/group/index",
  meta: {
    icon: "ep:data-analysis",
    title: $t("menus.group"),
    rank: group
  },
  children: [
    {
      path: "/group/index",
      name: "GroupIndex",
      component: () => import("@/views/group/index.vue"),
      meta: {
        title: $t("menus.group"),
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
