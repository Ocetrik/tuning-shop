import { STATIC_PRODUCTS } from "@/data/products/STATIC_PRODUCTS.js";

export const productModule = {
  state: () => ({
    selectedManufacturer: [],
    selectedModel: [],
    selectedCategory: [],
    page: 0,
    limit: 12,
    products: STATIC_PRODUCTS,
  }),

  getters: {
    filteredProducts(state) {
      const manufacturer = state.selectedManufacturer;
      const model = state.selectedModel;
      const category = state.selectedCategory;
      const filter = [manufacturer, model, category];
      if (filter == "") {
        return state.products;
      } else
        return state.products.filter(
          (product) =>
            (!manufacturer.length ||
              manufacturer.includes(product.manufacturer)) &&
            (!category.length || category.includes(product.category)) &&
            (!model.length || model.includes(product.model))
        );
    },
    cartsProducts(state, getters) {
      if (state.page === 0) {
        return getters.filteredProducts.slice(0, state.limit);
      } else {
        return getters.filteredProducts.slice(
          state.page * state.limit,
          state.page * state.limit + state.limit
        );
      }
    },
    numberOfPages(state, getters) {
      return Math.ceil(getters.filteredProducts.length / state.limit);
    },
  },
  mutations: {
    changePage(state, key) {
      state.page = key
    }
  },
  actions: {},
  modules: {},
  namespaced: true,
};
