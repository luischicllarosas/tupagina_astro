// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
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
    // defineConfig({
    //   i18n: {
    //     defaultLocale: "es",
    //   },
    // }),
  ],
});
