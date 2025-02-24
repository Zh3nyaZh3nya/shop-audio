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
    title: pageData.value?.title,
    disabled: true,
    href: '/'
  }
])
</script>

<template>
  <v-main>
    <section v-if="pageData">
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
        <h1>{{ pageData.title }}</h1>
      </v-container>
    </section>
    <section>
      <v-container>
        <UIPage :card="pageData" />
      </v-container>
    </section>
  </v-main>
</template>

<style scoped>

</style>