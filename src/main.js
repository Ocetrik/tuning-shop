import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Components

import Header from "@/components/app/HeaderApp.vue";
import Footer from "@/components/app/FooterApp.vue";
import Desc from "@/components/main-page/components/MainDesc.vue";
import Selection from "@/components/main-page/components/MainSelection.vue";
import Support from "@/components/main-page/components/MainSupport.vue";
import Categories from "@/components/main-page/components/MainCategories.vue";
import News from "@/components/main-page/components/MainPosts.vue";

// UI

import MySelect from "@/components/UI/MySelect.vue";
import MyCategoriesCard from "@/components/UI/MyCategoriesCard.vue";
import MyNewsCard from "@/components/UI/MyNewsCard.vue";
import MyActionsCard from "@/components/UI/MyActionsCard.vue";
import MyDropDown from "@/components/UI/MyDropDown.vue";

// Products

import CarProducts from "@/components/catalog-page/components/CarProducts.vue";

const app = createApp(App).use(store).use(router);
app
  .component("header-app", Header)
  .component("footer-app", Footer)
  .component("main-desc", Desc)
  .component("main-selection", Selection)
  .component("main-support", Support)
  .component("main-categories", Categories)
  .component("main-news", News)
  .component("my-select", MySelect)
  .component("my-categories-card", MyCategoriesCard)
  .component("my-news-card", MyNewsCard)
  .component("my-actions-card", MyActionsCard)
  .component("my-drop", MyDropDown)
  .component("car-products", CarProducts)
  ;
app.mount("#app");
