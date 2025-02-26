<script setup lang="ts">
import { computed, ref } from "vue";

const store = useStore();

const PAGE_SIZE: number = 5;
const currentPage = ref<number>(1);
const crumbs: ICrumbs[] = [
  {
    title: 'Главная',
    disabled: false,
    href: '/',
  },
  {
    title: 'Акции',
    disabled: true,
    href: '/promo',
  },
]

const paginated = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE;
  return store.promo.slice(start, start + PAGE_SIZE);
});

const totalPages = computed(() => {
  return Math.ceil(store.promo.length / PAGE_SIZE);
});

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
</script>

<template>
  <v-main>
    <section>
      <v-container>
        <UICrumbs :crumbs="crumbs" />
        <h1 class="text-h5 font-weight-bold">Акции</h1>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row class="mb-8">
          <v-col cols="12" v-for="item in paginated" :key="item.id">
            <UIArticleCard :card="item" />
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
