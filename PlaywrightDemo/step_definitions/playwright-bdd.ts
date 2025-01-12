import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, Then } = createBdd();

Given("A user navigated to the Playwright", async ({ page }) => {
    await page.goto('https://playwright.dev/');
});

Then("The Playwright home page should be displayed", async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
});