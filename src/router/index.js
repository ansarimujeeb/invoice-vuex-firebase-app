import { createRouter, createWebHistory } from "vue-router";
import HomeItem from "../views/HomeItem.vue";

const routes = [
  {
    path: "/",
    name: "HomeItem",
    component: HomeItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
