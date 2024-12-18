<template>
  <Card class="pokemon-card">
    <template #header>
      <Image
        :src="pokemon.sprites.other['official-artwork'].front_default"
        :alt="pokemon.name"
        class="pokemon-image"
      />
    </template>
    <template #title>
      <h2 class="capitalize">{{ pokemon.name }}</h2>
    </template>
    <template #content>
      <div class="pokemon-details">
        <div class="types mb-2">
          <span
            v-for="type in pokemon.types"
            :key="type.type.name"
            class="type-badge mr-2"
            :class="type.type.name"
          >
            {{ type.type.name }}
          </span>
        </div>
        <div class="stats">
          <p><strong>Height:</strong> {{ pokemon.height / 10 }}m</p>
          <p><strong>Weight:</strong> {{ pokemon.weight / 10 }}kg</p>
          <div v-for="stat in pokemon.stats" :key="stat.stat.name">
            <strong class="capitalize">{{ stat.stat.name }}:</strong>
            {{ stat.base_stat }}
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <Button
        label="Share on WhatsApp"
        icon="pi pi-whatsapp"
        @click="sharePokemon"
        class="p-button-success"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
import type { Pokemon } from "~/types/pokemon";

const props = defineProps<{
  pokemon: Pokemon;
}>();

const sharePokemon = () => {
  const message = encodeURIComponent(
    `Check out this awesome Pokemon: ${props.pokemon.name}! 
    Type: ${props.pokemon.types.map((t) => t.type.name).join(", ")}
    Stats: HP ${props.pokemon.stats[0].base_stat}, Attack ${
      props.pokemon.stats[1].base_stat
    }`
  );
  window.open(`https://wa.me/?text=${message}`, "_blank");
};
</script>

<style scoped>
.pokemon-card {
  transition: transform 0.2s;
}

.pokemon-card:hover {
  transform: translateY(-5px);
}

.pokemon-image {
  width: 100%;
  height: auto;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.type-badge {
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
  font-size: 0.9em;
  text-transform: capitalize;
}

.capitalize {
  text-transform: capitalize;
}

/* Pokemon type colors */
.normal {
  background-color: #a8a878;
}
.fire {
  background-color: #f08030;
}
.water {
  background-color: #6890f0;
}
.electric {
  background-color: #f8d030;
}
.grass {
  background-color: #78c850;
}
.ice {
  background-color: #98d8d8;
}
.fighting {
  background-color: #c03028;
}
.poison {
  background-color: #a040a0;
}
.ground {
  background-color: #e0c068;
}
.flying {
  background-color: #a890f0;
}
.psychic {
  background-color: #f85888;
}
.bug {
  background-color: #a8b820;
}
.rock {
  background-color: #b8a038;
}
.ghost {
  background-color: #705898;
}
.dragon {
  background-color: #7038f8;
}
.dark {
  background-color: #705848;
}
.steel {
  background-color: #b8b8d0;
}
.fairy {
  background-color: #ee99ac;
}
</style>
