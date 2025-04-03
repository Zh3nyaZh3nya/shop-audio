<script setup lang="ts">
import { useStatus } from "~/composable/status";

interface IProps {
  card: IProduct
  status?: statusPage
}

const props = defineProps<IProps>()
const store = useStore()

const notification = ref()
</script>

<template>
  <v-card
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
    <nuxt-link
        :to="status ? `/catalog-${status}/${card.slug}` : `/catalog/${card.slug_category}/${card.slug_subcategory}/${card.slug}`"
    >
      <v-img :src="card.image[0]" height="300px" max-height="300px" cover width="100%" />
    </nuxt-link>
    <div class="pa-4 card-content d-flex flex-column flex-grow-1">
      <nuxt-link
          :to="status ? `/catalog-${status}/${card.slug}` : `/catalog/${card.slug_category}/${card.slug_subcategory}/${card.slug}`"
          class="mb-4"
      >
        <h6 class="text-body-1 mb-2" style="max-width: 200px">{{ card.title }}</h6>
        <p
            class="text-h6 mt-auto"
            v-if="!card.status?.includes('PROMO') && !card.percent_promo"
        >
          {{ Number(card.price).toLocaleString('ru-RU') }} ₸
        </p>
        <div v-else class="mt-auto">
          <div class="d-flex align-center ga-2">
            <p class="text-decoration-line-through-custom text-body-2">{{ Number(card.price).toLocaleString('ru-RU') }} ₸</p>
            <v-chip
                v-if="card.status?.includes('PROMO')"
                :color="useStatus('PROMO').value.color"
                variant="flat"
                class="mr-1 px-1 text-body-2 rounded-lg"
                size="10"
            >
              -{{ Number(card.percent_promo).toLocaleString('ru-RU') }}%
            </v-chip>
          </div>
          <p class="text-h6">{{ Math.floor(Number(card.price) - (Number(card.price) / Number(card.percent_promo))).toLocaleString('ru-RU') }} ₸</p>
        </div>
      </nuxt-link>

      <div class="d-flex align-center ga-2 mt-auto">
        <v-btn
            v-if="!store.cart.find((item: IProductCart) => item.title === card.title)"
            color="primary"
            size="large"
            class="flex-grow-1 text-body-1 px-1"
            height="35"
            rounded="lg"
            @click="
              store.setCart(card, 1, 'add');
              notification.showNotification('Товар добавлен в корзину!')
            "
        >
          В корзину
        </v-btn>
        <v-btn
            v-else
            color="accent"
            size="large"
            class="flex-grow-1 text-body-1 px-1"
            height="35"
            rounded="lg"
            @click="
              store.setCart(card, 1, 'remove');
              notification.showNotification('Товар удален из корзины', 'error')
            "
        >
          Удалить из корзины
        </v-btn>
        <v-btn
            v-if="!store.favorites.find((item: IProduct) => item.title === card.title)"
            size="large"
            color="background-card"
            class="hover px-0"
            height="35"
            min-width="50"
            rounded="lg"
            @click="
              store.setFavorites(card, 'add');
              notification.showNotification('Товар добавлен в избранное!')
            "
        >
          <v-icon icon="mdi-heart" size="24" />
        </v-btn>
        <v-btn
            v-else
            size="large"
            color="background-card"
            class="hover-error px-0"
            height="35"
            min-width="50"
            rounded="lg"
            @click="
              store.setFavorites(card, 'remove');
              notification.showNotification('Товар удален из избранного', 'error')
            "
        >
          <v-icon icon="mdi-heart-broken" size="24" />
        </v-btn>
      </div>
    </div>
  </v-card>
  <UINotification ref="notification" />
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