import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const repositoryName = "Sassy-Alchemy-";

export default defineConfig({
  site: "https://sassyalchemy.github.io",
  base: process.env.NODE_ENV === "production" ? `/${repositoryName}` : "/",
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
