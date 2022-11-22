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
      <div class="main-posts__news"></div>
      <div class="main-posts__actions"></div>
    </div>
    <!-- Сделать чтобы все грузилось из отдельного компонента -->
    <splide :options="options">
      <splide-slide :class="isOpenActions ? 'actions-active': 'actions-disable'" v-for="action in ourActions" :key="action.id">
        <div class="action">
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
      </splide-slide>
      <splide-slide :class="isOpenNews ? 'news-active': 'news-disable'" v-for="news in ourNews" :key="news.id">
        <div class="news">
          <div class="news__img">
            <img :src="news.img" alt="" />
          </div>
          <div class="news__title">
            {{ news.title }}
          </div>
          <div class="news__body">
            {{ news.body }}
          </div>
          <div class="news__date">
            {{ news.date }}
          </div>
          <div class="news__category">Новости</div>
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";
import "@splidejs/vue-splide/css";
import { STATIC_ACTIONS } from "@/data/STATIC_ACTIONS.js";
import { STATIC_NEWS } from "@/data/STATIC_NEWS.js";

export default defineComponent({
  data: () => ({
    ourActions: STATIC_ACTIONS,
    ourNews: STATIC_NEWS,
    options: {
      perPage: 4,
      arrows: false,
      pagination: false,
      wheel: true,
      gap: "-13rem"
    },
    isOpenActions: true,
    isOpenNews: true,
    selectedSection: "Все",
    selectionItems: ["Все", "Новости", "Акции"],
  }),
  components: { Splide, SplideSlide },
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
});
</script>

<style scoped lang="scss">
.news-disable {
  display: none;
}
.actions-disable {
  display: none;
}
.news {
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
.main-posts {
  margin-top: 60px;
  margin-bottom: 160px;
  &__posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 55px;
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
    overflow-x: hidden;
  }
  &__actions {
    display: flex;
    gap: 10px;
    overflow-x: hidden;
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