<script setup lang="ts">
import { shallowRef } from 'vue';
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultMarker
} from 'vue-yandex-maps';
import type { YMap } from '@yandex/ymaps3-types';

const map = shallowRef<null | YMap>(null);
const crumbs: ICrumbs[] = [
  {
    title: 'Главная',
    disabled: false,
    href: '/',
  },
  {
    title: 'Контакты',
    disabled: true,
    href: '/contacts',
  },
]
</script>

<template>
  <v-main>
    <section>
      <v-container>
        <UICrumbs :crumbs="crumbs" />
        <h1>Контакты</h1>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-sheet class="bg-background-card pa-4" elevation="0" rounded="lg">
          <v-row class="mb-4">
            <v-col cols="12">
              <div class="d-flex align-start ga-4">
                <v-icon icon="mdi-map-marker-radius" size="38" class="mt-1" color="primary"></v-icon>
                <div>
                  <h2 class="text-h5 font-weight-bold">Адрес:</h2>
                  <p>Республика Казахстан, A25E0X4, г. Алматы, ул. Жибек Жолы, 50</p>
                  <p>(вход в ТЦ Квартал со стороны пр. Достык, между ул. Гоголя и пр. Жибек Жолы)</p>
                  <p>ТЦ Квартал, блок Б, 3 этаж, офис № 42</p>
                </div>
              </div>
            </v-col>
            <v-col cols="12">
              <div class="d-flex align-start ga-4">
                <v-icon icon="mdi-phone" size="38" class="mt-1" color="primary"></v-icon>
                <div>
                  <h3 class="text-h5 font-weight-bold">Телефоны:</h3>
                  <p>Тел: <a href="tel:+7 (777) 121-23-42" class="text-primary hover">+7 (777) 121-23-42</a></p>
                  <p>Whatsapp: <a href="https://wa.me/77771212342" target="_blank" rel="noreferrer noopener" class="text-primary hover">+7 (777) 121-23-42</a></p>
                  <p></p>
                </div>
              </div>
            </v-col>
            <v-col cols="12">
              <div class="d-flex align-start ga-4">
                <v-icon icon="mdi-email" size="38" class="mt-1" color="primary"></v-icon>
                <div>
                  <h4 class="text-h5 font-weight-bold">Эл. почта: </h4>
                  <p>Эл. почта: <a href="mailto:egorovasofia632@gmail.com" class="text-primary hover">egorovasofia632@gmail.com</a></p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <h5 class="text-h5 font-weight-bold mb-4 mt-2">Реквизиты:</h5>
          <v-row class="mb-4">
            <v-col cols="12" md="4">
              <div class="d-flex ga-4">
                <v-icon icon="mdi-file-document-outline" size="38" class="mt-1" color="primary"></v-icon>
                <div>
                  <p><label class="text-primary">Наименование:</label> ТОО "SHOP-AUDIO"</p>
                  <p><label class="text-primary">БИН:</label> 200940033624</p>
                  <p><label class="text-primary">БИК:</label> HSBKKZKX</p>
                  <p class="d-block d-md-none"><label class="text-primary">IBAN:</label> KZ77601A861003839811</p>
                  <p class="d-block d-md-none"><label class="text-primary">Банк:</label> АО «Народный Банк Казахстана»</p>
                  <p class="d-block d-md-none"><label class="text-primary">Кбе:</label> 17</p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4" class="d-none d-md-flex flex-column">
              <p><label class="text-primary">IBAN:</label> KZ77601A861003839811</p>
              <p><label class="text-primary">Банк:</label> АО «Народный Банк Казахстана»</p>
              <p><label class="text-primary">Кбе:</label> 17</p>
            </v-col>
            <v-col cols="12">
              <p><label class="text-primary">Адрес: </label>Республика Казахстан, A25E0X4, г. Алматы</p>
              <p class="mb-4">Медеуский район, проспект Жибек Жолы/ проспект Достык, д. 50/2/39, офис 7 (3 этаж).</p>
              <p><label class="text-primary">Режим работы:</label> торговый офис, точка выдачи</p>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <h6 class="text-h5 font-weight-bold mb-4 mt-4">Карта</h6>
          <client-only>
            <div class="position-relative h-100 rounded-lg">
              <yandex-map
                  v-model="map"
                  @error="(e) => console.error('Ошибка загрузки Яндекс.Карт:', e)"

                  :settings="{
                    location: {
                      center: [76.958140, 43.263442],
                      zoom: 16,
                    },
                  }"
                  width="100%"
                  height="500px"
              >
                <yandex-map-default-features-layer />
                <yandex-map-default-scheme-layer/>
                <yandex-map-default-marker :settings="{ coordinates: [76.958140, 43.263442] }"/>
              </yandex-map>
            </div>
          </client-only>
        </v-sheet>
      </v-container>
    </section>
  </v-main>
</template>

<style scoped>

</style>