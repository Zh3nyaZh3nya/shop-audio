<script setup lang="ts">
import { ref } from "vue";
import { useStatus } from "~/composable/status";

const route = useRoute()
const store = useStore()

const crumbs = ref<ICrumbs[]>([
  {
    title: 'Главная',
    disabled: false,
    href: '/',
  },
  {
    title: 'Каталог',
    disabled: false,
    href: '/catalog',
  },
  {
    title: useStatus(route.params.status as statusPage).value.word,
    disabled: false,
    href: '/catalog-' + route.params.status,
  },
  {
    title: store.GET_PRODUCT_SLUG(route.params.slug as string)?.title ?? '',
    disabled: true,
    href: '/'
  }
])
</script>

<template>
  <v-main>
    <section>
      <v-container>
        <UICrumbs :crumbs="crumbs" />
        <h1 class="text-h5 font-weight-bold">{{ store.GET_PRODUCT_SLUG(route.params.slug as string)?.title ?? ''}}</h1>
      </v-container>
    </section>
    <section>
      <v-container>
        <UIProductPage :card="store.GET_PRODUCT_SLUG(route.params.slug as string)" />
      </v-container>
    </section>
  </v-main>
</template>

<style scoped>

</style>