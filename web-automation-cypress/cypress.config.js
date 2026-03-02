const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com',
    viewportWidth: 1280, //largura da dela 
    viewportHeight: 720, //altura da tela
    defaultCommandTimeout: 8000, // Tempo de espera para elementos aparecerem na tela 
    setupNodeEvents(on, config) {
      // espaço para configurar relatórios ou plugins
    },
  },
});