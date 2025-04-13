<script setup lang="ts">
import { ref } from "vue";

const store = useStore()
const route = useRoute()

const products = store.GET_PRODUCTS_SUBCATEGORY(route.params.subcategory as string)

const PAGE_SIZE: number = 12;
const currentPage = ref<number>(1);
const crumbs: ICrumbs[] = [
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
    title: products[0].category,
    disabled: false,
    href: `/catalog/${products[0].slug_category}`,
  },
  {
    title: products[0].subcategory,
    disabled: true,
    href: `/catalog/${products[0].slug_category}/${products[0].slug_subcategory}`,
  },
]

const paginated = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE;
  return products.slice(start, start + PAGE_SIZE);
});

const totalPages = computed(() => {
  return Math.ceil(products.length / PAGE_SIZE);
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
  title: `Каталог - ${products[0].category}`
})
</script>

<template>
  <v-main>
    <section>
      <v-container>
        <UICrumbs :crumbs="crumbs" />
        <h1>{{ products[0].category }} | {{ products[0].subcategory }}</h1>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-pagination
            v-model="currentPage"
            :length="totalPages"
            color="primary"
            total-visible="5"
            @update:model-value="changePage"
            class="mb-10"
        ></v-pagination>

        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col
                  v-for="card in paginated"
                  :key="card.title"
                  cols="12"
                  md="6"
                  lg="4"
              >
                <UIProductCard :card="card" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-pagination
            v-model="currentPage"
            :length="totalPages"
            color="primary"
            total-visible="5"
            @update:model-value="changePage"
            class="mt-10"
        ></v-pagination>
      </v-container>
    </section>
  </v-main>
</template>

<style scoped>

</style>