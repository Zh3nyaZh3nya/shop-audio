<script setup lang="ts">
import { ref } from "vue"

const store = useStore()
const route = useRoute()

const PAGE_SIZE: number = 12;

const currentPage = ref<number>(1);
const categoriesFilter = ref<string[]>([])
const categories: string[] = store.GET_CATEGORY()
const statusesFilter = ref<statusProduct[]>([])
const statuses: statusProduct[] = ["NEW", "PROMO", "TOP_PRODUCT"]
const isReviewFilter = ref<string | null>(null)
const priceFilter = ref<number[]>([])
const isAgreeResetPage = ref<string[]>([])

const crumbs: ICrumbs[] = [
  {
    title: 'Главная',
    disabled: false,
    href: '/',
  },
  {
    title: 'Каталог',
    disabled: true,
    href: '/catalog',
  },
]

function resetFilters() {
  categoriesFilter.value = []
  statusesFilter.value = []
  isReviewFilter.value = null
  priceFilter.value = []

}

const filteredProducts = computed(() => {
  let all: IProduct[] = [...store.products]

  if(
      !categoriesFilter.value.length &&
      !statusesFilter.value.length &&
      isReviewFilter.value === null &&
      !priceFilter.value.length
  ) {
    return all
  }

  if (categoriesFilter.value.length) {
    all = all.filter(product => categoriesFilter.value.includes(product.category))
  }

  if (statusesFilter.value.length) {
    all = all.filter(product => {
      if (!product.status) return false

      if (Array.isArray(product.status)) {
        return product.status.some(s => statusesFilter.value.includes(s))
      }
    })
  }

  if(isReviewFilter.value === 'Да') {
    all = all.filter(product => product.reviews)
  }

  if (priceFilter.value.length === 2) {
    const [min, max] = priceFilter.value
    all = all.filter(product => {
      const price = Number(product.price)
      return price >= min && price <= max
    })
  }

  return all
})

const minPrice = computed(() => {
  if (store.products.length === 0) return 0
  return store.products.reduce((min, item) => {
    const price = Number(item.price)
    return price < min ? price : min
  }, Number.POSITIVE_INFINITY)
})

const maxPrice = computed(() => {
  if (store.products.length === 0) return 0
  return store.products.reduce((max, item) => {
    const price = Number(item.price)
    return price > max ? price : max
  }, 0)
})

const paginated = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filteredProducts.value.slice(start, start + PAGE_SIZE)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / PAGE_SIZE) || 1;
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

watch([categoriesFilter, statusesFilter, isReviewFilter, priceFilter], () => {
  currentPage.value = 1
})

watchEffect(() => {
  if (store.products.length > 0 && priceFilter.value.length === 0) {
    priceFilter.value = [minPrice.value, maxPrice.value]
  }
})

useSeoMeta({
  title: 'Каталог товаров'
})
</script>

<template>
  <v-main>
    <section>
      <v-container>
        <UICrumbs :crumbs="crumbs" />
        <h1>Каталог</h1>
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
          <v-col cols="12" md="4" lg="3">
            <v-sheet color="background-card" class="pa-4" rounded="lg">
              <FiltersCheckbox title="Категории" v-model="categoriesFilter" :items="categories" />
              <v-divider class="mt-4 mb-3"></v-divider>
              <FiltersCheckbox title="Статусы" v-model="statusesFilter" :items="statuses" type="status" />
              <v-divider class="mt-4 mb-3"></v-divider>
              <FiltersRadio title="Есть отзывы" v-model="isReviewFilter" :items="['Да']" />
              <v-divider class="mt-4 mb-3"></v-divider>
              <FiltersSliderRange title="Цена" v-model="priceFilter" :items="[minPrice, maxPrice]" />
              <v-divider class="my-4"></v-divider>
              <v-btn @click="resetFilters" block height="64px" color="accent" class="text-h6 font-weight-bold" variant="outlined">
                Сбросить фильтры
              </v-btn>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="8" lg="9" v-if="paginated.length">
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
          <v-col cols="12" md="9" v-else>
            <div class="text-center">
              <h2>По отфильтрованым параметрам найдено 0 товаров.</h2>
              <p>Не расстраивайтесь, попробуйте другие фильтры.</p>
            </div>
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