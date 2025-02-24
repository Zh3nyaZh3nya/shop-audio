<script setup lang="ts">
import { formatDate } from "~/utils/formatDate";

interface IProps {
  card: INews | IPromo;
}

const props = defineProps<IProps>();

const formattedDate = computed(() => {
  if ("date" in props.card) {
    return formatDate(props.card.date);
  } else if ("date_from" in props.card) {
    return `${formatDate(props.card.date_from)} – ${formatDate(props.card.date_to)}`;
  }
  return "";
});

const link = computed(() => {
  if ("date" in props.card) {
    return 'news';
  } else if ("date_from" in props.card) {
    return 'promo';
  }
  return "";
});
</script>

<template>
  <v-card rounded="lg" :to="`${link}/${card.slug}`" class="pa-4" :hover="false">
    <div class="d-flex flex-sm-row flex-column align-sm-center ga-4">
      <div>
        <v-img :src="card.image" rounded="lg" cover width="150px" height="150px" />
      </div>
      <div class="d-flex flex-column justify-space-between h-100">
        <p class="mb-4 text-primary font-weight-medium">{{ formattedDate }}</p>
        <h3 class="mb-4">{{ card.title }}</h3>
        <p>{{ card.short_description }}</p>
      </div>
    </div>
  </v-card>
</template>

<style scoped>

</style>