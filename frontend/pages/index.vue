<script setup lang="ts">
const store = useStore()
</script>

<template>
  <v-main>
    <section class="mb-8">
      <v-container>
        <MainBanner />
      </v-container>
    </section>
    <section class="mb-4">
      <v-container>
        <h2 class="mb-8 d-flex align-center ga-2 text-h5 font-weight-bold">
          <v-icon icon="mdi-fire" color="primary" size="45"></v-icon>
          Новинки
        </h2>
        <UISlider :products="store.GET_STATUS_PRODUCTS('NEW', true)" status="novelty" key="novelty"/>
      </v-container>
    </section>
    <section class="mb-4 bg-background-card py-6">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <MainBlock :image="'/main/main-1.png'" :title="'Усилители и ресиверы'" :link="'/'" />
          </v-col>
          <v-col cols="12" md="6">
            <MainBlock :image="'/main/main-2.png'" :title="'Акустические системы'" :link="'/'" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="mb-4">
      <v-container>
        <h2 class="mb-8 d-flex align-center ga-2 text-h5 font-weight-bold">
          <v-icon icon="mdi-sale-outline" color="primary" size="45"></v-icon>
          Акции
        </h2>
        <UISlider :products="store.GET_STATUS_PRODUCTS('PROMO', true)" status="promo" key="promo"/>
      </v-container>
    </section>
    <section class="mb-4 bg-background-card py-6">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <MainBlock :image="'/main/main-3.png'" :title="'Музыкальные инструменты'" :link="'/'" />
          </v-col>
          <v-col cols="12" md="6">
            <MainBlock :image="'/main/main-4.png'" :title="'Микрофоны и студийное оборудование'" :link="'/'" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="mb-4">
      <v-container>
        <h2 class="mb-8 d-flex align-center ga-2 text-h5 font-weight-bold">
          <v-icon icon="mdi-trophy-award" color="primary" size="45"></v-icon>
          Топ продукты
        </h2>
        <UISlider :products="store.GET_STATUS_PRODUCTS('TOP_PRODUCT', true)" status="top" key="top"/>
      </v-container>
    </section>
    <section class="mb-4 bg-background-card py-6">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <MainBlock :image="'/main/main-5.png'" :title="'Наушники'" :link="'/'" />
          </v-col>
          <v-col cols="12" md="6">
            <MainBlock :image="'/main/main-6.png'" :title="'Ламповый звук'" :link="'/'" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="main-news" v-if="store.GET_NEWS_MAIN">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h3 class="mb-8 d-flex align-center ga-2 text-h5 font-weight-bold">
              <v-icon icon="mdi-newspaper" color="primary" size="45"></v-icon>
              Новости
            </h3>
            <MainNews />
          </v-col>
          <v-col cols="12" md="6">
            <h4 class="mb-8 d-flex align-center ga-2 text-h5 font-weight-bold">
              <v-icon icon="mdi-sale-outline" color="primary" size="45"></v-icon>
              Акции
            </h4>
            <MainPromo />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container>
        <MainDescription />
      </v-container>
    </section>
  </v-main>
</template>

<style lang="scss">
</style>