import type { Pokemon } from "~/types/pokemon";

export const usePokemon = (name: string) => {
  const config = useRuntimeConfig();

  const {
    data: pokemon,
    pending,
    error,
  } = useFetch<Pokemon>(
    `${config.public.apiBase}/pokemon/${name || "charizard"}`,
    {
      key: name,
    }
  );

  return {
    pokemon,
    pending,
    error,
  };
};
