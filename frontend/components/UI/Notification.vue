<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
const message = ref('')
const color = ref('success')
const timeout = ref(4000)

function showNotification(text: string, type: 'success' | 'error' | 'info' | 'warning' = 'success', duration = 4000) {
  message.value = text
  color.value = type
  timeout.value = duration
  isVisible.value = true
}

defineExpose({
  showNotification
})
</script>

<template>
  <v-snackbar
      v-model="isVisible"
      :timeout="timeout"
      :color="color"
      location="top right"
      multi-line
  >
    {{ message }}
    <template #actions>
      <v-btn icon @click="isVisible = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

