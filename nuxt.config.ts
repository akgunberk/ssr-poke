// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devServer: {
    url: "http://homesberg.com",
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  primevue: {
    components: {
      include: ["Card", "Button", "Image"],
    },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primeicons/primeicons.css",
  ],
  app: {
    head: {
      title: "Pokemon Collection",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Explore our collection of Pokemon with detailed information and stats",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "https://pokeapi.co/api/v2",
    },
  },
});
