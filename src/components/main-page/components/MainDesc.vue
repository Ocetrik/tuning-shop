<template>
  <!-- Описание компании -->
  <div class="main-desc">
    <div class="desc-text">
      <div class="desc-text__title">URBAN <span>RACERS</span></div>
      <div class="desc-text__body">
        Интернет-магазин тюнинг-комплектующих для современных автомобилей Audi,
        Skoda, Seat, Porsche, BMW, Mercedes-Benz и др. Мы предлагаем только
        лучшие товары из Европы и США. Работаем напрямую с заводами, тем самым
        гарантируя отличные цены и сроки доставки.
      </div>
      <div class="">
        <button class="desc-text__btn btn">Перейти в каталог
        </button>
      </div>
    </div>
    <div class="desc-slider">
      <splide :options="options">
        <splide-slide>
          <img src="@/static/slider-item-1.png" />
        </splide-slide>
        <splide-slide>
          <img src="@/static/slider-item-2.png" />
        </splide-slide>
        <splide-slide>
          <img src="@/static/slider-item-3.png" />
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";
import "@splidejs/vue-splide/css";

export default defineComponent({
  data: () => ({
    options: {
      type: "loop",
      rewind: true,
      autoplay: 0.1,
      width: "60rem",
      padding: "5rem",
      gap: "6rem",
    },
  }),
  components: { Splide, SplideSlide },
});
</script>

<style scoped lang="scss">
.main-desc {
  margin-top: 65px;
  display: flex;
  gap: 25px;
}
span {
  color: #f05454;
}
.desc-text {
  max-width: 570px;
  &__title {
    font-size: 60px;
    line-height: 73px;
    font-family: "Montserrat-Bold";
  }
  &__body {
    margin-top: 40px;
    font-size: 24px;
    line-height: 38px;
    font-family: "OpenSans-Regular";
  }
}
.desc-text__btn {
  margin-top: 35px;
  font-size: 16px;
  line-height: 22px;
  padding: 15px 100px;
}
</style>