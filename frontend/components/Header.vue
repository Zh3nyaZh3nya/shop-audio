<script setup lang="ts">
interface IMenu {
  title: string
  link: string
}

const drawer = ref<boolean>(false)

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
  <v-app-bar class="header d-flex flex-column position-relative bg-transparent" elevation="0" :height="150"  >
    <v-container class="bg-transparent mx-0" style="max-width: 100%;">
      <div class="header-top d-flex justify-space-between">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="d-block d-sm-none" height="24" width="24"></v-app-bar-nav-icon>
        <nav class="d-none d-sm-block">
          <ul class="d-flex ga-4">
            <li v-for="item in menu" :key="item.title">
              <nuxt-link :to="item.link" class="hover" exact-active-class="text-primary">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="d-flex justify-space-between ga-8">
          <div class="d-flex align-center ga-2 hover">
            <v-icon icon="mdi-phone" size="18"></v-icon>
            <a href="tel:+7 777 121 2342">+7 (777) 121-23-42</a>
          </div>
          <div class="d-flex align-center ga-2 hover">
            <v-icon icon="mdi-email" size="18"></v-icon>
            <a href="mailto:egorovasofia632@gmail.com">egorovasofia632@gmail.com</a>
          </div>
        </div>
      </div>
    </v-container>
    <v-container class="text-white mx-0 mx-md-auto" style="max-width: 100%; background-color: #141515; z-index: 1004">
      <v-row>
        <v-col cols="10" sm="6" md="8" class="d-flex flex-column-reverse flex-sm-column flex-md-row align-end align-md-center justify-end ga-2 ga-md-10">
          <div class="d-none d-sm-block">
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
          <div class="d-none d-sm-block">
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
          <div class="px-4">
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
  <v-navigation-drawer
      v-model="drawer"
      temporary
      :style="[drawer ? 'width: 100%; top: 56px; zIndex: 1006; height: calc(100% - 56px); display: block' : '']"
  >
    <div class="mb-4">
      <ul class="d-flex flex-column ga-4">
        <li v-for="(item, index) in menu" :key="item.title" :class="[index === 0 ? 'mt-3' : '']" :style="[index !== 0 ? 'marginTop: -4px' : '']">
          <nuxt-link :to="item.link" class="hover text-h5 mx-4" exact-active-class="text-secondary">
            {{ item.title }}
          </nuxt-link>
          <v-divider class="mt-2"></v-divider>
        </li>
      </ul>
      <div class="d-flex justify-space-between flex-wrap mt-4 ga-2">
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="d-flex align-center" elevation="0">
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
          <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="d-flex align-center" elevation="0">
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
      </div>
    </div>
  </v-navigation-drawer>
</template>

<style lang="scss">
.header {
  .v-toolbar__content {
    display: flex;
    flex-direction: column;
  }
}
</style>