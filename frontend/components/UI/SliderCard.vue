<script setup lang="ts">
interface IProps {
  products: IProduct[];
  status?: "novelty" | "promo" | "top";
}

const props = defineProps<IProps>();
</script>

<template>
  <client-only>
    <div class="position-relative swiper-wrapper">
      <swiper-container
          :slides-per-view="4"
          :space-between="16"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1.2
            },
            600: {
              slidesPerView: 3
            },
            1025: {
              slidesPerView: 4
            }
          }"
          :css-mode="false"
          :loop="true"
          :navigation="{
            prevEl: `.ui-swiper-nav-el-prev.${status}`,
            nextEl: `.ui-swiper-nav-el-next.${status}`
          }"
          class="ui-swiper swiper-container"
      >
        <swiper-slide v-for="item in products" :key="item.title" class="h-auto">
          <UIProductCard :card="item" :status="status" />
        </swiper-slide>
      </swiper-container>

      <div class="ui-swiper-nav-el-prev" :class="status">
        <v-icon icon="mdi-chevron-left" color="primary" size="45" />
      </div>

      <div class="ui-swiper-nav-el-next" :class="status">
        <v-icon icon="mdi-chevron-right" color="primary" size="45" />
      </div>
    </div>
  </client-only>
</template>

<style lang="scss" scoped>
.ui-swiper-nav-el-prev,
.ui-swiper-nav-el-next {
  position: absolute;
  top: -70px;
}

.ui-swiper-nav-el-prev {
  right: 60px;

}
.ui-swiper-nav-el-next {
  right: 0;
}
</style>