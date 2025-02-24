<script setup lang="ts">
const store = useStore()
</script>

<template>
  <v-main>
    <section class="main-news" v-if="store.GET_NEWS_MAIN">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="mb-8 d-flex align-center ga-2">
              <v-icon icon="mdi-newspaper" color="secondary"></v-icon>
              Новости
            </h2>
            <v-sheet class="main-news-sheet pb-4 px-4">
              <v-row class="main-news-sheet-row">
                <v-col cols="12" md="6" v-for="card in store.GET_NEWS_MAIN" :key="card.id">
                  <MainNews :card="card" />
                </v-col>
              </v-row>
              <v-divider class="my-4"/>
              <div class="d-flex justify-end">
                <nuxt-link to="/news" class="text-secondary d-flex align-center">
                  <p class="font-weight-medium">Перейти ко всем новостям</p>
                  <v-icon icon="mdi-chevron-right"></v-icon>
                </nuxt-link>
              </div>

            </v-sheet>
          </v-col>
          <v-col cols="12" md="6"></v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>

<style lang="scss">
</style>