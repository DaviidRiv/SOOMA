// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // IMPORTANTE: pon aquí tu dominio público (https) para que el sitemap sea válido
  site: "https://www.tu-dominio.com", // ← cámbialo

  // Atajos de importación (opcional pero práctico)
  alias: {
    "@components": "./src/components",
    "@layouts": "./src/layouts",
    "@styles": "./src/styles",
  },

  // Tailwind v4 con Vite
  vite: {
    plugins: [tailwindcss()],
  },

  // Integraciones
  integrations: [
    react(),
    sitemap(), // usa la propiedad `site` de arriba
  ],

  // (Opcional) HTML más compacto en build
  compressHTML: true,
});
