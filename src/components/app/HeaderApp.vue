<template>
  <div class="header">
    <div class="header-login">
      <div class="header-login-wrapper">
        <div class="header-login__region">
          <div class="region-title">Регион:</div>
          <div class="region-item">
            {{ this.selectedRegion }}
          </div>
          <div v-if="listVisible" class="region-list">
            <my-drop v-model:listVisible="listVisible">
              <div
                @click="selectRegion(region)"
                v-for="region in regions"
                :key="region.id"
                class="region-list__item"
              >
                {{ region.title }}
              </div>
            </my-drop>
          </div>
          <div class="region-arrow-menu">
            <button @click="openRegionMenu" class="region-btn">
              <img src="@/static/gray-arrow.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="header-login__user">
          <div class="user__phone">
            <div class="phone-icon">
              <img src="@/static/phone.png" alt="" />
            </div>
            <div class="phone-number">+32 (0) 15 28 76 67</div>
          </div>
          <div class="user__user-info">
            <div class="user-icon">
              <img src="@/static/user.png" alt="" />
            </div>
            <div v-if="userMenuVisible" class="user-menu">
              <my-drop v-model:operUserMenu="operUserMenu">
                <div @click="closeUserMenu" class="user-menu">
                  <div v-if="isUserAuth" class="user-menu-auth">
                    <router-link to="/users" class="user-menu__menu-link">
                      Личный кабинет
                    </router-link>
                    <div @click="signOut" class="user-menu__menu-link">
                      Выйти
                    </div>
                  </div>
                  <div v-if="!isUserAuth" class="user-menu-unauth">
                    <div class="user-menu__menu-link">
                      Зарегистрироваться
                    </div>
                    <div @click="signIn" class="user-menu__menu-link">
                      Войти
                    </div>
                  </div>
                </div>
              </my-drop>
            </div>
            <div class="user-name">Евграфий Евграфьевич</div>
            <div class="user-arrow-menu">
              <button @click="openUserMenu" class="user-btn">
                <img src="@/static/gray-arrow.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="header-main__logo">
        <router-link to="/"><img src="@/static/logo.png" alt="" /></router-link>
      </div>
      <div class="header-main__navigation">
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
      <div class="header-main__basket">
        <router-link to="/cart">
          <img src="@/static/basket.png" alt="" />
        </router-link>
      </div>
      <div class="header-main__selection">
        <button class="selection-btn btn">Подбор по автомобилю</button>
      </div>
    </div>
  </div>
</template>

<script>
import { STATIC_REGIONS } from "@/data/STATIC_REGIONS.js";

export default {
  name: "HeaderApp",
  components: STATIC_REGIONS,
  data: () => ({
    regions: STATIC_REGIONS,
    selectedRegion: "Махачкала",
    listVisible: false,
    userMenuVisible: false,
    isUserAuth: true,
  }),
  methods: {
    selectRegion(region) {
      this.selectedRegion = region.title;
      this.listVisible = false;
    },
    openUserMenu() {
      this.userMenuVisible = true;
    },
    openRegionMenu() {
      this.listVisible = true;
    },
    signIn() {
      this.isUserAuth = true;
      this.userMenuVisible = false;
    },
    signOut() {
      this.isUserAuth = false;
      this.userMenuVisible = false;
    },
    closeUserMenu() {
      this.userMenuVisible = false;
    },
  },
};
</script>

<style scoped lang="scss">
.header-login {
  font-size: 14px;
  width: 100%;
  background: #f1f1f1;

  &__region {
    font-family: "OpenSans-Regular";
    display: flex;
    gap: 5px;
  }
  &__user {
    font-family: "OpenSans-Semibold";
    display: flex;
  }
}
.user {
  &__user-info {
    display: flex;
    gap: 10px;
    padding-left: 20px;
  }
  &__phone {
    color: #f05454;
    display: flex;
    gap: 10px;
    border-right: 1px solid #000000;
    padding-right: 20px;
  }
}
.header-login-wrapper {
  margin: 0 120px;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
}
.header-main {
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
a:hover {
  color: #f05454;
}
.region-list {
  font-family: "OpenSans-Regular";
  position: absolute;
  left: 50px;
  top: 40px;
  background: #ffffff;
  font-size: 18px;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.04),
    0px 0px 12px rgba(0, 0, 0, 0.04);
  &__item {
    padding: 20px;
    cursor: pointer;
    &:hover {
      background: #f1f1f1;
    }
  }
}
.user-menu {
  font-family: "OpenSans-Regular";
  position: absolute;
  top: 20px;
  background: #ffffff;
  font-size: 18px;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.04),
    0px 0px 12px rgba(0, 0, 0, 0.04);
  &-auth {
    display: flex;
    flex-direction: column;
  }
  &__menu-link {
    padding: 20px;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      background: #f1f1f1;
      color: #000000
    }
  }
}

.selection-btn {
  max-height: 52px;
  font-size: 16px;
  line-height: 22px;
  padding: 15px 70px;
}
button {
  cursor: pointer;
}
</style>


