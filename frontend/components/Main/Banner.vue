<script setup lang="ts">
import { ref, onMounted } from "vue";
import { register } from "swiper/element/bundle";
import { useDisplay } from "vuetify";

register();

const { width } = useDisplay()

const images = [
  "/banner/banner-1.png",
  "/banner/banner-2.png",
  "/banner/banner-3.png",
  "/banner/banner-5.png",
];

const DELAY = 4000;
const progressCircle = ref<SVGSVGElement | null>(null);
const progressContent = ref<HTMLSpanElement | null>(null);

const onAutoplayTimeLeft = (swiper: any, time: number, progress: number) => {
  if (progressCircle.value) {
    progressCircle.value.style.setProperty("--progress", (1 - progress).toString());
  }
  if (progressContent.value) {
    progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
  }
};

const swiperHeight = computed(() => {
  if (width.value < 600) return "200px";
  if (width.value < 960) return "300px";
  return "400px";
})

onMounted(() => {
  setTimeout(() => {
    const swiperEl = document.querySelector("swiper-container");
    if (swiperEl && swiperEl.swiper) {
      const swiperInstance = swiperEl.swiper;
      swiperInstance.on("autoplayTimeLeft", onAutoplayTimeLeft);
    } else {
      console.warn("Swiper instance not found");
    }
  }, 500);
});
</script>

<template>
  <client-only>
    <div class="position-relative swiper-wrapper">
      <swiper-container
          :direction="'vertical'"
          :height="400"
          :loop="true"
          :css-mode="false"
          :space-between="16"
          :navigation="{
            prevEl: '.swiper-nav-el-prev',
            nextEl: '.swiper-nav-el-next'
          }"
          :breakpoints="{
            0: {
              height: 200
            },
            600: {
              height: 300
            },
            960: {
              height: 400
            }
          }"
          class="swiper swiper-container"
          :style="{ height: swiperHeight }"
          :autoplay="{
            delay: DELAY,
             disableOnInteraction: false
          }"
      >
        <swiper-slide v-for="item in images" :key="item">
          <v-img :src="item" rounded="xl" height="100%" width="100%" cover />
        </swiper-slide>
      </swiper-container>

      <div class="swiper-nav-el-prev elevation-12">
        <v-icon icon="mdi-chevron-up" />
      </div>

      <div class="swiper-nav-el-next elevation-12">
        <div class="progress-button">
          <div class="autoplay-progress">
            <svg viewBox="0 0 48 48" ref="progressCircle">
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref="progressContent" v-if="false"></span>
          </div>
          <v-icon icon="mdi-chevron-down" />
        </div>
      </div>
    </div>
  </client-only>
</template>

<style lang="scss">
.swiper-wrapper {
  position: relative;
  width: 100%;
}

.swiper-nav-el-prev,
.swiper-nav-el-next {
  position: absolute;
  cursor: pointer;
  z-index: 30;
  background: rgb(var(--v-theme-background-card));
  border-radius: 100%;
  width: 44px;
  height: 44px;
  transition: background 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-nav-el-prev {
  transform: translateY(-50%);
  right: 10px;
  @media(min-width: 0px) {
    top: 30%;
  }
  @media(min-width: 600px) {
    top: 40%;
  }
  @media(min-width: 960px) {
    top: 45%;
  }
}

.swiper-nav-el-next {
  top: 60%;
  transform: translateY(-50%);
  right: 10px;
}

.progress-button {
  position: relative;
  display: flex;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  stroke-width: 2px;
  stroke: rgb(var(--v-theme-primary));
  fill: none;
  stroke-dasharray: 125.6;
  stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
  transform: rotate(-90deg);
}
</style>
