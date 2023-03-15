import { test, expect } from "@playwright/test";

//create new file reporter.ts in root dir
//after npm run tests:custom-reporter
//will generate test-result.json

test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const title = page.locator(".navbar__inner .navbar__title");
  await expect(title).toHaveText("Playwright");
});
