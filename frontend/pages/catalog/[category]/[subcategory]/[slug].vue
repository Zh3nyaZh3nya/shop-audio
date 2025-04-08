<script setup lang="ts">
import { ref } from "vue";

const route = useRoute()
const store = useStore()

const product = store.GET_PRODUCT_SLUG(route.params.slug as string)
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
    title: product?.category || '',
    disabled: false,
    href: `/catalog/${product?.slug_category}`,
  },
  {
    title: product?.subcategory || '',
    disabled: false,
    href: `/catalog/${product?.slug_category}/${product?.slug_subcategory}`,
  },
  {
    title: product?.title || '',
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