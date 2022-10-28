<template>
  <!-- Компонент помощи поиска деталей -->
  <div class="main-selection">
    <div class="main-selection__info">
      <div class="info__title">Подбор по автомобилю</div>
      <div class="info__body">
        Ищите товары сразу для вашего автомобиля, это поможет сильно сузить
        ассортимент и ускорит выбор товаров.
      </div>
    </div>
    <div class="main-selection__selector">
      <my-select v-model="selectedSort" :option="brandSelect" />

      <div class="selector-btn">
        <button class="btn">Подобрать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSelection",
  data: () => ({
    selectedSort: "",
    brandSelect: [
      { value: "brand", name: "Volkswagen" },
      { value: "brand", name: "Skoda" },
      { value: "brand", name: "Audi" },
    ],
    modelSelect: [{ value: "model", name: "A5" }],

    detailSelect: [{ value: "detail", name: "Двигатель" }],
  }),
};
</script>

<style lang="scss" scoped>
.main-selection {
  margin-top: 150px;
  display: flex;
  gap: 23px;
  &__info {
    max-width: 570px;
  }
  &__selector {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, minmax(100px, 355px));
    grid-template-rows: repeat(2, 45px);
  }
}

.btn {
  padding: 15px 130px;

  font-size: 16px;
  line-height: 22px;
}
.info {
  &__title {
    font-family: "Montserrat-Bold";
    color: #f05454;
    font-size: 35px;
    line-height: 22px;
  }
  &__body {
    font-family: "OpenSans-Regular";
    font-size: 24px;
    line-height: 38px;
    margin-top: 45px;
  }
}
</style>