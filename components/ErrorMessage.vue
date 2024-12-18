<template>
  <div class="error-message">
    <i
      class="pi pi-exclamation-triangle"
      style="font-size: 2rem; color: #dc3545"
    ></i>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>

<style scoped>
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #dc3545;
}
</style>
