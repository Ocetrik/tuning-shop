import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/components/main-page/MainPage.vue";
import CatalogPage from "@/components/catalog-page/CatalogPage.vue";
import NotFound from "@/components/app/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/catalog",
    name: "CatalogPage",
    component: CatalogPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
