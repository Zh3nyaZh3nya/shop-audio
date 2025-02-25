<script setup lang="ts">
interface IProps {
  crumbs: ICrumbs[]
}

const props = defineProps<IProps>()
</script>

<template>
  <v-breadcrumbs
      :items="crumbs"
      divider="/"
      class="px-0 py-3 font-weight-medium ga-1 "
  >
    <template v-slot:item="{ item }">
      <NuxtLink
          v-if="!item.disabled"
          :to="item.href"
          class="text-decoration-none cursor-pointer"
      >
        {{ item.title }}
      </NuxtLink>

      <span v-else class="text-disabled">
        {{ item.title }}
      </span>
    </template>
  </v-breadcrumbs>
</template>

<style scoped>

</style>