<script setup lang="ts">

const store = useStore()

const crumbs: ICrumbs[] = [
  {
    title: 'Главная',
    disabled: false,
    href: '/',
  },
  {
    title: 'Корзина',
    disabled: true,
    href: '/favorites',
  },
]

const promocode = ref('sofa')

const totalPriceProducts = computed(() => {
  return store.cart.reduce((acc, item) => {
    return acc + item.totalPrice
  }, 0)
})

const totalCountProducts = computed(() => {
  return store.cart.reduce((acc, item) => {
    return acc + item.countCart
  }, 0)
})

const sklonenieCountProducts = computed(() => {
  const mod10 = totalCountProducts.value % 10
  const mod100 = totalCountProducts.value % 100

  if (mod10 === 1 && mod100 !== 11) return 'товар'
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return 'товара'
  return 'товаров'
})

useSeoMeta({
  title: 'Корзина'
})
</script>

<template>
  <v-main>
    <section>
      <v-container>
        <UICrumbs :crumbs="crumbs" />
        <h1>Корзина</h1>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row>
          <v-col cols="12" :md="store.cart.length ? 9 : 12">
            <v-sheet color="background-card" class="pa-4 pa-sm-8" rounded="lg">
              <div class="d-flex justify-start justify-sm-end">
                <v-btn
                    variant="text"
                    min-width="0"
                    class="pa-0 hover-error mb-4 mb-sm-8"
                    @click="store.clearCollection('cart')"
                    v-if="store.cart.length"
                >
                  <div class="d-flex align-center ga-2">
                    <v-icon icon="mdi-trash-can-outline" />
                    Очистить корзину
                  </div>
                </v-btn>
              </div>

              <v-row v-if="store.cart.length">
                <v-col
                    v-for="card in store.cart"
                    :key="card.title"
                    cols="12"
                >
                  <UICartCard :card="card" />
                </v-col>
              </v-row>
              <v-row v-else>
                <v-col cols="12" class="text-center">
                  <h2 class="text-h6">В корзине нет товаров</h2>
                  <p class="mb-4">Вы можете выбрать подходящую технику в нашем каталоге</p>
                  <v-btn color="secondary" size="large" to="/catalog">Каталог товаров</v-btn>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="3" v-if="store.cart.length">
            <v-sheet color="background-card" rounded="lg" class="pa-4 d-flex flex-column">
              <div>
                <div class="d-flex justify-space-between">
                  <p>{{ totalCountProducts }} {{ sklonenieCountProducts }} на сумму</p>
                  <p class="font-weight-bold">{{ totalPriceProducts.toLocaleString('ru-RU') }}₸</p>
                </div>
                <div class="d-flex justify-space-between">
                  <p>Доставка</p>
                  <p class="font-weight-bold">Бесплатно</p>
                </div>
              </div>
              <v-divider class="my-4"/>
              <div class="d-flex justify-space-between text-h6 font-weight-bold mb-4">
                <p>Итого</p>
                <p>{{ totalPriceProducts.toLocaleString('ru-RU') }}₸</p>
              </div>
              <div>
                <v-btn
                  color="primary"
                  size="large"
                  block
                  height="64px"
                  rounded="lg"
                >
                  Перейти к оформлению
                </v-btn>
              </div>
              <v-divider class="my-4"/>
              <v-text-field
                v-model="promocode"
                variant="outlined"
                placeholder="Введите промокод"
                color="primary"
                :hide-details="true"
              >

              </v-text-field>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>

<style scoped>

</style>