<script setup lang="ts">
import { ref } from "vue";
import { useStatus } from "~/composable/status";

const route = useRoute()
const store = useStore()
const getStatusProducts: IProduct[] = store.GET_STATUS_PRODUCTS(
    useStatus(route.params.status as statusPage, true)
        .value.status as statusProduct
)

const PAGE_SIZE: number = 9;

const currentPage = ref<number>(1);
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
  },  {
    title: useStatus(route.params.status as statusPage).value.word,
    disabled: true,
    href: '/catalog-' + route.params.status,
  },
])

const paginated = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE;
  return getStatusProducts
      .slice(start, start + PAGE_SIZE);
});

const totalPages = computed(() => {
  return Math.ceil(getStatusProducts.length / PAGE_SIZE);
});

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
};

useSeoMeta({
  title: 'Каталог - ' + useStatus(route.params.status as statusPage).value.word
})
</script>

<template>
  <v-main>
    <section>
      <v-container>
        <UICrumbs :crumbs="crumbs" />
        <h1 class="text-h5 font-weight-bold">{{ useStatus(route.params.status as statusPage).value.word }}</h1>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row class="mb-8">
          <v-col
              v-for="item in paginated"
              :key="item.slug"
              cols="12"
              md="4"
          >
            <UIProductCard
                :card="item"
                :status="route.params.status as statusPage" />
          </v-col>
        </v-row>

        <v-pagination
            v-model="currentPage"
            :length="totalPages"
            color="primary"
            total-visible="5"
            @update:model-value="changePage"
        ></v-pagination>
      </v-container>
    </section>
  </v-main>
</template>

<style scoped>

</style>