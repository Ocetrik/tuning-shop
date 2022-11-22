<template>
  <div class="app">
    <div class="app-header">
      <header-app />
    </div>
    <router-view />
    <div class="app-footer">
      <footer-app />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/index.css";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
input, textarea, button, select {
	font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
    border: inherit;
}

a {
  color: #000000;
}

// Стили кнопок

.btn {
  font-family: "OpenSans-Semibold";
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
