import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Components

import Header from "@/components/main-page/components/MainHeader.vue";
import Desc from "@/components/main-page/components/MainDesc.vue";
import Selection from "@/components/main-page/components/MainSelection.vue";
import Support from "@/components/main-page/components/MainSupport.vue";

// UI

import MySelect from "@/components/UI/MySelect.vue";

const app = createApp(App).use(store).use(router);
app
  .component("my-header", Header)
  .component("main-desc", Desc)
  .component("main-selection", Selection)
  .component("main-support", Support)
  .component("my-select", MySelect);
app.mount("#app");
