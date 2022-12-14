<template>
  <div v-for="category in categories" :key="category.id" class="product">
    <div class="product__img">
      <img :src="category.img" alt="" />
    </div>
    <div class="product__name">{{ category.title }}</div>
  </div>
</template>

<script>
import { STATIC_CATEGORIES } from "@/data/STATIC_CATEGORIES.js";

export default {
  name: "MyProduct",
  components: STATIC_CATEGORIES,
  data: () => ({
    categories: STATIC_CATEGORIES,
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