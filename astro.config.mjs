// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "http://devserver-main--astro-learn-123123.netlify.app",
  server: {
    allowedHosts: ["devserver-main--astro-learn-123123.netlify.app"],
  },
});
