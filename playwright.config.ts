import { defineConfig } from '@playwright/test';

// configuration file for playwright tests, to be used as a base for all tests found in /tests folder

export default defineConfig({
  use: {
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
    // Set headless to true for quick execution without UI
    // Ran tests in headful mode to visually verify actions during development and debugging using Playwright tools. 
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
  },
  testDir: './tests',
  timeout: 30000,
});
