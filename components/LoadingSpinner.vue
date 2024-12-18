<template>
  <div class="loading-spinner">
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message?: string;
}>();
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>
