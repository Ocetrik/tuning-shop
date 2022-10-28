<template>
  <div class="footer">
    <div class="footer__info">
      <div class="info__logo">
        <router-link to="/"><img src="@/static/logo.png" alt="" /></router-link>
      </div>
      <div class="info__social">
        <div class="social__item">
          <img src="@/static/inst.svg" alt="" />
        </div>
        <div class="social__item">
          <img src="@/static/youtube.svg" alt="" />
        </div>
        <div class="social__item">
          <img src="@/static/tg.svg" alt="" />
        </div>
      </div>
      <div class="info__text">
        Интернет-магазин тюнинг-комплектующих для современных автомобилей Audi,
        Skoda, Seat, Porsche, BMW, Mercedes-Benz и др. Мы предлагаем только
        лучшие товары из Европы и США. Работаем напрямую с заводами, тем самым
        гарантируя отличные цены и сроки доставки.
      </div>
      <div class="info__copyright">© 2022 UrbanRacers</div>
    </div>
    <div class="footer__nav">
      <div class="nav__column">
        <div class="column__title">Страницы</div>
        <router-link to="/" class="column__url">Главная</router-link>
        <router-link to="/contacts" class="column__url">Контакты</router-link>
        <router-link to="/catalog" class="column__url">Каталог</router-link>
        <router-link to="/partners" class="column__url">Партнеры</router-link>
        <router-link to="/actual" class="column__url">Актуальное</router-link>
        <router-link to="/selection" class="column__url"
          >Подбор по автомобилю</router-link
        >
      </div>
      <div class="nav__column">
        <div class="column__title">Для покупателей</div>
        <div class="column__url">Доставка</div>
        <div class="column__url">Оплата</div>
        <div class="column__url">Возврат</div>
        <div class="column__url">Партнеры</div>
        <div class="column__url">Личный кабинет</div>
      </div>
      <div class="nav__column">
        <div class="column__title">Информация</div>
        <div class="column__url">Статьи</div>
        <div class="column__url">Видеообзоры</div>
        <div class="column__url">Бренды</div>
        <div class="column__url">Установочные центры</div>
      </div>
      <div class="nav__column">
        <div class="column__title">Правила</div>
        <div class="column__url">Пользовательское соглашение</div>
        <div class="column__url">Cookie</div>
        <div class="column__url">Правила оплаты</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  margin: 0 auto;
  padding-top: 60px;
  padding-left: 120px;
  margin-bottom: 25px;
  background: #f5f5f5;
  display: flex;
  &__info {
    max-width: 390px;
  }
  &__nav {
    display: flex;
    margin-left: 90px;
    gap: 80px;
  }
}
.info {
  padding-top: 30px;
  &__social {
    display: flex;
    gap: 25px;
    margin-top: 25px;
  }
  &__text {
    margin-top: 25px;
    font-family: "OpenSans-Regular";
    color: #6b7280;
    font-size: 16px;
    line-height: 24px;
  }
  &__copyright {
    color: #6b7280;
    font-size: 16px;
    line-height: 24px;
    font-family: "OpenSans-Regular";
    margin-top: 25px;
  }
}
.nav {
  &__column {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
.column {
  &__title {
    font-size: 14px;
    line-height: 150%;
    font-family: "OpenSans-SemiBold";
  }
  &__url {
    font-family: "OpenSans-Regular";
    color: #6b7280;
    font-size: 16px;
    line-height: 24px;
  }
  &__url:hover {
    color: #f05454;
  }
}
</style>