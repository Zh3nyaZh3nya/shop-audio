<script setup lang="ts">

interface IMenu {
  title: string
  link: string
}

const menu_first: IMenu[] = [
  {
    title: 'Главная',
    link: '/'
  },
  {
    title: 'Новости',
    link: '/news'
  },
  {
    title: 'Акции',
    link: '/promo'
  },
  {
    title: 'Контакты',
    link: '/contacts'
  },
]
const menu_second: IMenu[] = [
  {
    title: 'Оплата',
    link: '/payment'
  },
  {
    title: 'Гарантия',
    link: '/warranty'
  },
  {
    title: 'Избранное',
    link: '/favorites'
  },
  {
    title: 'Возврат и обмен товара',
    link: '/back-product'
  },
]
</script>

<template>
  <v-footer class="rounded-t-xl bg-background-card mt-16">
    <v-container>
      <v-row class="d-flex flex-column-reverse flex-lg-row">
        <v-col cols="12" lg="3">
          <div class="d-flex flex-column">
            <nuxt-link to="/" class="d-none d-lg-inline-block text-h5 text-md-h4 text-primary mb-4">SHOP AUDIO</nuxt-link>
            <div class="d-flex align-start ga-2 mb-4">
              <div class="bg-secondary rounded-lg pa-2 mb-1">
                <v-icon icon="mdi-phone" color="white" />
              </div>
              <div class="d-flex flex-column">
                <a href="tel:+7 777 121 2342" class="text-body-1 hover">+7 (777) 121-23-42 (Моб.)</a>
                <a
                    href="https://api.whatsapp.com/send/?phone=77771212342&text=Здравствуйте%2C+у+меня+есть+вопрос"
                    class="text-body-1 hover"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  +7 (777) 121-23-42 (WhatsApp)
                </a>
              </div>
            </div>
            <div class="d-flex align-center ga-2 mb-5">
              <div class="bg-secondary rounded-lg pa-2">
                <v-icon icon="mdi-email" color="white" />
              </div>
              <a href="mailto:egorovasofia632@gmail.com" class="text-body-1 hover">egorovasofia632@gmail.com</a>
            </div>
            <div class="d-flex flex-column align-start ga-2 mb-5">
              <div class="d-flex align-start ga-2">
                <div class="bg-secondary rounded-lg pa-2">
                  <v-icon icon="mdi-map-marker-radius" color="white" />
                </div>
                <p>Медеуский район, проспект Жибек Жолы/ проспект Достык, д. 50/2/39, офис 7 (3 этаж).</p>
              </div>
              <nuxt-link to="/contacts" class="hover ml-12 text-decoration-dotted">Открыть карту</nuxt-link>
            </div>
            <div>
              <h6 class="text-h6 font-weight-regular mb-2">Мы в соц. сетях:</h6>
              <div class="d-flex align-center ga-2">
                <a
                    href="https://api.whatsapp.com/send/?phone=77771212342&text=Здравствуйте%2C+у+меня+есть+вопрос"
                    class="text-body-1 hover"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <div class="bg-secondary rounded-lg pa-2 mb-1 d-flex align-center">
                    <v-icon icon="mdi-whatsapp" size="24"></v-icon>
                  </div>
                </a>
                <a
                    href="https://t.me/+77771212342"
                    class="text-body-1 hover"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <div class="bg-secondary rounded-lg pa-2 mb-1 d-flex align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                      <path fill="currentColor" d="m29.919 6.163l-4.225 19.925c-.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744l-3.106 2.988c-.344.344-.631.631-1.294.631l.463-6.556L24.919 8.72c.519-.462-.113-.719-.806-.256l-14.75 9.288l-6.35-1.988c-1.381-.431-1.406-1.381.288-2.044l24.837-9.569c1.15-.431 2.156.256 1.781 2.013z"/>
                    </svg>
                  </div>
                </a>
                <a href="https://vk.com/sofiiiyyaa" target="_blank" rel="noreferrer noopener">
                  <div class="bg-secondary rounded-lg pa-2 mb-1 d-flex align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M20.911 0h-9.823C2.124 0-.001 2.125-.001 11.089v9.823c0 8.964 2.125 11.089 11.089 11.089h9.823C29.875 32.001 32 29.876 32 20.912v-9.823C32 2.125 29.854 0 20.911 0m4.922 22.828H23.51c-.88 0-1.151-.698-2.734-2.302c-1.375-1.333-1.984-1.51-2.323-1.51c-.479 0-.615.135-.615.792v2.099c0 .563-.177.901-1.667.901c-2.464 0-5.198-1.49-7.115-4.266c-2.891-4.068-3.682-7.115-3.682-7.745c0-.339.135-.656.786-.656h2.328c.589 0 .813.271 1.042.901c1.151 3.323 3.068 6.234 3.859 6.234c.292 0 .427-.135.427-.88v-3.432c-.089-1.583-.922-1.719-.922-2.281c0-.271.224-.542.583-.542h3.661c.495 0 .677.271.677.854v4.63c0 .5.224.677.359.677c.292 0 .542-.177 1.083-.719c1.672-1.875 2.87-4.766 2.87-4.766c.156-.339.427-.656 1.016-.656h2.328c.698 0 .854.359.698.859c-.292 1.354-3.141 5.375-3.141 5.375c-.245.406-.339.583 0 1.036c.25.339 1.063 1.042 1.604 1.672c.995 1.13 1.76 2.078 1.964 2.734c.229.651-.109.99-.766.99z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <v-divider class="d-block d-lg-none my-4"></v-divider>
          <v-row class="d-flex d-lg-none">
            <v-col cols="12" md="6" class="pb-2 pb-lg-4">
              <p class="text-body-2">
                Интернет-магазин музыкального оборудования "SHOP-AUDIO"
              </p>
              <p class="text-body-2">
                Все права защищены © 2025.
              </p>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column align-lg-end pt-0 pt-lg-4">
              <p class="text-body-2">
                Разработка интернет-магазина - Egorova Sofia
              </p>
              <p class="text-body-2">
                Разработка дизайна интернет-магазина - Egorova Sofia
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="9">
          <div class="d-block d-lg-none mb-4 text-center">
            <nuxt-link to="/" class="text-h5 text-md-h4 text-primary">SHOP AUDIO</nuxt-link>
          </div>
          <v-row>
            <v-col cols="12" sm="6" class="d-flex flex-column align-center text-center text-lg-left pb-0 pb-sm-4">
              <ul class="d-flex flex-column ga-2">
                <li v-for="item in menu_first" :key="item.title" class="text-h5">
                  <nuxt-link :to="item.link" class="hover" exact-active-class="text-primary">{{ item.title }}</nuxt-link>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" sm="6" class="d-flex flex-column align-center text-center text-lg-left pt-2 pt-sm-4">
              <ul class="d-flex flex-column ga-2">
                <li v-for="item in menu_second" :key="item.title" class="text-h5">
                  <nuxt-link :to="item.link" class="hover" exact-active-class="text-primary">{{ item.title }}</nuxt-link>
                </li>
              </ul>
            </v-col>
          </v-row>
          <v-divider class="mt-4 my-lg-4"></v-divider>
          <v-row class="d-none d-lg-flex">
            <v-col cols="12" md="6">
              <p class="text-body-2">
                Интернет-магазин музыкального оборудования "SHOP-AUDIO"
              </p>
              <p class="text-body-2">
                Все права защищены © 2025.
              </p>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column align-end">
              <p class="text-body-2">
                Разработка интернет-магазина - Egorova Sofia
              </p>
              <p class="text-body-2">
                Разработка дизайна интернет-магазина - Egorova Sofia
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>

</style>