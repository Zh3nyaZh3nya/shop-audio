<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore from "swiper";

// импорт стилей
import "swiper/css";
import "swiper/css/thumbs";
import {useStatus} from "~/composable/status";

interface IProps {
  images: string[];
  statuses: statusProduct[] | undefined
}

const props = defineProps<IProps>();

const thumbsSwiper = ref<SwiperCore>();

</script>

<template>
  <client-only>
    <div class="gallery-wrapper">
      <Swiper
          :thumbs="{ swiper: thumbsSwiper }"
          space-between="10"
          class="main-swiper bg-background rounded-lg position-relative"
      >
        <SwiperSlide v-for="(img, i) in props.images" :key="i" class="h-auto">
          <v-img :src="img" class="rounded-lg" max-height="300px" height="100%" width="100%" cover />
        </SwiperSlide>
        <div class="gallery-wrapper-chip d-flex flex-column align-start ga-2">
          <v-chip
              v-for="chip in statuses"
              :key="chip"
              :color="useStatus(chip).value.color"
              variant="flat"
              class="mr-1 px-2 text-body-2 rounded-s-0 rounded-e-lg"
          >
            {{ useStatus(chip).value.word }}
          </v-chip>
        </div>
      </Swiper>

      <Swiper
          :onSwiper="(swiper) => (thumbsSwiper = swiper)"
          space-between="10"
          :slides-per-view="4.1"
          watch-slides-progress
          class="thumbs-swiper"
      >
        <SwiperSlide v-for="(img, i) in props.images" :key="i" class="h-auto">
          <v-img :src="img" class="rounded-lg thumb-image" width="100%" height="100%" max-height="80px" cover />
        </SwiperSlide>
      </Swiper>
    </div>
  </client-only>
</template>

<style lang="scss">
.gallery-wrapper {
  width: 100%;
  max-width: 800px;
  margin: auto;

  &-chip {
    position: absolute;
    top: 15px;
    z-index: 2;
  }

  .thumbs-swiper {
    margin-top: 10px;

    .thumb-image {
      cursor: pointer;
      width: 100%;
      height: auto;
      border: 2px solid transparent;
      border-radius: 4px;
      transition: border-color 0.3s;

      &:hover {
        border-color: rgb(var(--v-theme-primary));
      }
    }
    .swiper-slide-thumb-active .thumb-image {
      border-color: rgb(var(--v-theme-primary));
    }
  }
}
</style>
