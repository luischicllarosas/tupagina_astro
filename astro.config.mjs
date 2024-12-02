// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  
  // i18n: {
  //   locales: [
  //     "es",
  //     "en",
  //     {
  //       path: "french",
  //       codes: ["fr", "fr-BR", "fr-CA"],
  //     },
  //   ],
  // },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  integrations: [
    tailwind({
      // applyBaseStyles: false,
      // configFile: './tailwind.config.mjs',
    }),
    react({
      // include: ["**/react/*"],
      // experimentalReactChildren: true,
    }),
    vue(),
    // defineConfig({
    //   i18n: {
    //     defaultLocale: "es",
    //   },
    // }),
  ],
});
