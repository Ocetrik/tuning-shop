<template>
  <div class="car-products">
    <div class="car-products__filter">
      <div class="filter-header">Производитель</div>
      <div class="filter-block manufacturer">
        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedManufacturer"
            value="Volkswagen"
            id="manufacturer1"
          />
          <label for="manufacturer1" class="filter-block__checkbox">
            <span>Volkswagen</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedManufacturer"
            value="BMW"
            id="manufacturer2"
          />
          <label for="manufacturer2" class="filter-block__checkbox">
            <span>BMW</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedManufacturer"
            value="Mercedes-Benz"
            id="manufacturer3"
          />
          <label for="manufacturer3" class="filter-block__checkbox">
            <span>Mercedes-Benz</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedManufacturer"
            value="Audi"
            id="manufacturer4"
          />
          <label for="manufacturer4" class="filter-block__checkbox">
            <span>Audi</span>
          </label>
        </div>
      </div>

      <div class="filter-header">Модель</div>

      <div class="filter-block model">
        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="Tiguan"
            id="model"
          />
          <label for="model" class="filter-block__checkbox">
            <span>Tiguan</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="Golf"
            id="model2"
          />
          <label for="model2" class="filter-block__checkbox">
            <span>Golf</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="Passat"
            id="model3"
          />
          <label for="model3" class="filter-block__checkbox">
            <span>Passat</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="3 серии"
            id="model4"
          />
          <label for="model4" class="filter-block__checkbox">
            <span>3 серии</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="4 серии"
            id="model5"
          />
          <label for="model5" class="filter-block__checkbox">
            <span>4 серии</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="5 серии"
            id="model6"
          />
          <label for="model6" class="filter-block__checkbox">
            <span>5 серии</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="C-class"
            id="model7"
          />
          <label for="model7" class="filter-block__checkbox">
            <span>C-class</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="E-class"
            id="model8"
          />
          <label for="model8" class="filter-block__checkbox">
            <span>E-class</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="CLS"
            id="model9"
          />
          <label for="model9" class="filter-block__checkbox">
            <span>CLS</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="A5"
            id="model10"
          />
          <label for="model10" class="filter-block__checkbox">
            <span>A5</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="S8"
            id="model11"
          />
          <label for="model11" class="filter-block__checkbox">
            <span>S8</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedModel"
            value="Q7"
            id="model12"
          />
          <label for="model12" class="filter-block__checkbox">
            <span>Q7</span>
          </label>
        </div>
      </div>
      <div class="filter-header">Категория</div>
      <div class="filter-block category">
        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Тормоза и тормозные системы"
            id="category1"
          />
          <label for="category1" class="filter-block__checkbox">
            <span>Тормоза и тормозные системы</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Охлаждение"
            id="category2"
          />
          <label for="category2" class="filter-block__checkbox">
            <span>Охлаждение</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Двигатель"
            id="category3"
          />
          <label for="category3" class="filter-block__checkbox">
            <span>Двигатель</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Выпускная система"
            id="category4"
          />
          <label for="category4" class="filter-block__checkbox">
            <span>Выпускная система</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Топливная система"
            id="category5"
          />
          <label for="category5" class="filter-block__checkbox">
            <span>Топливная система</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Интерьер"
            id="category6"
          />
          <label for="category6" class="filter-block__checkbox">
            <span>Интерьер</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Впускная система"
            id="category7"
          />
          <label for="category7" class="filter-block__checkbox">
            <span>Впускная система</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Мерч"
            id="category8"
          />
          <label for="category8" class="filter-block__checkbox">
            <span>Мерч</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Подвеска"
            id="category9"
          />
          <label for="category9" class="filter-block__checkbox">
            <span>Подвеска</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Трансмиссия"
            id="category10"
          />
          <label for="category10" class="filter-block__checkbox">
            <span>Трансмиссия</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Трубины и турбокомплекты"
            id="category11"
          />
          <label for="category11" class="filter-block__checkbox">
            <span>Трубины и турбокомплекты</span>
          </label>
        </div>

        <div class="filter-block__checkbox">
          <input
            class="filter-checkbox"
            type="checkbox"
            v-model="selectedCategory"
            value="Шины и диски"
            id="category12"
          />
          <label for="category12" class="filter-block__checkbox">
            <span>Шины и диски</span>
          </label>
        </div>
      </div>
    </div>

    <div class="car-products__products-list">
      <div
        v-for="product in cartsProducts"
        :key="product.id"
        class="products__product-card"
      >
        <div class="product-card__img">
          <img :src="product.img" alt="" />
        </div>
        <div class="product-card__title">
          {{ product.title }}
        </div>
        <div class="product-card__body">
          {{ product.body }}
        </div>
        <div class="product-card__price-wrapper">
          <div class="price-wrapper__price price">₽ {{ product.price }}</div>
          <div class="price-wrapper__busket">
            <img src="@/static/products/product-basket.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="car-products__product-pages">
    <div
      @click="page = key"
      v-for="(pagesItem, key) in new Array(numberOfPages)"
      :key="key"
      class="product-pages__page"
      :class="page === key ? 'active' : ''"
    >
      {{ key + 1 }}
    </div>
  </div>
</template>

<script>
import { STATIC_PRODUCTS } from "@/data/products/STATIC_PRODUCTS.js";

export default {
  name: "CarProducts",
  components: [STATIC_PRODUCTS],
  data: () => ({
    selectedManufacturer: [],
    selectedModel: [],
    selectedCategory: [],

    page: 0,
    limit: 12,
    totalPages: 0,
    products: STATIC_PRODUCTS,
  }),
  computed: {
    filteredProducts() {
      const manufacturer = this.selectedManufacturer;
      const model = this.selectedModel;
      const category = this.selectedCategory;
      const filter = [manufacturer, model, category];
      if (filter == "") {
        return this.products;
      } else
        return this.products.filter(
          (product) =>
            (!manufacturer.length ||
              manufacturer.includes(product.manufacturer)) &&
            (!category.length || category.includes(product.category)) &&
            (!model.length || model.includes(product.model))
        );
    },
    // filteredProducts() {
    //   const arr = this.products;
    //   const manufacturer = this.selectedManufacturer;
    //   const category = this.selectedCategory;
    //   const model = this.selectedModel;
    //   const filter = {
    //     model: new Set(model),
    //   };
    //   const allFilters = filter
    //   const filterEntries = Object.entries(allFilters);
    //   const filtered = arr.filter((item) =>
    //     filterEntries.every(([key, allowed]) => allowed.has(item[key]))
    //   );
    //   if (filtered == "") {
    //     return this.products;
    //   }
    //   return filtered;
    // },

    cartsProducts() {
      if (this.page === 0) {
        return this.filteredProducts.slice(0, this.limit);
      } else {
        return this.filteredProducts.slice(
          this.page * this.limit,
          this.page * this.limit + this.limit
        );
      }
    },
    numberOfPages() {
      return Math.ceil(this.filteredProducts.length / this.limit);
    },
  },
};
</script>

<style scoped lang="scss">
.car-products {
  display: flex;
  margin-top: 50px;
  &__filter {
    width: 375px;
  }
  &__products-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
  &__product-pages {
    display: flex;
    gap: 6px;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }
}
.filter {
  &-header {
    font-family: "OpenSans-SemiBold";
    font-size: 16px;
    line-height: 22px;
    margin-top: 15px;
  }
  &-block {
    display: flex;
    flex-direction: column;
    color: #4f4f4f;
  }
}
span {
  margin-left: 8px;
}
.filter-block {
  &__checkbox {
    color: #2c2c2e;
    font-family: "OpenSans-Regular";
    font-size: 14px;
    line-height: 19px;
    margin-top: 5px;
  }
}
.products {
  &__product-card {
    padding: 20px 20px;
    box-shadow: 0px 0px 45px rgba(41, 41, 41, 0.15);
    width: 260px;
    height: 450px;
  }
}
.product-card {
  &__img {
    box-shadow: 0px 0px 45px rgba(41, 41, 41, 0.15);
  }
  &__title {
    font-family: "OpenSans-Semibold";
    font-size: 18px;
    line-height: 25px;
    height: 55px;
    margin-top: 22px;
  }
  &__body {
    color: #8a8e85;
    font-family: "OpenSans-Regular";
    font-size: 14px;
    line-height: 140%;
    // margin-top: 10px;
    height: 50px;
  }
  &__price-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
}
.product-pages {
  &__page {
    font-family: "OpenSans-Regular";
    font-size: 16px;
    line-height: 24px;
    background: #f1f1f1;
    padding: 10px 20px;
    border-radius: 4px;
    color: #121212;
    cursor: pointer;
  }
}
.price {
    font-family: "OpenSans-Semibold";
  font-size: 16px;
  line-height: 22px;
}
.active {
  background: #f05454;
  color: #ffffff;
  box-shadow: 0px 0px 45px rgba(41, 41, 41, 0.15);
}
</style>