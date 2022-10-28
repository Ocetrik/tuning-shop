<template>
  <div v-for="product in products" :key="product.id" class="product">
    <div class="product__img">
      <img :src="product.img" alt="" />
    </div>
    <div class="product__name">{{ product.title }}</div>
  </div>
</template>

<script>
import { STATIC_PRODUCT } from "@/data/STATIC_CATEGORIES.js";

export default {
  name: "MyProduct",
  components: STATIC_PRODUCT,
  data: () => ({
    products: STATIC_PRODUCT,
  }),
};
</script>

<style scoped>
.product {
  font-family: "OpenSans-Regular";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  padding: 15px 25px;
  box-shadow: 0px 28px 104px rgba(41, 41, 41, 0.15);
  border-radius: 4px;
  width: 170px;
}
</style>