<script setup lang="ts" generic="T extends number">
import { computed } from "vue";

const props = defineProps<{
  items: T[];
  modelValue: T[] | null;
  title: string;
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: T[] | null): void
}>()

const model = computed<T[] | null>({
  get: () => props.modelValue,
  set: (value) => {
    if (Array.isArray(value)) {
      emit('update:modelValue', [...value])
    } else if (value !== null) {
      emit('update:modelValue', [value])
    } else {
      emit('update:modelValue', null)
    }
  }
})
</script>

<template>
  <div class="slider-range-filters">
    <h3 class="text-h6 mb-2">{{ title }}</h3>


    <div class="range-inputs mb-2" style="display: flex; gap: 12px;">
      <v-text-field
          v-model="model[0]"
          density="compact"
          style="width: 80px"
          type="number"
          variant="outlined"
          hide-details
          single-line
          label="от"
      />
      <v-text-field
          v-model="model[1]"
          density="compact"
          style="width: 80px"
          type="number"
          variant="outlined"
          hide-details
          single-line
          label="до"
      />
    </div>
    <v-range-slider
        v-model="model"
        color="primary"
        :min="items[0]"
        :max="items[1]"
        strict
        :hide-details="true"
        :step="5000"
    >
    </v-range-slider>
  </div>
</template>

<style lang="scss">
.slider-range-filters {

}
</style>