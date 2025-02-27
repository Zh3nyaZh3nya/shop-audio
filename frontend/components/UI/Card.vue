<script setup lang="ts">
import { useStatus } from "~/composable/status";

interface IProps {
  card: IProduct
  status?: 'novelty' | 'promo' | 'top'
}

const props = defineProps<IProps>()
</script>

<template>
  <v-card
      :to="status ? `/catalog-${status}/${card.slug}` : `/catalog/${card.category}/${card.subcategory}/${card.slug}`"
      height="100%"
      elevation="6"
      class="bg-background-card d-flex flex-column ui-card position-relative"
  >
    <div class="ui-card-chip d-flex flex-column align-start ga-2">
      <v-chip
          v-for="chip in card.status"
          :key="chip"
          :color="useStatus(chip).value.color"
          variant="flat"
          class="mr-1 px-2 text-body-2 rounded-s-0 rounded-e-lg"
      >
        {{ useStatus(chip).value.word }}
      </v-chip>
    </div>
    <v-img :src="card.image[0]" height="300px" max-height="300px" cover width="100%" />
    <div class="pa-4 card-content d-flex flex-column flex-grow-1">
      <h6 class="text-body-1 mb-2" style="max-width: 200px">{{ card.title }}</h6>
      <p class="text-h6 mt-auto" v-if="!card.status?.includes('PROMO') && !card.percent_promo">{{ card.price }} ₸</p>
      <div v-else class="mt-auto">
        <div class="d-flex align-center ga-2">
          <p class="text-decoration-line-through-custom text-body-2">{{ card.price }} ₸</p>
          <v-chip
              v-if="card.status?.includes('PROMO')"
              :color="useStatus('PROMO').value.color"
              variant="flat"
              class="mr-1 px-1 text-body-2 rounded-lg"
              size="10"
          >
            -{{ card.percent_promo }}%
          </v-chip>
        </div>
        <p class="text-h6">{{ Math.floor(card.price - (card.price / card.percent_promo)) }} ₸</p>
      </div>
      <div class="d-flex align-center ga-2 mt-4">
        <v-btn color="primary" size="large" class="flex-grow-1 text-body-1 px-1" height="35" rounded="lg">
          В корзину
        </v-btn>
        <v-btn size="large" color="background-card" class="hover px-0" height="35" min-width="50" rounded="lg">
          <v-icon icon="mdi-heart" size="24" />
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss">
.ui-card {
  position: relative;
  &-chip {
    position: absolute;
    top: 15px;
    z-index: 2;
  }
}
</style>