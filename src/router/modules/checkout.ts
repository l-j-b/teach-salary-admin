import { $t } from "@/plugins/i18n";
import { checkout } from "@/router/enums";
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/checkout",
  name: "Checkout",
  component: Layout,
  redirect: "/checkout/index",
  meta: {
    icon: "ep/money",
    title: $t("menus.pureCheckout"),
    rank: checkout
  },
  children: [
    {
      path: "/checkout/index",
      name: "CheckoutIndex",
      component: () => import("@/views/checkout/index.vue"),
      meta: {
        title: $t("menus.pureCheckout"),
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
