<script setup lang="ts">
const crumbs: ICrumbs[] = [
  {
    title: 'Главная',
    disabled: false,
    href: '/',
  },
  {
    title: 'Гарантия',
    disabled: true,
    href: '/warranty',
  },
]

</script>

<template>
  <v-main>
    <section>
      <v-container>
        <v-breadcrumbs
            :items="crumbs"
            divider="/"
            class="px-0 py-3 font-weight-medium ga-1 "
        >
          <template v-slot:item="{ item }">
            <NuxtLink
                v-if="!item.disabled"
                :to="item.href"
                class="text-decoration-none text-black cursor-pointer"
            >
              {{ item.title }}
            </NuxtLink>

            <span v-else class="text-disabled">
              {{ item.title }}
            </span>
          </template>
        </v-breadcrumbs>
        <h1>Гарантия</h1>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-sheet class="bg-white pa-4" elevation="0" rounded="lg">
          <h2 class="mb-4 text-h5 font-weight-bold">Совершая покупку у нас, вы застрахованы от каких-либо неприятностей!</h2>
          <p class="mb-4">
            После покупки, на товар выдается гарантийный талон с гарантией от производителя (только при ее наличии).
            Если причина поломки заводской брак, гарантия позволяет отремонтировать оборудование за счет производителя.
            Срок и наличие гарантии на товар, приобретенный в нашем интернет-магазине определяется производителем данного товара.
          </p>

          <h3 class="mb-4 text-h5 font-weight-bold">Сроки</h3>
          <p class="mb-4">
            Производитель оборудования указывает его в гарантийном талоне — документе, который прилагается к товару (при наличии гарантии на товар от производителя).
            Срок гарантии отсчитывается с момента покупки оборудования.
            Если в оборудовании обнаружится неисправность после окончания срока гарантии — ремонт для покупателя будет платным.
          </p>

          <h4 class="mb-4 text-h5 font-weight-bold">Что покрывает</h4>
          <p class="mb-4">
            По гарантии можно отремонтировать только заводские дефекты. Они возникают из-за некачественных запчастей или нарушения технологии сборки.
            Для покупателя гарантия бесплатна.
          </p>

          <h5 class="mb-4 text-h5 font-weight-bold">Что не покрывает</h5>
          <p class="mb-4">
            Дефекты, которые случились не по вине производителя. Они возникают из-за неправильного использования или воздействия третьих сил.
            В этих случаях придется чинить технику за свои деньги.
          </p>

          <h6 class="mb-4 text-h5 font-weight-bold">Где ремонтируют технику</h6>
          <p class="mb-4">
            По гарантии оборудование ремонтируют в авторизованных сервисных центрах (АСЦ).
            Адреса сервисных центров указаны в гарантийном талоне.
          </p>

          <h6 class="mb-4 text-h5 font-weight-bold">
            Какие документы нужны для ремонта по гарантии
          </h6>
          <p class="mb-4">
            Документы, подтверждающие покупку и заполненный гарантийный талон (печать продавца, дата продажи).
          </p>

        </v-sheet>
      </v-container>
    </section>
  </v-main>
</template>

<style scoped>

</style>