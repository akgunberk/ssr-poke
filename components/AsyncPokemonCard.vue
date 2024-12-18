<template>
  <div class="pokemon-card-wrapper">
    <LoadingSpinner v-if="pending" message="Loading Pokemon..." />
    <ErrorMessage v-else-if="error" message="Error" />
    <PokemonCard v-else-if="pokemon" :pokemon="pokemon" />
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from "~/types/pokemon";

const { pending, error, pokemon } = defineProps<{
  pokemon: Pokemon | null;
  pending?: boolean;
  error?: boolean;
}>();
</script>
