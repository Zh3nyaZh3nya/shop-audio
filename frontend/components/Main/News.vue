<script setup lang="ts">
const store = useStore()
</script>

<template>
  <div class="bg-background-card pa-4 rounded-lg">
    <v-row class="main-news-sheet-row">
      <v-col
          cols="12"
          sm="6"
          v-for="card in store.GET_NEWS_MAIN"
          :key="card.id"
      >
        <v-card
            :to="`/news/${card.slug}`"
            elevation="16"
            rounded="lg"
            height="100%"
            class="d-flex flex-column bg-background-card"
        >
          <v-img
              :src="card.image"
              width="100%"
              height="220px"
              max-height="220px"
              cover
          />
          <div class="pa-4 d-flex flex-column">
            <p class="mb-4 text-primary">{{ formatDate(card.date, 'dots') }}</p>
            <p>{{ card.short_description }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="my-4"/>
    <div class="d-flex justify-end">
      <nuxt-link to="/news" class="text-primary d-flex align-center">
        <p class="font-weight-medium">Перейти ко всем новостям</p>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
</style>