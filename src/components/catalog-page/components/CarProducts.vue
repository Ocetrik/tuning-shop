<template>
  <div class="car-products">
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
      @click="changePage(key)"
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
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "CarProducts",
  data: () => ({}),
  computed: {
    ...mapState({
      page: (state) => state.product.page,
      limit: (state) => state.product.limit,
    }),
    ...mapGetters({
      filteredProducts: "product/filteredProducts",
      numberOfPages: "product/numberOfPages",
      cartsProducts: "product/cartsProducts",
    }),
  },
  methods: {
    ...mapMutations({
      changePage: "product/changePage"
    })
  }
};
</script>

<style scoped lang="scss">
.car-products {
  display: flex;
  margin-top: 50px;
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