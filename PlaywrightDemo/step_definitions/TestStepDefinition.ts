import { Given, Then } from "@cucumber/cucumber";
import {
  Browser,
  BrowserContext,
  chromium,
  expect,
  Page,
} from "@playwright/test";

let browser: Browser;
let context: BrowserContext;
let page: Page;

Given("A user navigated to the Playwright", async () => {
  browser = await chromium.launch({ headless: true });

  context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://playwright.dev/");
});

Then("The Playwright home page should be displayed", async () => {
  await expect(page).toHaveTitle(/Playwright/);
});
