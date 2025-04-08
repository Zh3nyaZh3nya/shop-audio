<script setup lang="ts" generic="T extends string">
import { computed } from "vue";

const props = defineProps<{
  items: T[];
  modelValue: T | null;
  title: string;
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: T | null): void
}>()

const model = computed<T | null>({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})

function handleChange(value: T) {
  if (model.value) {
    model.value = null
  } else {
    model.value = value
  }
}
</script>

<template>
  <div class="radio-button-filters">
    <h3 class="text-h6">{{ title }}</h3>
    <v-radio-group
        v-model="model"
        :hide-details="true"
        @click="handleChange"
    >
      <v-radio
          v-for="item in items"
          :value="item"
          color="primary"
      >
        <template #label>
          <span style="line-height: normal">{{ item }}</span>
        </template>
      </v-radio>
    </v-radio-group>
  </div>

</template>

<style lang="scss">
.radio-button-filters {
  .v-radio {
    min-height: 30px;
    display: flex;
    gap: 8px;
  }
  .v-selection-control--density-default {
    --v-selection-control-size: 30px;
  }
  .v-icon--size-default {
    font-size: 19px;
  }
  .v-selection-control__input, .v-selection-control__wrapper {
    width: 15px;
    height: 25px;
  }
}
</style>