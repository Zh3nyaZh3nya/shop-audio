<script setup lang="ts">
const store = useStore()
</script>

<template>
  <v-sheet class="main-news-sheet pb-4 px-4" rounded="lg">
    <v-row class="main-news-sheet-row">
      <v-col cols="12" md="6" v-for="card in store.GET_PROMO_MAIN" :key="card.id">
        <v-card :to="`/promo/${card.slug}`" elevation="1" height="100%">
          <div class="d-flex flex-column h-100">
            <v-img :src="card.image"  width="100%" height="100%" max-height="220px" cover />
            <div class="pa-4 mb-2">
              <p class="mb-4 text-secondary">{{ formatDate(card.date_from) }} – {{ formatDate(card.date_to) }}</p>
              <p class="mb-4 pb-4">{{ card.short_description }}</p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="my-4"/>
    <div class="d-flex justify-end">
      <nuxt-link to="/promo" class="text-secondary d-flex align-center">
        <p class="font-weight-medium">Перейти ко всем акциям</p>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </nuxt-link>
    </div>
  </v-sheet>
</template>

<style scoped>

</style>