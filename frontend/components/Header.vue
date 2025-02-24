<script setup lang="ts">
interface IMenu {
  title: string
  link: string
}

const menu: IMenu[] = [
  {
    title: 'Новости',
    link: '/news',
  },
  {
    title: 'Акции',
    link: '/promo'
  },
  {
    title: 'Контакты',
    link: '/contacts'
  },
  {
    title: 'Оплата',
    link: '/payment'
  },
  {
    title: 'Возврат товара',
    link: '/back-product'
  },
  {
    title: 'Гарантия',
    link: '/warranty'
  }
]
</script>

<template>
  <v-app-bar class="header d-flex flex-column" elevation="0" :height="236"  >
    <v-container class="bg-primary mx-0" style="max-width: 100%;">
      <div class="header-top">
        <nav>
          <ul class="d-flex ga-4">
            <li v-for="item in menu" :key="item.title">
              <nuxt-link :to="item.link" class="text-white">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </v-container>
    <v-container class="text-white mx-0" style="max-width: 100%; background-color: #141515">
      <v-row>
        <v-col cols="12" md="4">
          <div class="d-flex flex-row ga-8">
            <div>
              <nuxt-link to="/">
                <v-img src="/logo.webp" cover width="120px" height="148px" />
              </nuxt-link>
            </div>
            <div class="d-flex flex-column justify-space-between">
              <div class="mb-4 d-flex flex-column">
                <p class="mb-1">Связаться с нами:</p>
                <div class="d-flex align-center ga-2 hover">
                  <v-icon icon="mdi-phone" size="18"></v-icon>
                  <a href="tel:+7 777 121 2342">+7 (777) 121-23-42</a>
                </div>
                <div class="d-flex align-center ga-2 hover" >
                  <v-icon icon="mdi-email" size="18"></v-icon>
                  <a href="mailto:egorovasofia632@gmail.com">egorovasofia632@gmail.com</a>
                </div>
              </div>

              <nuxt-link to="/contacts" class="d-flex align-center ga-1 text-secondary">
                Подробнее
                <v-icon icon="mdi-arrow-right" size="18"></v-icon>
              </nuxt-link>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="8" class="d-flex align-center justify-end ga-10">
          <div>
            <v-menu open-on-hover offset-y>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="d-flex align-center">
                  <v-icon icon="mdi-cash-multiple" color="secondary" class="mb-1 mr-2" size="30"></v-icon>
                  <p class="text-h6">Оплата</p>
                </v-btn>
              </template>

              <v-list class="px-4 py-2">
                <p class="text-h5 mb-3">Оплата</p>
                <ul class="d-flex flex-column ga-2 mb-2 list-point">
                  <li>Оплата наличными в офисе</li>
                  <li>Оплата наличными курьеру</li>
                  <li>Оплата платежной картой при получении</li>
                  <li>Оплата платежной картой на сайте</li>
                  <li>Безналичный расчет через бан</li>
                  <li>Рассрочка</li>
                  <li>Кредит</li>
                </ul>
              </v-list>
            </v-menu>
          </div>
          <div>
            <v-menu open-on-hover offset-y>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="d-flex align-center">
                  <v-icon icon="mdi-truck-fast" color="secondary" class="mr-3" size="30"></v-icon>
                  <p class="text-h6">Доставка</p>
                </v-btn>
              </template>

              <v-list class="px-4 py-2">
                <p class="text-h5 mb-3">Доставка</p>
                <ul class="d-flex flex-column ga-2 mb-2 list-point">
                  <li>Курьерская доставка по городу</li>
                  <li>Самовывоз из нашего магазина</li>
                  <li>Доставка в регионы Казахстана</li>
                </ul>
              </v-list>
            </v-menu>
          </div>
          <div>
            <nuxt-link to="/cart" class="d-flex align-center ga-2">
              <v-icon icon="mdi-cart" size="40" color="secondary"></v-icon>
              <div class="d-flex flex-column">
                <p>0 шт.</p>
                <p>0 ₸</p>
              </div>
            </nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss">
.header {
  .v-toolbar__content {
    display: flex;
    flex-direction: column;
  }
}
</style>