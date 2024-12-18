export const createWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/?text=${encodedMessage}`;
};

export const formatPokemonMessage = (pokemon: any): string => {
  return `Check out this awesome Pokemon: ${
    pokemon.name
  }! \nType: ${pokemon.types
    .map((t: any) => t.type.name)
    .join(", ")}\nStats: HP ${pokemon.stats[0].base_stat}, Attack ${
    pokemon.stats[1].base_stat
  }`;
};
