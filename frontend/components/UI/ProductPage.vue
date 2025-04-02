<script setup lang="ts">
import { formatDate } from "~/utils/formatDate";

interface IProps {
  card: IProduct
}

interface IOtherInfo {
  title: string
  list?: string[]
  description?: string
}

const props = defineProps<IProps>()

const otherInfo: IOtherInfo[] = [
  {
    title: 'Удобная оплата',
    list: [
      "Оплата наличными в офисе",
      "Оплата наличными курьеру",
      "Оплата платежной картой при получении",
      "Оплата платежной картой на сайте",
      "Безналичный расчет через банк",
      "Рассрочка",
      "Кредит"
    ]
  },
  {
    title: 'Быстрая доставка',
    list: [
      "Курьерская доставка по городу",
      "Самовывоз из нашего магазина",
      "Доставка в регионы Казахстана",
      "Доставка по России"
    ]
  },
  {
    title: 'Условия гарантия',
    description: `
      <p class="text-body-1">Все продаваемые в интернет-магазине товары имеют гарантию.</p>
      <p class="mb-4 text-body-1">У нас Вы покупаете только оригинальную сертифицированную технику с официальной гарантией производителя! Срок гарантии для каждой товарной позиции индивидуален и указан в гарантийных обязательствах.</p>
      <p>Адреса и телефоны сервисных центров указаны в гарантийном талоне.</p>
    `
  },
  {
    title: 'Помощь клиенту',
    description: `
      <p>Процедура покупки товара в нашем Интернет-магазине очень проста и состоит из нескольких шагов.</p>
    `
  }
]

const countProducts = ref<number>(1)
const activeInfoTitle = ref<string | null>(null)
const tab = ref('review')

const toggleInfo = (title: string) => {
  activeInfoTitle.value = activeInfoTitle.value === title ? null : title
}

const colorCount = computed(() => {
  const count = Number(props.card.count)
  if (count < 10) {
    return 'accent'
  }
  if(count > 10 && count < 30) {
    return 'pending'
  }
  if(count > 30) {
    return 'success'
  }
})
</script>

<template>
  <v-sheet class="bg-transparent product-page mb-6">
    <v-row>
      <v-col cols="12" md="4">
        <div class="bg-background-card pa-4 rounded-lg">
          <UISliderImage :images="card.image" :statuses="card.status" />
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <aside>
          <header class="bg-background-card pa-4 rounded-lg mb-4">
            <div class="d-flex justify-space-between align-center mb-4">
              <div class="d-flex align-center ga-6">
                <div>
                  <p v-if="!card.percent_promo" class="text-h5">{{ card.price }} ₸</p>
                  <div v-else>
                    <p class="text-h5">{{ Math.floor(Number(card.price) - (Number(card.price) / card.percent_promo)) }} ₸</p>
                    <p><label class="text-decoration-line-through-custom text-body-1">{{ card.price }} ₸</label></p>
                    <p class="text-body-2 text-primary">
                      Вы экономите:
                      <label class="font-weight-bold">{{ Math.floor((Number(card.price) / card.percent_promo)) }} ₸</label>
                    </p>
                  </div>
                </div>
                <div class="text-primary product-page-notification">
                  <p>Нашли дешевле?</p>
                  <p class="font-weight-bold">Снизим цену!</p>
                </div>
              </div>

              <div class="d-flex align-center">
                <div class="d-flex align-center ga-4">
                  <v-btn
                      class="rounded-lg"
                      color="background"
                      icon="mdi-minus"
                      @click="countProducts > 1 ? countProducts-- : countProducts"
                  />
                  <p class="text-h5 text-center" style="min-width: 30px">{{ countProducts }}</p>
                  <v-btn
                      class="rounded-lg"
                      color="background"
                      icon="mdi-plus"
                      @click="countProducts < Number(card.count) ? countProducts++ : countProducts"
                  />
                </div>
              </div>
            </div>

            <div>
              <v-divider />
              <div class="py-2 d-flex justify-space-between align-center">
                <div class="d-flex ga-2">
                  <p>Количество: </p>
                  <v-icon icon="mdi-chart-line-variant" :color="colorCount"></v-icon>
                  <p>{{ Number(card.count) }} шт.</p>
                </div>
                <v-btn color="primary" size="large" class="text-body-2">
                  Добавить в корзину
                </v-btn>
              </div>
              <v-divider />
              <div class="pt-4">
                <div class="d-flex align-center ga-2 text-h6">
                  <v-icon icon="mdi-phone" color="primary" />
                  <a href="tel:+7 (777) 121-23-42" class="hover">+7 (777) 121-23-42</a>
                  <p class="text-body-2">(заказ по телефону)</p>
                </div>
              </div>
            </div>
          </header>
          <main class="mb-4">
            <div class="d-flex ga-4 flex-wrap flex-row bg-background-card pa-4 rounded-lg position-relative">
              <div v-for="info in otherInfo" :key="info.title" class="flex-grow-1">
                <v-btn color="primary" width="100%" height="60px" @click="toggleInfo(info.title)">
                  <span>{{ info.title }}</span>
                </v-btn>

                <div class="product-page-info-list">
                  <v-card
                      v-if="activeInfoTitle === info.title"
                      class="pa-4 mt-2 bg-background"
                      elevation="4"
                  >
                    <div class="d-flex justify-space-between">
                      <p class="text-h6 mb-2 text-primary">{{ info.title }}</p>
                      <v-icon @click="toggleInfo(info.title)" icon="mdi-close"></v-icon>
                    </div>
                    <ul v-if="info.list" class="list-point">
                      <li v-for="(item, i) in info.list" :key="i" class="mb-1">{{ item }}</li>
                    </ul>
                    <div v-else-if="info.description" v-html="info.description" />
                  </v-card>
                </div>
              </div>
            </div>
          </main>
          <footer class="bg-background-card pa-4 rounded-lg">
            <div class="mb-4">
              <h2 class="text-h6 font-weight-bold">Описание</h2>
              <p class="text-body-1">{{ card.description }}</p>
            </div>
            <div class="mb-4">
              <h3 class="text-h6 font-weight-bold mb-2">Характеристики</h3>
              <v-table class="bg-transparent product-page-table">
                <tbody>
                  <tr
                      v-for="item in card.specifications"
                      :key="item.title"
                  >
                    <td>{{ item.title }}</td>
                    <td>{{ item.text }}</td>
                  </tr>
                </tbody>
              </v-table>
            </div>
            <div>
              <p>
                <label class="text-error">Внимание!</label> Характеристики и внешний вид Товара могут незначительно отличаться от описанных на сайте.
                Производитель имеет право менять комплектацию и конструкцию, не внося изменения в инструкцию.
                Место сборки товара также может отличаться от указанного.
              </p>
            </div>
          </footer>
        </aside>
      </v-col>
    </v-row>
  </v-sheet>
  <v-tabs v-model="tab">
    <v-tab value="reviews" color="primary">
      <div class="d-flex align-center ga-2">
        <div>
          <v-icon icon="mdi-message-draw" size="19"></v-icon>
        </div>
        <span class="text-h6">Отзывы</span>
      </div>
    </v-tab>
    <v-tab value="instruction" color="primary">
      <div class="d-flex align-center ga-2">
        <div>
          <v-icon icon="mdi-notebook-outline" size="19"></v-icon>
        </div>
        <span class="text-h6">Инструкция</span>
      </div>
    </v-tab>
  </v-tabs>
  <v-tabs-window v-model="tab" class="bg-background-card pa-4 rounded-b-lg">
    <v-tabs-window-item value="reviews">
      <div v-if="card.reviews">
        <div v-for="review in card.reviews" :key="review.name" class="mb-4">
          <div class="d-flex align-center ga-2">
            <p class="font-weight-bold text-h6">{{ review.name }}</p>
            <p class="text-body-2 text-grey mt-1">{{ formatDate(review.date) }}</p>
          </div>
          <div>
            <p>{{ review.text }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <h4>Отзывов пока нет.</h4>
      </div>
    </v-tabs-window-item>
    <v-tabs-window-item value="instruction">
      <h4 class="text-h6 font-weight-bold">{{ card.title }}</h4>
      <h5>{{ card.category }} / {{ card.subcategory }}</h5>
      <div v-html="card.instructions"></div>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<style lang="scss">
.product-page {
  &-notification {
    background: rgb(34 176 243 / 15%) !important;
    padding: 8px;
    border-radius: 8px;
  }
  &-info-list {
    position: absolute;
    z-index: 10;
    left: 0;
    width: 100%;
  }
  &-table {
    td:first-child {
      border-right: 1px solid rgb(var(--v-theme-primary));
    }
    tr:nth-child(odd) {
      background-color: rgba(var(--v-theme-primary), 0.1); // или любой нужный цвет
    }
  }
  .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
    border-bottom: none;
  }
}
</style>