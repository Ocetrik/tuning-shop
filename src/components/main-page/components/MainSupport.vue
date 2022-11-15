<template>
  <!-- Компонент связи с ТП -->
  <div class="main-support">
    <div ref="slaid-1" class="main-support__content">
      <div class="content__title">Мы готовы ответить на все ваши вопросы!</div>
      <div class="content__form">
        <div class="form__input-field">
          <div class="input-field__email">
            <div class="email__title">Email</div>
            <div class="email__input input">
              <input
                v-model="state.email"
                placeholder="Введите email"
                type="text"
              />
              <div v-if="v$.email.$error">
                {{ v$.email.$errors[0].$message }}
              </div>
            </div>
          </div>
          <div class="input-field__phone">
            <div class="phone__title">Телефон</div>
            <div class="phone__input input">
              <input
                v-model="state.phone"
                placeholder="Введите телефон"
                type="number"
              />
              <div v-if="v$.phone.$error">
                {{ v$.phone.$errors[0].$message }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
        <button @click="submitForm" class="content__btn btn">
          Задать вопрос
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength, numeric } from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      email: "",
      phone: "",
    });
    const rules = computed(() => {
      return {
        email: { required, email, minLength: minLength(6) },
        phone: { required, numeric, minLength: minLength(6) },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$ };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("succ");
      } else {
        console.log("fail");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.main-support {
  &__content {
    padding: 50px 70px;
    margin-top: 90px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 2px 52px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.3);
  }
}
.content {
  &__title {
    font-family: "Montserrat-Bold";
    font-size: 35px;
    line-height: 45px;
    max-width: 490px;
  }
  &__btn {
    padding: 18px 30px;
    font-size: 16px;
    line-height: 25px;
    margin-left: 80px;
    margin-top: 15px;
    box-shadow: 0px 0px 32px rgba(252, 10, 10, 0.4),
      0px 2px 3px rgba(232, 6, 6, 3);
  }
}
.form__input-field {
  font-size: 14px;
  line-height: 20px;
  display: flex;
  gap: 10px;
  font-family: "OpenSans-Semibold";
}
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.input-field {
  &__email {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__phone {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
.email__input input {
  padding: 11px;
  padding-right: 200px;
}
.phone__input input {
  padding: 11px;
  padding-right: 200px;
}
.input input {
  font-family: "OpenSans-Regular";
  font-size: 14px;
  line-height: 19px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  width: 355px;
  padding: 15px 15px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>