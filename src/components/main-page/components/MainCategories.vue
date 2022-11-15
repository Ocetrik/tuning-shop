<template>
  <div class="main-categories">
    <div class="main-categories__info">
      <div class="info__text">
        <div class="text__title">Категории товаров</div>
        <div  class="text__body">
          Выберите категорию которая вас интересует. Тут есть все – от ГБЦ до
          футболки с логотипом Ауди.
        </div>
      </div>
      <div class="info__navigation">
        <router-link to="/catalog" class="navigation__catalog navigation">
          <div class="catalog__title title">Показать все товары</div>
          <div class="catalog__link link">
            Перейти в каталог <img src="@/static/arrow.svg" alt="" />
          </div>
        </router-link>
        <!-- Нужно передать реф с support в этот компонент и сделать прокрутку до support -->
        <router-link to="/" class="navigation__support navigation">
          <div class="support__title title">Не знаете что выбрать?</div>
          <div class="support__link link">
            Получить консультацию <img src="@/static/arrow.svg" alt="" />
          </div>
        </router-link>
      </div>
    </div>
    <div class="main-categories__products">
      <my-product />
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
.main-categories {
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  gap: 70px;
  &__info {
    max-width: 570px;
  }
  &__products {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
}
.info {
  &__navigation {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
.navigation {
  color: #000000;
  font-family: "Montserrat-Bold";
  padding: 25px;
  padding-right: 0;
  border-radius: 4px;
  border: 1px solid #000000;
  background: #e5e5e5;
  transition: all 0.5s ease 0s;
}
.navigation__catalog:hover {
  background: #ffffff;
  border-radius: 15px;
}
.navigation__support:hover {
  background: #ffffff;
  border-radius: 15px;
}
.text {
  &__title {
    font-family: "Montserrat-Bold";
    font-size: 35px;
    line-height: 22px;
    color: #f05454;
  }
  &__body {
    font-family: "OpenSans-Regular";
    margin-top: 25px;
    font-size: 24px;
    line-height: 38px;
  }
}
.title {
  font-size: 20px;
  line-height: 30px;
}
.link {
  color: #f05454;
  font-size: 14px;
  line-height: 19px;
}
</style>