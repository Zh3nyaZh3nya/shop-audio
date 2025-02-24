<script setup lang="ts">
import { formatDate } from "~/utils/formatDate";

interface IProps {
  card: INews
}

const props = defineProps<IProps>()
</script>

<template>
  <v-card rounded="lg" :to="`/${card.slug}`" class="pa-4" :hover="false">
    <div class="d-flex flex-sm-row flex-column align-sm-center ga-4">
      <div>
        <v-img :src="card.image" rounded="lg" cover width="150px" height="150px" />
      </div>
      <div class="d-flex flex-column justify-space-between h-100">
        <p class="mb-4 text-primary font-weight-medium">{{ formatDate(card.date) }}</p>
        <h3 class="mb-4">{{ card.title }}</h3>
        <p>{{ card.short_description }}</p>
      </div>
    </div>
  </v-card>
</template>

<style scoped>

</style>