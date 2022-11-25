import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


//Components

import Header from "@/components/app/HeaderApp.vue";
import Footer from "@/components/app/FooterApp.vue";
import Desc from "@/components/main-page/components/MainDesc.vue";
import Selection from "@/components/main-page/components/MainSelection.vue";
import Support from "@/components/main-page/components/MainSupport.vue";
import Categories from "@/components/main-page/components/MainCategories.vue";
import News from "@/components/main-page/components/MainPosts.vue";

// UI

import MySelect from "@/components/UI/MySelect.vue";
import MyProduct from "@/components/UI/MyProduct.vue";
import MyNews from "@/components/UI/MyNews.vue";
import MyActions from "@/components/UI/MyActions.vue";
import MyDropList from "@/components/UI/MyDropList.vue";

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
  .component("my-product", MyProduct)
  .component("my-news", MyNews)
  .component("my-actions", MyActions)
  .component("my-drop", MyDropList)
app.mount("#app");
