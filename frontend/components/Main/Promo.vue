<script setup lang="ts">
import { useStatus } from "@/composable/status";

const store = useStore()
</script>

<template>
  <div class="bg-background-card pa-4 rounded-lg">
    <v-row class="main-news-sheet-row h-100">
      <v-col
          cols="12"
          sm="6"
          v-for="card in store.GET_PROMO_MAIN"
          :key="card.id"
      >
        <v-card
            :to="`/promo/${card.slug}`"
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
          <div class="pa-4 mb-2">
            <p class="mb-4 text-primary">{{ formatDate(card.date_from) }} – {{ formatDate(card.date_to) }}</p>
            <p>{{ card.short_description }}</p>
            <v-chip
                :color="useStatus(card.status).value.color"
                variant="outlined"
                class="mt-4"
            >
              {{ useStatus(card.status).value.word }}
            </v-chip>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="my-4"/>
    <div class="d-flex justify-end">
      <nuxt-link to="/promo" class="text-primary d-flex align-center">
        <p class="font-weight-medium">Перейти ко всем акциям</p>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>

</style>