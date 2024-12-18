import type { Pokemon } from "~/types/pokemon";

export const usePokemonDetails = (name: string) => {
  const config = useRuntimeConfig();

  const {
    data: pokemon,
    pending,
    error,
  } = useFetch<Pokemon>(`${config.public.apiBase}/pokemon/${name}`, {
    key: `pokemon-${name}`,
    transform: (response) => ({
      ...response,
      imageUrl: response.sprites.other["official-artwork"].front_default,
    }),
  });

  return {
    pokemon,
    pending,
    error,
  };
};
