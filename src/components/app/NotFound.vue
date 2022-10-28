<template>
  <div class="not-found">
    <div class="not-found__img">
      <img src="@/static/404.png" alt="" />
    </div>
    <div class="not-found__text">
      <div class="text__title">404</div>
      <div class="text__body">Такой страницы нет</div>
    </div>
    <div class="not-found__btn">
      <router-link to="/">
        <button class="back-btn btn">Назад к стоку</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.not-found {
  text-align: center;
  margin-top: 90px;
  margin-bottom: 100px;
}
.text {
  &__title {
    margin-top: 25px;
    font-family: "Montserrat-Bold";
    font-size: 73px;
    line-height: 22px;
  }
  &__body {
    font-family: "Montserrat-Bold";
    font-size: 22px;
    line-height: 22px;
    margin-top: 40px;
  }
}
.back-btn {
  margin-top: 25px;
  padding: 15px 120px;
}
</style>