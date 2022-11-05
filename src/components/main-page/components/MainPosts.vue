<template>
  <div class="main-posts">
    <div class="main-posts__bg">
      <img src="@/static/posts/bg-posts.png" alt="" />
    </div>
    <div class="main-posts__title">Актуальное</div>
    <div class="main-posts__selection">
      <button
        v-for="item in selectionItems"
        :key="item"
        :class="selectedSection === item ? 'active' : ''"
        @click="setSelectedSection(item)"
        class="selection__items"
      >
        {{ item }}
      </button>
    </div>
    <div class="main-posts__posts">
      <div class="main-posts__news">
        <my-news v-if="isOpenNews" />
      </div>
      <div class="main-posts__actions">
        <my-actions v-if="isOpenActions" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpenActions: true,
    isOpenNews: true,
    selectedSection: "",
    selectionItems: ["Все", "Новости", "Акции"],
  }),
  methods: {
    setSelectedSection(section) {
      this.selectedSection = section;
      if (this.selectedSection === "Акции") {
        this.isOpenActions = true;
      } else {
        this.isOpenActions = false;
      }
      if (this.selectedSection === "Новости") {
        this.isOpenNews = true;
      } else {
        this.isOpenNews = false;
      }
      if (this.selectedSection === "Все") {
        this.isOpenNews = true;
        this.isOpenActions = true;
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.main-posts {
  margin-top: 60px;
  margin-bottom: 190px;
  &__posts {
    display: flex;
  }
  &__bg {
    position: absolute;
    left: 0;
    z-index: -1;
    img {
      max-width: 100%;
    }
  }
  &__title {
    padding-top: 60px;
    font-family: "Montserrat-Bold";
    font-size: 35px;
    line-height: 22px;
    color: #ffffff;
  }
  &__selection {
    margin-top: 35px;
    color: #ffffff;
    display: flex;
  }
  &__news {
    display: flex;
    gap: 10px;
    // overflow-x: hidden;
    margin-top: 55px;
  }
  &__actions {
    display: flex;
    gap: 10px;
    // overflow-x: hidden;
    margin-top: 55px;
  }
}
.active {
  background: #f05454;
}
.selection__items {
  cursor: pointer;
  padding: 12px 24px;
}
</style>