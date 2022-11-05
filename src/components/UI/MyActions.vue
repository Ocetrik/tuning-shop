<template>
  <!-- router-link -->
  <div v-for="action in ourActions" :key="action.id" class="action">
    <div class="action__img">
      <img :src="action.img" alt="" />
    </div>
    <div class="action__title">
      {{ action.title }}
    </div>
    <div class="action__body">
      {{ action.body }}
    </div>
    <div class="action__date">
      {{ action.date }}
    </div>
    <div class="actions__category">Акции</div>
  </div>
</template>

<script>
import { STATIC_ACTIONS } from "@/data/STATIC_ACTIONS.js";

export default {
  data: () => ({
    ourActions: STATIC_ACTIONS,
  }),
  components: STATIC_ACTIONS,
};
</script>

<style scoped lang="scss">
.action {
  padding: 18px;
  box-shadow: 0px 28px 104px rgba(41, 41, 41, 0.15);
  border-radius: 4px;
  max-width: 355px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  &__title {
    font-size: 18px;
    line-height: 25px;
    font-family: "OpenSans-Semibold";
  }
  &__body {
    font-size: 14px;
    line-height: 140%;
    font-family: "OpenSans-Regular";
    color: #8a8e85;
  }
  &__date {
    font-family: "OpenSans-Regular";
    font-size: 16px;
    line-height: 20px;
  }
}
</style>