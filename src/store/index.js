import { createStore } from "vuex";
import {productModule} from "@/store/productModule";

export default createStore({
  // Состояние
  state: () => ({
    
  }),

  // Computed свойства
  getters: {
  },
  // Изменение состояния
  mutations: {
  },
  // Функции, использующие внутри себя мутации
  actions: {
  },
  // Куски состояния со своими get, mut. act
  modules: {
    product: productModule
  },
});
