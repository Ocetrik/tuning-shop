<template>
  <!-- router-link -->
  <div v-for="news in ourNews" :key="news.id" class="news">
    <div class="news__img">
      <img :src="news.img" alt="" />
    </div>
    <div class="news__title">
      {{ news.title }}
    </div>
    <div class="news__body">
      {{ news.body }}
    </div>
    <div class="news__date">
      {{ news.date }}
    </div>
  </div>
</template>

<script>
import { STATIC_NEWS } from "@/data/STATIC_NEWS.js";

export default {
  data: () => ({
    ourNews: STATIC_NEWS,
  }),
  components: STATIC_NEWS,
};
</script>

<style scoped lang="scss">
.news {
  padding: 18px;
  box-shadow: 0px 28px 104px rgba(41, 41, 41, 0.15);
  border-radius: 4px;
  max-width: 355px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  &__title {
    font-size: 18px;
    line-height: 25px;
    font-family: "OpenSans-Semibold";
  }
  &__body {
    font-size: 14px;
    line-height: 140%;
    font-family: "OpenSans-Regular";
    color: #8a8e85;
  }
  &__date {
    font-family: "OpenSans-Regular";
    font-size: 16px;
    line-height: 20px;
  }
}
</style>