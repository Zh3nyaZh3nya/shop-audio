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
    <section class="main-news" v-if="store.GET_NEWS_MAIN">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="mb-8 d-flex align-center ga-2">
              <v-icon icon="mdi-newspaper" color="primary"></v-icon>
              Новости
            </h2>
            <MainNews />
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="mb-8 d-flex align-center ga-2">
              <v-icon icon="mdi-sale-outline" color="primary"></v-icon>
              Акции
            </h2>
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