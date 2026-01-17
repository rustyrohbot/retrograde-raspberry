// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://prohgrammer.com",
  output: "static",
  adapter: cloudflare({
    imageService: "compile",
  }),
  integrations: [mdx(), sitemap(), tailwind()],
});
