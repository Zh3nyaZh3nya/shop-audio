<script setup lang="ts">
interface IProps {
  card: IProductCart
}

const props = defineProps<IProps>()
const store = useStore()

const notification = ref()
const countProducts = ref(props.card.countCart)

</script>

<template>
  <v-card class="bg-background d-flex flex-column flex-md-row" min-height="130px">
    <div class="d-flex flex-wrap">
      <v-img :src="card.image[0]" width="230px" min-height="130px" height="100%" rounded="lg" cover class="mb-4" />
      <div class="d-flex d-md-none flex-column pt-0 pb-2 px-4 pa-sm-4">
        <h2 class="text-h6 font-weight-regular" style="max-width: 390px;">{{ card.title }}</h2>
        <div class="d-flex align-center flex-wrap mb-2">
          <v-btn
              class="hover-error px-0 mr-2"
              min-width="0"
              variant="text"
              @click="
                store.setCart(card, card.countCart, 'remove');
                notification.showNotification('Товар удален из корзины', 'error')
              "
          >
            <div class="d-flex align-center ga-1">
              <v-icon icon="mdi-trash-can-outline" size="20" />
              <span class="text-body-2 font-weight-regular">Удалить из корзины</span>
            </div>

          </v-btn>
          <v-btn
              v-if="!store.favorites.find((item: IProduct) => item.title === card.title)"
              class="hover px-0"
              min-width="0"
              variant="text"
              @click="
                store.setFavorites((({ countCart, ...product }) => product)(card));
                notification.showNotification('Товар добавлен в избранное')
              "
          >
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-heart-plus" size="20" />
              <span class="text-body-2 font-weight-regular">Добавить в избранное</span>
            </div>
          </v-btn>
          <v-btn
              v-else
              class="hover-error px-0"
              min-width="0"
              variant="text"
              @click="
                store.setFavorites(card, 'remove');
                notification.showNotification('Товар удален из избранного', 'error')
              "
          >
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-heart-minus" size="20" />
              <span class="text-body-2 font-weight-regular">Удалить из избранного</span>
            </div>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="py-2 px-4 d-flex flex-column w-100">
      <div class="d-none d-md-flex flex-column">
        <h2 class="text-h6 font-weight-regular" style="max-width: 390px;">{{ card.title }}</h2>
        <div class="d-flex align-center ga-4 mb-2">
          <v-btn
            class="hover-error px-0"
            min-width="0"
            variant="text"
            @click="
              store.setCart(card, card.countCart, 'remove');
              notification.showNotification('Товар удален из корзины', 'error')
            "
          >
            <div class="d-flex align-center ga-1">
              <v-icon icon="mdi-trash-can-outline" size="20" />
              <span class="text-body-2 font-weight-regular">Удалить из корзины</span>
            </div>

          </v-btn>
          <v-btn
            v-if="!store.favorites.find((item: IProduct) => item.title === card.title)"
            class="hover px-0"
            min-width="0"
            variant="text"
            @click="
              store.setFavorites((({ countCart, ...product }) => product)(card));
              notification.showNotification('Товар добавлен в избранное')
            "
          >
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-heart-plus" size="20" />
              <span class="text-body-2 font-weight-regular">Добавить в избранное</span>
            </div>
          </v-btn>
          <v-btn
              v-else
              class="hover-error px-0"
              min-width="0"
              variant="text"
              @click="
                store.setFavorites(card, 'remove');
                notification.showNotification('Товар удален из избранного', 'error')
              "
          >
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-heart-minus" size="20" />
              <span class="text-body-2 font-weight-regular">Удалить из избранного</span>
            </div>
          </v-btn>
        </div>
      </div>
      <div class="d-flex flex-column align-center align-sm-start">
        <div class="d-flex align-center ga-4">
          <v-btn
              class="rounded-lg"
              color="background-card"
              elevation="0"
              icon="mdi-minus"
              @click="card.countCart > 1 && store.updateCountProduct(card.title, card.countCart - 1)"
          />
          <p class="text-h5 text-center" style="min-width: 30px">{{ card.countCart }}</p>
          <v-btn
              class="rounded-lg"
              color="background-card"
              elevation="0"
              icon="mdi-plus"
              @click="card.countCart < Number(card.count) && store.updateCountProduct(card.title, card.countCart + 1)"
          />
        </div>
        <div class="mt-2 ml-sm-10" v-if="card.percent_promo && Math.floor((Number(card.price) - (Number(card.price) / Number(card.percent_promo)))) !== totalPrice">
          {{ Math.floor((Number(card.price) - (Number(card.price) / Number(card.percent_promo)))).toLocaleString('ru-RU') }}₸/шт.
        </div>
        <div class="mt-2 ml-sm-10" v-else-if="!card.percent_promo && Number(card.price) !== totalPrice">
          {{ Number(card.price).toLocaleString('ru-RU') }}₸/шт.
        </div>
        <div v-else style="height: 32px"></div>
      </div>
      <div class="text-center text-sm-start w-100 mt-2">
        <p>Общая сумма: {{ card.totalPrice.toLocaleString('ru-RU') }}₸</p>
        <p>На складе: {{ card.count }} шт.</p>
        <p v-if="card.percent_promo">Товар со скидкой: <label class="text-primary">{{ card.percent_promo }}%</label></p>
      </div>
    </div>
  </v-card>
  <UINotification ref="notification" />
</template>

<style scoped>

</style>