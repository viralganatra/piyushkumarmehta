import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: false,
  blockHosts: 'www.google-analytics.com',
  projectId: 'ochsud',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, _config) {
      on('task', {
        log(message) {
          console.log(message);

          return null;
        },
        table(message) {
          console.table(message);

          return null;
        },
      });
    },
    baseUrl: 'http://localhost:8000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
