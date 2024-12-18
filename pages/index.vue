<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-8 text-gray-800">
        Pokemon with subdomain
      </h1>

      <ErrorMessage v-if="error" :message="error.message" />

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AsyncPokemonCard :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function getSubdomain(url: URL) {
  const hostname = url.hostname; // e.g., 'sub.example.com'
  const parts = hostname.split(".");

  if (parts.length > 2) {
    return parts.slice(0, parts.length - 2).join("."); // e.g., 'sub'
  }

  return null; // No subdomain present
}

const url = useRequestURL();
const subdomain = getSubdomain(url);
const { pokemon, pending, error } = usePokemon(subdomain || "");

// SEO
useHead({
  title: "Pokemon Collection",
  meta: [
    {
      name: "description",
      content:
        "Explore our amazing collection of Pokemon with detailed information and stats",
    },
    {
      name: "keywords",
      content: "pokemon, collection, stats, information, gaming",
    },
  ],
});
</script>
