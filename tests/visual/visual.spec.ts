import { test, expect } from "@playwright/test";

//1st time will fail due to missing snapshots
//it will create new folder visual.spec.ts-snapshots with base images
//npx playwright test --config=visual.config.ts --project=Chromium
//you will need to create snapshots for each project: Chromium, Firefox and Webkit

//to update base snapshots, you can:
//option 1. delete files from -snapshots folder
//option 2. run with flag npx playwright test --config=visual.config.ts --project=Chromium --update-snapshots

//another option is to use percy library for visual testing
//https://docs.percy.io/docs/playwright (not free)

test.describe("Visual Regression Testing Example", () => {
  test("Full Page Snapshot", async ({ page }) => {
    await page.goto("https://www.example.com");
    expect(await page.screenshot()).toMatchSnapshot("homepage.png");
  });

  test("Single Element Snapshot", async ({ page }) => {
    await page.goto("https://www.example.com");
    const pageElement = await page.$("h1");
    expect(await pageElement!.screenshot()).toMatchSnapshot("page-title.png");
  });
});
