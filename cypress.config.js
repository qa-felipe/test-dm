import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    chromeWebSecurity: false,
  },
});
