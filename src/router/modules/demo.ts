import { $t } from "@/plugins/i18n";
import { home } from "@/router/enums";
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/demo",
  name: "demo",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: "ep/home-filled",
    title: $t("menus.pureDemo"),
    rank: home
  },
  children: [
    {
      path: "/demo",
      name: "Demo",
      component: () => import("@/views/demo/index.vue"),
      meta: {
        title: $t("menus.pureDemo"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
