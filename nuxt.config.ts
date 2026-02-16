// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  nitro: {
    prerender: {
      routes: ["/"], // укажите здесь все важные маршруты, если нужно
    },
  },
  ssr: false,
});
