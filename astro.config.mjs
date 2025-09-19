// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Usa el dominio temporal de HostGator mientras apuntas el dominio final:
  // Ejemplo tomado de tu panel (cámbialo por el tuyo tal cual):
  site: "https://soomaconsultores1758050097012.2040090.misitiohostgator.com",

  // Salida estática para hosting compartido
  output: "static",

  // Si publicas en el dominio raíz, deja base en "/".
  // Si algún día lo montas en subcarpeta (p. ej. /sooma/), cambia a base: "/sooma/"
  // base: "/",

  alias: {
    "@components": "./src/components",
    "@layouts": "./src/layouts",
    "@styles": "./src/styles",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],

  // HTML más compacto en build
  compressHTML: true,
});
