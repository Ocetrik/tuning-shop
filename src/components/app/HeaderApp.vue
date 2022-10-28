<template>
  <!-- Хедер -->
  <div class="header">
    <div class="header__logo">
      <router-link to="/"><img src="@/static/logo.png" alt="" /></router-link>
    </div>
    <div class="header__navigation">
      <div class="navigation-item">
        <router-link to="/">главная</router-link>
      </div>
      <div class="navigation-item">
        <router-link to="/catalog">каталог</router-link>
      </div>
      <div class="navigation-item">
        <router-link to="/information">информация</router-link>
      </div>
      <div class="navigation-item">
        <router-link to="/contacts">контакты</router-link>
      </div>
    </div>
    <div class="header__basket">
      <router-link to="/cart">
        <img src="@/static/basket.png" alt="" />
      </router-link>
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
.header {
  font-family: "OpenSans-Semibold";
  margin: 0 auto;
  max-width: 1680px;
  min-height: 80px;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.04),
    0px 0px 12px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  width: 100%;
  display: flex;
  margin-top: 25px;
  align-items: center;
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
.navigation-item:hover {
  color: #f05454;
}

.selection-btn {
  max-height: 52px;
  font-size: 16px;
  line-height: 22px;
  padding: 15px 70px;
}
</style>


