import { test, expect } from "@playwright/test";

import { loadHomepage, assertTitle } from "../helpers"; //this import is only for Custom Helpers from helpers.ts

//everythin in PW is async
//just test
test("Simple basic test", async ({ page }) => {
  //here gotes the test code
  await page.goto("https://www.example.com");
  const pageTitle = await page.locator("h1");
  await expect(pageTitle).toContainText("Example Domain");
});

test("Clickin on Elements", async ({ page }) => {
  await page.goto("http://zero.webappsecurity.com/index.html");
  await page.click("#signin_button"); //by id
  await page.click("text=Sign in"); //by text

  const errorMessage = await page.locator(".alert-error"); //by class
  await expect(errorMessage).toContainText("Login and/or password are wrong.");
});

//skip to ignore tests during execution
//.only - to mark test that you want only to run. Can mark more than one
test.skip("Selectors", async ({ page }) => {
  // text
  await page.click("text=some text");

  // Css Selectors
  await page.click("button"); //by type
  await page.click("#id"); //by id
  await page.click(".class"); //by class

  // Only visible Css Selector
  await page.click(".submit-button:visible"); //only visible submit-button class

  // Combinations
  await page.click("#username .first");

  // XPath
  await page.click("//button");
});

//test suite (not async unlike tests)
test.describe("My first test suite", () => {
  //test inside suite
  test("Working with Inputs @myTag", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click("#signin_button");

    await page.type("#user_login", "some username");
    await page.type("#user_password", "some password");
    await page.click("text=Sign in");

    const errorMessage = await page.locator(".alert-error");
    await expect(errorMessage).toContainText(
      "Login and/or password are wrong."
    );
  });

  test("Assertions @myTag", async ({ page }) => {
    await page.goto("https://example.com/");
    await expect(page).toHaveURL("https://example.com/");
    await expect(page).toHaveTitle("Example Domain");

    const element = await page.locator("h1");
    await expect(element).toBeVisible();
    await expect(element).toHaveText("Example Domain");
    await expect(element).toHaveCount(1); //Ensures the [Locator] resolves to an exact number of DOM nodes.

    const nonExistingElement = await page.locator("h5");
    await expect(nonExistingElement).not.toBeVisible(); //assertion opposite to toBeVisible()
  });
});

//can set .only on describe as well: test.describe.only
//can run tests inside suite parallel test.describe.parallel
//can be test.describe.parallel.only as well
test.describe("Hooks", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://example.com/");
  });

  test("Screenshots", async ({ page }) => {
    // 1. step is load website
    // await page.goto('https://example.com/')
    // 2. take screenshot of full page and store in root dir
    await page.screenshot({ path: "screenshot.png", fullPage: true });
  });

  test("Single element Screenshot", async ({ page }) => {
    // 1. step is load website
    // await page.goto('https://example.com/')
    // 2. get single h1 element
    // 3. take screenshot of single h1 element and store in root dir
    const element = await page.$("h1");
    await element!.screenshot({ path: "single_element_screenshot.png" });
  });
});

test.only("Custom Helpers", async ({ page }) => {
  //these are functions from helpers.ts file
  await loadHomepage(page);
  // await page.pause() //this will display debugger window at this step without debug command
  await assertTitle(page);
});
