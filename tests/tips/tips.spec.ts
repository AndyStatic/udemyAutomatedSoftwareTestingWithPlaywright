import { test, expect } from "@playwright/test";
import { getRandomNumber, getRandomString } from "../../utils/data-helpers";

test.describe("Tips & Tricks Section", () => {
  test("TestInfo Object", async ({ page }, testInfo) => {
    await page.goto("https://www.example.com");
    //console.log(testInfo); //will log everything
    //console.log(testInfo.title); //will log only test title
    //console.log(testInfo.expectedStatus); //will log only expected status

    //random numbers Util
    let newNumber = await getRandomNumber();
    console.log(newNumber);

    //random string Util
    let newString = await getRandomString();
    console.log(newString);
  });

  test("Test Skip Browser", async ({ page, browserName }) => {
    test.skip(
      browserName === "chromium",
      "Feature is not ready for Chrome browser yet"
    );
    await page.goto("https://www.example.com");
  });

  test("Test Fixme Annotation", async ({ page, browserName }) => {
    test.fixme(
      browserName === "chromium",
      "Test is not stable, needs revision"
    );
    await page.goto("https://www.example.com");
  });

  const people = ["Mike", "Judy", "Peter", "Elon", "Alice"];
  for (const name of people) {
    test(`Running test for ${name}`, async ({ page }) => {
      await page.goto("http://zero.webappsecurity.com/index.html");
      await page.type("#searchTerm", `${name}`);
      await page.waitForTimeout(3000);
    });
  }

  test("Mouse Movement Simulation", async ({ page }) => {
    await page.goto("https://www.example.com");
    await page.mouse.move(0, 0);
    await page.mouse.down();
    await page.mouse.move(0, 100);
    await page.mouse.up();
  });

  test("Multiple Browser Tabs inside 1 Browser", async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();

    await page1.goto("https://www.example.com");
    await page2.goto("https://www.example.com");
    await page3.goto("https://www.example.com");
    await page1.waitForTimeout(5000);
  });

  //Mobile device emulation:
  //npx playwright open --device="iPhone 11" wikipedia.org

  //Convert any page into .pdf file:
  //npx playwright pdf https://www.example.com my-file.pdf
  //can use vscode-pdf extension to read .pdf files inside VSCode

  //Generate customized screenshots:
  //npx playwright screenshot --device="iPhone 11" --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone-image.png

  //Emulate Browser Language & Timezone:
  //npx playwright open --timezone="Europe/Rome" --lang="it-IT" google.com
  //npx playwright open --timezone="Europe/Rome" --lang="it-IT" --geolocation="40.121, 10.121" google.com
});

//you can retry tests that failed via command: npx playwright test --config=tips.config.ts --project=Chromium --retries=3
