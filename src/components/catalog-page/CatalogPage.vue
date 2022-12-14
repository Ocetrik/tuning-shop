<template>
  <div class="catalog-page">
    <div class="catalog-page__title">Каталог запчатей</div>
    <div class="catalog-page__product-list">
      <div class="product-list__filter"></div>
      <div class="product-list__products">
        <car-products />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogPage",
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.catalog-page {
  max-width: 1680px;
  margin: 0 auto;
  margin-top: 50px;
  &__title {
    font-size: 35px;
    line-height: 22px;
    font-family: "Montserrat-Bold";
  }
}
</style>