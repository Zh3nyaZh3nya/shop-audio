<script setup lang="ts">
import { useDisplay } from "vuetify";

interface IMenu {
  title: string
  link: string
}

const { smAndUp } = useDisplay()
const store = useStore()

const drawer = ref<boolean>(false)

const menu: IMenu[] = [
  {
    title: 'Главная',
    link: '/'
  },
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

const cartCountMoney = computed(() => {
  return store.cart.reduce((acc, item) => {
    return acc + (Number(item.price) * Number(item.countCart))
  }, 0)
})
</script>

<template>
  <v-app-bar class="header d-flex flex-column position-relative bg-transparent" elevation="0" :height="smAndUp ? 150 : 68"  >
    <v-container
        class="bg-transparent mx-0"
        :style="[
            {backgroundColor: !smAndUp ? '#141515 !important' : ''},
        ]"
        style="max-width: 100%;"
    >
      <div class="header-top d-flex align-center justify-space-between">
        <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
            class="d-block d-md-none"
            height="24"
            width="24"
        />
        <nav class="d-none d-md-block">
          <ul class="d-flex ga-4">
            <li
                v-for="(item, index) in menu"
                :key="item.title"
                v-show="index !== 0"
            >
              <nuxt-link
                  :to="item.link"
                  class="hover text-body-2 text-lg-body-1"
                  exact-active-class="text-primary"
              >
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="d-none d-sm-flex align-center justify-space-between ga-2">
          <div class="d-flex align-center ga-2">
            <p class="text-primary text-caption">Алматы</p>
          </div>
          |
          <div class="d-flex align-center ga-2 hover">
            <a href="tel:+7 777 121 2342" class="text-caption">+7 (777) 121-23-42</a>
          </div>
          |
          <div class="d-flex align-center ga-2 hover">
            <a href="mailto:egorovasofia632@gmail.com" class="text-caption">egorovasofia632@gmail.com</a>
          </div>
        </div>
        <div class="d-flex d-sm-none align-center justify-end ga-4 ga-md-10">
          <nuxt-link to="/favorites" class="header-favorites__link">
            <v-icon icon="mdi-heart" color="primary" size="35"></v-icon>
            <label class="header-favorites__link-label text-caption">0</label>
          </nuxt-link>
          <v-btn to="/cart"  variant="flat" color="secondary">
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-cart" size="28"></v-icon>
              <p>0 ₸</p>
            </div>
          </v-btn>
        </div>
      </div>
    </v-container>
    <v-container
        class="d-none d-sm-block text-white mx-0 mx-md-auto"
        style="max-width: 100%; background-color: #141515; z-index: 1004"
    >
      <v-row>
        <v-col cols="12" sm="8" class="d-none d-sm-flex align-center ga-6">
          <nuxt-link to="/" class="text-h5 text-md-h4 text-primary">SHOP AUDIO</nuxt-link>
          <v-menu :close-on-content-click="false">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" color="secondary" v-bind="props">
                <div class="d-flex align-center ga-2">
                  <v-icon icon="mdi-format-list-bulleted"></v-icon>
                  <p>КАТАЛОГ</p>
                </div>
              </v-btn>
            </template>
            <ul class="bg-background-card pa-4 mt-2 rounded-lg" @click.stop>
              <li
                  v-for="(item, index) in store.categories"
                  :key="index"
                  class="mb-1"
              >
                <div class="d-flex hover justify-space-between align-center ga-3">
                  <p style="max-width: 250px">{{ item.category }}</p>
                  <v-icon icon="mdi-chevron-right" size="x-small"></v-icon>
                </div>
                <v-divider class="my-2" v-if="index !== store.categories.length - 1"></v-divider>
                <v-menu
                    open-on-hover
                    activator="parent"
                    class="catalog-menu-sub"
                    submenu
                >
                  <ul @click.stop class="bg-background-card pa-4 rounded-lg ml-8">
                    <li v-for="(sub, indexSub) in item.subcategories" :key="sub.title" class="mb-1">
                      <nuxt-link :to="`/catalog/${item.slug_category}/${sub.slug}`" class="hover">
                        <p style="max-width: 250px">
                          {{ sub.title }}
                        </p>
                      </nuxt-link>
                      <v-divider class="my-2" v-if="indexSub !== item.subcategories.length - 1"></v-divider>
                    </li>
                  </ul>
                </v-menu>
              </li>
            </ul>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex align-center justify-end ga-4 ga-md-10">
          <nuxt-link to="/favorites" class="header-favorites__link">
            <v-icon icon="mdi-heart" color="primary" size="35"></v-icon>
            <label class="header-favorites__link-label text-caption">{{ store.favorites.length }}</label>
          </nuxt-link>
          <v-btn to="/cart"  variant="flat" color="secondary">
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-cart" size="28"></v-icon>
              <p>{{ cartCountMoney.toLocaleString('ru-RU') }} ₸</p>
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer
      v-model="drawer"
      temporary
      :style="[drawer ? 'width: 100%; top: 68px; zIndex: 1006; height: calc(100% - 68px); display: block' : '']"
      class="bg-background-card"
  >
    <div class="mb-4">
      <p class="text-h5 text-md-h4 text-primary mt-4 ml-4">SHOP AUDIO</p>
      <v-divider class="my-3"></v-divider>
      <v-row class="mx-1">
        <v-col cols="12" class="d-flex d-sm-none align-center ga-6">
          <div class="d-flex flex-column ga-4">
            <div class="d-flex align-center ga-2">
              <v-icon icon="mdi-map-marker-radius" color="primary"></v-icon>
              <p class="text-primary text-body-2">Алматы</p>
            </div>
            <div class="d-flex align-center ga-2 hover">
              <v-icon icon="mdi-phone" color="primary"></v-icon>
              <a href="tel:+7 777 121 2342" class="text-body-2">+7 (777) 121-23-42</a>
            </div>
            <div class="d-flex align-center ga-2 hover">
              <v-icon icon="mdi-email" color="primary"></v-icon>
              <a href="mailto:egorovasofia632@gmail.com" class="text-body-2">egorovasofia632@gmail.com</a>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-divider class="mt-3 mb-2"></v-divider>
      <ul class="d-flex flex-column ga-4">
        <li
            v-for="(item, index) in menu"
            :key="item.title"
            :style="[index !== 0 ? 'marginTop: -4px' : '']"
        >
          <nuxt-link
              :to="item.link"
              class="hover text-h5 mx-4"
              exact-active-class="text-primary"
          >
            {{ item.title }}
          </nuxt-link>
          <v-divider class="mt-2"></v-divider>
        </li>
      </ul>
    </div>
  </v-navigation-drawer>
</template>

<style lang="scss">
.header {
  .v-toolbar__content {
    display: flex;
    flex-direction: column;
  }
  &-favorites__link {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: -1px;
      right: 0;
      background: black;
      width: 22px;
      height: 22px;
      border-radius: 50px;
      padding: 0 8px;
      z-index: 1;
      pointer-events: none;
    }
    &-label {
      pointer-events: none;
      position: absolute;
      bottom: .2px;
      right: .7px;
      background: rgb(var(--v-theme-secondary));
      border-radius: 50px;
      padding: 0 6px;
      z-index: 2;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

</style>