<script setup lang="ts">
interface IProps {
  image: string
  title: string
  link: string
}

const props = defineProps<IProps>()
</script>

<template>
  <v-card
      :style="{'backgroundImage': `url('${image}')`}"
      class="main-card position-relative rounded-lg elevation-0"
      width="100%"
      :to="link"
  >
    <div class="main-card-title pa-4 rounded-0">
      <p class="text-h6 text-primary">{{ title }}</p>
    </div>
  </v-card>
</template>

<style lang="scss">
.main-card {
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  &-title {
    position: absolute;
    bottom: -1px;
    background: #141515f5;
    width: 100%;
  }
}
</style>