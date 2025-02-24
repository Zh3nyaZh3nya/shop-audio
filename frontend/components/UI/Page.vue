<script setup lang="ts">
import { formatDate } from "~/utils/formatDate";

interface IProps {
  card: INews | IPromo
}

const props = defineProps<IProps>()

const formattedDate = computed(() => {
  if ("date" in props.card) {
    return formatDate(props.card.date);
  } else if ("date_from" in props.card) {
    return `${formatDate(props.card.date_from)} – ${formatDate(props.card.date_to)}`;
  }
  return "";
});
</script>

<template>
  <v-card class="bg-white pa-4" rounded="lg" max-width="1000px">
    <div>
      <v-img :src="card.image" rounded="lg" cover width="100%" max-width="300" max-height="300" class="float-left mr-4 mb-4" />
      <p class="mb-4 text-primary font-weight-medium">{{ formattedDate }}</p>
      <p>{{ card.description }}</p>
    </div>
  </v-card>
</template>

<style scoped>

</style>