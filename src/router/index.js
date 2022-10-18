import { createRouter, createWebHashHistory } from "vue-router";
import mainPage from "@/components/main-page/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: mainPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
