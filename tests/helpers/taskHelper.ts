import { Page, expect } from '@playwright/test';

export async function navigateToApp(page: Page, appName: string) {
  await page.click(`text=${appName}`);
}

export async function verifyTask(page: Page, column: string, taskName: string, tags: string[]) {
  // Find the column by its heading text and get the parent column container
  const columnLocator = page.locator(`h2:has-text("${column}")`).locator('..');
  // Find the specific task card with the exact task name as h3 heading
  const taskCard = columnLocator.locator(`h3:has-text("${taskName}")`).locator('..');
  await expect(taskCard).toBeVisible();

  // Verify tag exists for each of the task cards
  // for loop that goes through each tag in tags array
  for (const tag of tags) {
    await expect(taskCard.locator(`span:has-text("${tag}")`)).toBeVisible();
  }
}
