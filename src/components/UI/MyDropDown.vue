<template>
  <div class="drop-list">
    <div class="drop-list__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-drop-list",
  data: () => ({}),
  props: {
    listVisible: {
      type: Boolean,
      default: false,
    },
    userMenuVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideList() {
      this.$emit("update:listVisible", false);
    },
    hideUserMenu() {
      this.$emit("update:userMenuVisible", false);
    },
  },
};
</script>

<style scoped>
</style>