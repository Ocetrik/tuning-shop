<template>
<!-- Компонент помощи поиска деталей -->
  <div class="main-page__main-selection">
    <div class="main-selection__info">
      <div class="info__title">Подбор по автомобилю</div>
      <div class="info__body">
        Ищите товары сразу для вашего автомобиля, это поможет сильно сузить
        ассортимент и ускорит выбор товаров.
      </div>
    </div>
    <div class="main-selection__selector">
      <my-select />
      <my-select />
      <my-select />
      <div class="selector-btn">
        <button class="btn">Подобрать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-page__main-selection {
  margin-top: 150px;
  display: flex;
  gap: 23px;
}
.main-selection {
  &__info {
    max-width: 570px;
  }
  &__selector {
    display: grid;
    gap: 20px;
    grid-template-columns: 355px 355px;
    grid-template-rows: 45px 45px;
  }
}

.btn {
  padding: 15px 130px;

  font-size: 16px;
  line-height: 22px;
}
.info__title {
  color: #f05454;
  font-size: 35px;
  line-height: 22px;
}
.info__body {
  font-size: 24px;
  line-height: 38px;
  margin-top: 45px;
}
</style>