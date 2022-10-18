<template>
<!-- Хедер -->
  <div class="main-page__header">
    <div class="header__logo">
      <img src="@/static/logo.png" alt="" />
    </div>
    <div class="header__navigation">
      <div class="navigation-item">главная</div>
      <div class="navigation-item">каталог</div>
      <div class="navigation-item">информация</div>
      <div class="navigation-item">контакты</div>
      <div class="navigation-item">еще...</div>
    </div>
    <div class="header__basket">
      <img src="@/static/basket.png" alt="" />
    </div>
    <div class="header__selection">
      <button class="selection-btn btn">Подбор по автомобилю</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.main-page__header {
  max-width: 1680px;
  min-height: 80px;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.04),
    0px 0px 12px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  width: 100%;
  display: flex;
  margin-top: 25px;
  align-items: center;
}

.header {
  &__logo {
    margin-left: 2%;
  }

  &__navigation {
    text-transform: uppercase;
    display: flex;
    gap: 10%;
    margin-left: 2%;
  }

  &__basket {
    margin-left: 41%;
  }

  &__selection {
    margin-left: 2%;
  }
}

.selection-btn {
  max-height: 52px;
  font-size: 16px;
  line-height: 22px;
  padding: 15px 80px;
}
</style>