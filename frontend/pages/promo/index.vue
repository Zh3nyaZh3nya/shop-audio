<script setup lang="ts">
import { computed, ref } from "vue";

const store = useStore();

const PAGE_SIZE = 5;
const currentPage = ref(1);
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
        <h1 class="text-h4">Акции</h1>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row class="mb-8">
          <v-col cols="12" v-for="item in paginated" :key="item.id">
            <UICard :card="item" />
          </v-col>
        </v-row>

        <v-pagination
            v-model="currentPage"
            :length="totalPages"
            total-visible="5"
            @update:model-value="changePage"
        ></v-pagination>
      </v-container>
    </section>
  </v-main>
</template>
