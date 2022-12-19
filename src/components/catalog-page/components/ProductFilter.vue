<template>
  <div class="product-filter">
    <div class="product-filter-header">Производитель</div>
    <div class="product-filter-block manufacturer">
      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedManufacturer"
          value="Volkswagen"
          id="manufacturer1"
        />
        <label for="manufacturer1">
          <span>Volkswagen</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedManufacturer"
          value="BMW"
          id="manufacturer2"
        />
        <label for="manufacturer2">
          <span>BMW</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedManufacturer"
          value="Mercedes-Benz"
          id="manufacturer3"
        />
        <label for="manufacturer3">
          <span>Mercedes-Benz</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedManufacturer"
          value="Audi"
          id="manufacturer4"
        />
        <label for="manufacturer4">
          <span>Audi</span>
        </label>
      </div>
    </div>

    <div class="product-filter-header">Модель</div>

    <div class="product-filter-block model">
      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="Tiguan"
          id="model"
        />
        <label for="model">
          <span>Tiguan</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="Golf"
          id="model2"
        />
        <label for="model2">
          <span>Golf</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="Passat"
          id="model3"
        />
        <label for="model3">
          <span>Passat</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="3 серии"
          id="model4"
        />
        <label for="model4">
          <span>3 серии</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="4 серии"
          id="model5"
        />
        <label for="model5">
          <span>4 серии</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="5 серии"
          id="model6"
        />
        <label for="model6">
          <span>5 серии</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="C-class"
          id="model7"
        />
        <label for="model7">
          <span>C-class</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="E-class"
          id="model8"
        />
        <label for="model8">
          <span>E-class</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="CLS"
          id="model9"
        />
        <label for="model9">
          <span>CLS</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="A5"
          id="model10"
        />
        <label for="model10">
          <span>A5</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="S8"
          id="model11"
        />
        <label for="model11">
          <span>S8</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedModel"
          value="Q7"
          id="model12"
        />
        <label for="model12">
          <span>Q7</span>
        </label>
      </div>
    </div>
    <div class="product-filter-header">Категория</div>
    <div class="product-filter-block category">
      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Тормоза и тормозные системы"
          id="category1"
        />
        <label for="category1">
          <span>Тормоза и тормозные системы</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Охлаждение"
          id="category2"
        />
        <label for="category2">
          <span>Охлаждение</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Двигатель"
          id="category3"
        />
        <label for="category3">
          <span>Двигатель</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Выпускная система"
          id="category4"
        />
        <label for="category4">
          <span>Выпускная система</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Топливная система"
          id="category5"
        />
        <label for="category5">
          <span>Топливная система</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Интерьер"
          id="category6"
        />
        <label for="category6">
          <span>Интерьер</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Впускная система"
          id="category7"
        />
        <label for="category7">
          <span>Впускная система</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Мерч"
          id="category8"
        />
        <label for="category8">
          <span>Мерч</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Подвеска"
          id="category9"
        />
        <label for="category9">
          <span>Подвеска</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Трансмиссия"
          id="category10"
        />
        <label for="category10">
          <span>Трансмиссия</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Трубины и турбокомплекты"
          id="category11"
        />
        <label for="category11">
          <span>Трубины и турбокомплекты</span>
        </label>
      </div>

      <div class="product-filter-block__checkbox">
        <input
          class="filter-checkbox checkbox"
          type="checkbox"
          v-model="$store.state.product.selectedCategory"
          value="Шины и диски"
          id="category12"
        />
        <label for="category12">
          <span>Шины и диски</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "ProductFilter",
  data: () => ({}),
  computed: {
    ...mapState({
      selectedManufacturer: (state) => state.product.selectedManufacturer,
      selectedModel: (state) => state.product.selectedModel,
      selectedCategory: (state) => state.product.selectedCategory,
    }),
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
  },
};
</script>

<style scoped lang="scss">
.product-filter {
  margin-top: 50px;
  &-header {
    font-family: "OpenSans-SemiBold";
    font-size: 16px;
    line-height: 22px;
    margin-top: 5px;
  }
  &-block {
    display: flex;
    flex-direction: column;
    color: #4f4f4f;
  }
}
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #b3d7ff;
}
.checkbox:not(:disabled):active + label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}
.checkbox:focus + label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.checkbox:focus:not(:checked) + label::before {
  border-color: #80bdff;
}
.checkbox:checked + label::before {
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.product-filter-block {
  &__checkbox {
    color: #2c2c2e;
    font-family: "OpenSans-Regular";
    font-size: 14px;
    line-height: 19px;
    margin-top: 5px;
  }
}
</style>