// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tupagina.com.pe",
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
    icon({
      iconDir: "./public/icons",
    }),
    sitemap(),
    // defineConfig({
    //   i18n: {
    //     defaultLocale: "es",
    //   },
    // }),
  ],
});
