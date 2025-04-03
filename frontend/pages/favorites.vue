<script setup lang="ts">

const store = useStore()

const crumbs: ICrumbs[] = [
  {
    title: 'Главная',
    disabled: false,
    href: '/',
  },
  {
    title: 'Избранное',
    disabled: true,
    href: '/favorites',
  },
]

useSeoMeta({
  title: 'Избранное'
})
</script>

<template>
  <v-main>
    <section>
      <v-container>
        <UICrumbs :crumbs="crumbs" />
        <h1>Избранное</h1>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-sheet color="background-card" class="pa-8" rounded="lg">
          <v-row v-if="store.favorites.length">
            <v-col
              v-for="card in store.favorites"
              :key="card.title"
              cols="12"
              md="6"
              lg="4"
            >
              <UIProductCard :card="card" />
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col cols="12" class="text-center">
              <h2 class="text-h6">Вы ещё не добавили в избранное ни одного товара.</h2>
              <p class="mb-4">Вы можете выбрать подходящую технику в нашем каталоге.</p>
              <v-btn color="secondary" size="large" to="/catalog">Каталог товаров</v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
    </section>
  </v-main>
</template>

<style scoped>

</style>