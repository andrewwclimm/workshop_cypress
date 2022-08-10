const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "retries": 1,
    baseUrl: 'https://iasi.littlehanoi.ro/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
