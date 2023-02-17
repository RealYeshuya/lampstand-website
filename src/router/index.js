import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SermonView from "../views/SermonView.vue";
import routerNames from "@/constants/router-names";

const routes = [
  {
    path: "/",
    name: routerNames.HOME,
    component: HomeView,
  },
  {
    path: "/sermon",
    name: routerNames.SERMON,
    component: SermonView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
