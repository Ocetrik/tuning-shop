<template>
<!-- Описание компании -->
  <div class="main-page__desc">
    <div class="desc-text">
      <div class="desc-text__title">URBAN <span>RACERS</span></div>
      <div class="desc-text__body">
        Интернет-магазин тюнинг-комплектующих для современных автомобилей Audi,
        Skoda, Seat, Porsche, BMW, Mercedes-Benz и др.Мы предлагаем только
        лучшие товары из Европы и США. Работаем напрямую с заводами, тем самым
        гарантируя отличные цены и сроки доставки.
      </div>
      <div class="">
        <button class="desc-text__btn btn">Перейти в каталог</button>
      </div>
    </div>
    <div class="desc-slider">
      <img src="@/static/slider-item.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-page__desc {
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
  }
  &__body {
    margin-top: 40px;
    font-size: 24px;
    line-height: 38px;
  }
}
.desc-text__btn {
  margin-top: 35px;
  font-size: 16px;
  line-height: 22px;
  padding: 15px 100px;
}
</style>