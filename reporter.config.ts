import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  testDir: "tests/custom-reporter",
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: "off", //this slows down execution
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "Firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "Webkit",
      use: { browserName: "webkit" },
    },
  ],
};

export default config;