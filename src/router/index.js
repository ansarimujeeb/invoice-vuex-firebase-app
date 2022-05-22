import { createRouter, createWebHistory } from "vue-router";
import HomeItem from "../views/HomeItem.vue";
import InvoiceView from "../views/InvoiceView.vue";

const routes = [
  {
    path: "/",
    name: "HomeItem",
    component: HomeItem,
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;