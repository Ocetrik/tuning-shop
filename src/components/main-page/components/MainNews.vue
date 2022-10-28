<template>
  <div class="main-news">
    <div class="main-news__bg">
      <img src="@/static/news/bg-news.png" alt="" />
    </div>
    <div class="main-news__title">Актуальное</div>
    <div class="main-news__selection">
      <div class="selection__item">Все</div>
      <div class="selection__item active">Новости</div>
      <div class="selection__item">Акции</div>
    </div>
    <div class="main-news__news">
      <my-news />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.main-news {
  margin-top: 60px;
  margin-bottom: 190px;
  &__bg {
    position: absolute;
    left: 0;
    z-index: -1;
    img {
      max-width: 100%;
    }
  }
  &__title {
    padding-top: 60px;
    font-family: "Montserrat-Bold";
    font-size: 35px;
    line-height: 22px;
    color: #ffffff;
  }
  &__selection {
    margin-top: 35px;
    color: #ffffff;
    display: flex;
    gap: 60px;
  }
  &__news {
    display: flex;
    gap: 10px;
    overflow-x: hidden;
    margin-top: 55px;
  }
}
.active {
  margin-top: -12px;
  padding: 12px 24px;
  background: #f05454;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
</style>