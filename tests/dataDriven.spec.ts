import { test } from '@playwright/test';

// Importing login function from loginHelper file in directory
import { login } from './helpers/loginHelper';

// Importing navigation and verification functions from taskHelper file in directory
import { navigateToApp, verifyTask } from './helpers/taskHelper';

// Importing test cases from JSON file
import testCases from './data/testCases.json';

// Data-driven tests using test cases from JSON file to verify tasks, columns, and tags within different applications
// For each test case, it logs in, navigates to the specified app, and verifies the task in the specified column with the correct tags.

test.describe('Data-Driven Task Verification Suite', () => {
  for (const { app, column, task, tags } of testCases) {
    test(`Verify task "${task}" in "${app}" -> "${column}"`, async ({ page }) => {
      await login(page);
      await navigateToApp(page, app);
      await verifyTask(page, column, task, tags);
    });
  }
});
