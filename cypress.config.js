const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "retries": 1,
    baseUrl: 'https://iasi.littlehanoi.ro/',
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
