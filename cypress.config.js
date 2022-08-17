const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "retries": 1,
    baseUrl: 'https://iasi.littlehanoi.ro/',
    viewportHeight: 660,
    viewportWidth: 1000,
    reporter: 'mochawesome',
    reporterOptions: {
      html: false,
      json: true,
      overwrite: false,
      reportDir: "mochawesome-report"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
