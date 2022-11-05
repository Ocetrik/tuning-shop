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
      <my-select v-model="selectedBrand" :options="brandSelect" >Выберите марку автомобиля</my-select>
      <my-select v-model="selectedModel" :options="modelSelect" >Выберите модель автомобиля</my-select>
      <my-select v-model="selectedDetail" :options="detailSelect" >Выберите модификацию </my-select>
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
    selectedBrand: "",
    selectedModel: "",
    selectedDetail: "",
    brandSelect: [
      { value: "brand", name: "Volkswagen", id: 1 },
      { value: "brand", name: "Skoda", id: 2 },
      { value: "brand", name: "Audi", id: 3 },
    ],
    modelSelect: [
      { value: "model", name: "A5" },
      { value: "model", name: "Tiguan" },
    ],

    detailSelect: [
      { value: "detail", name: "Двигатель" },
      { value: "detail", name: "Аксессуары" },
    ],
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
  padding: 15px 133px;

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