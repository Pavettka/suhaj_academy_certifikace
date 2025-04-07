const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    tegb_login: "https://tegb-backend-877a0b063d29.herokuapp.com",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
