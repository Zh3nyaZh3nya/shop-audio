<script setup lang="ts">
import { ref } from "vue"

const store = useStore()
const route = useRoute()

const pageData = computed(() => store.GET_PROMO_PAGE(route.params.slug as string));

const crumbs = ref<ICrumbs[]>([
  {
    title: 'Главная',
    disabled: false,
    href: '/',
  },
  {
    title: 'Акции',
    disabled: false,
    href: '/promo',
  },
  {
    title: pageData.value?.title ?? '',
    disabled: true,
    href: '/'
  }
])

useSeoMeta({
  title: 'Акции - ' + (pageData.value?.title ?? '')
})
</script>

<template>
  <v-main>
    <section v-if="pageData">
      <v-container>
        <UICrumbs :crumbs="crumbs" />
        <h1 class="text-h5 font-weight-bold">{{ pageData.title }}</h1>
      </v-container>
    </section>
    <section v-if="pageData">
      <v-container>
        <UIArticlePage :card="pageData" />
      </v-container>
    </section>
  </v-main>
</template>

<style scoped>

</style>