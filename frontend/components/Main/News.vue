<script setup lang="ts">
import { formatDate } from "~/utils/formatDate";

interface IProps {
  card: INews
}

const props = defineProps<IProps>()
</script>

<template>
  <v-card :to="`/news/${card.slug}`" elevation="1" height="100%">
    <div class="d-flex flex-column h-100">
      <v-img :src="card.image"  width="100%" height="100%" max-height="220px" cover />
      <div class="pa-4 mb-2">
        <p class="mb-4 text-secondary">{{ formatDate(card.date, 'dots') }}</p>
        <p class="mb-4">{{ card.short_description }}</p>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss">
</style>