<template>
<!-- UI - Элемент селектора -->
  <div class="select">
    <select>
      <option value="">Выберите марку автомобиля</option>
      <option>Volkswagen</option>
      <option>Audi</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.select select {
  font-size: 14px;
  line-height: 19px;
  border: 0.8px solid #d9d9d9;
  border-radius: 2px;
  padding: 11px 125px 11px 15px;
}
</style>