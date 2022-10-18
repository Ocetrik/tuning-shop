<template>
  <div class="app"><router-view /></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
// Стили кнопок
.btn {
  background: #f05454;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  border: #ffffff;
  transition: all 0.5s ease 0s;
  &:hover {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  }
}
</style>
