const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    "retries": 1,
    baseUrl: 'https://iasi.littlehanoi.ro/',
    viewportHeight: 660,
    viewportWidth: 1000,
  //  specPattern: 'e2e/2-advanced-examples/mytests/*.feature',
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
