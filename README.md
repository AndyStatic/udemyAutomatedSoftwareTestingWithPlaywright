# udemyAutomatedSoftwareTestingWithPlaywright

Automated Software Testing with Playwright<br />
This is a code learned as part of Automated Software Testing with Playwright Udemy course by Kaniel Outis<br />
[https://udemy.com/course/automated-software-testing-with-playwright](https://udemy.com/course/automated-software-testing-with-playwright)<br />
Code is used only as a learning notes, so all credits goes to course instructor and Udemy platform<br />
<br />

## Project Setup

<ol>
<li><em>npm init</em></li>
<li>fill in only <em>Description</em> and <em>Author</em></li>
<li>Make sure <em>Prettier</em> extension is installed</li>
<li><em>npm install @playwright/test</em></li>
<li><em>npx playwright install</em></li>
<li><em>Typescript</em> is supported by default, so use it to write tests</li>
</ol>

<br />

## Run tests

<ol>
<li>run tests in headless mode: <em>npx playwright test</em></li>
<li>run tests in headed mode: <em>npx playwright test --headed</em></li>
<li>run tests in debug mode: <em>npx playwright test --debug</em></li>
<li>run tests in Firefox (Chrome is default): <em>npx playwright test --browser=firefox</em> (<em>--debug</em>)</li>
<li>run tests in chromium, firefox and webkit (in parallel): <em>npx playwright test --browser=all</em></li>
<li>run specifi test file: <em>npx playwright test tests/example.spec.ts</em></li>
<li>run all tests by tag: <em>npx playwright test --grep "@myTag"</em></li>
<li>run all tests except tag: <em>npx playwright test --grep-invert "@myTag"</em></li>
</ol>

<br />

## Playwright Configuration

<ol>
<li>create file in root <em>playwright.config.ts</em></li>
<li>global timeout 1 minute: <em>timeout: 60000</em></li>
<li>global retries for failed tests: <em>retries: 0</em></li>
<li>default mode to run tests: <em>headless: </em></li>
<li>browser resolution: <em>viewport: </em></li>
<li>This is a default timeout for all Playwright actions: <em>actionTimeout: </em></li>
<li>Whether to ignore HTTPS errors when sending network requests: <em>ignoreHTTPSErrors:</em></li>
<li>Run tests based on config file and specific project: <em>npx playwright test --config=playwright.config.ts --project=Webkit</em></li>
<li>Can have more than 1 config, i.e. <em>playwright.config.ts</em> and <em>e2e.config.ts</em></li>
</ol>

## Reporters

<ol>
<li>Run reporter with minimal information <em>npx playwright test --config=playwright.config.ts --project=Chromium --reporter=line</em></li>
<li>Run default reporter <em>npx playwright test --config=playwright.config.ts --project=Chromium --reporter=list</em></li>
<li>Run reporter with minimal information - just green/red dot <em>npx playwright test --config=playwright.config.ts --project=Chromium --reporter=dot</em></li>
<li>Run reporter with XML format <em>npx playwright test --config=playwright.config.ts --project=Chromium --reporter=junit</em></li>
<li>Run reporter with HTML format <em>npx playwright test --config=playwright.config.ts --project=Chromium --reporter=html</em></li>
<li>HTML report will create new folder: <em>test-results</em></li>
<li>HTML report opens after finished: <em>Serving HTML report at http://localhost:9323</em></li>
<li>HTML report to open after finished: <em>npx playwright show-report</em></li>
</ol>

## Scripts

<ol>
<li>In package.json add under scripts <em>"tests:chrome": "playwright test --config=playwright.config.ts --project=Chromium"</em></li>
<li>Run as <em>npm run tests:chrome</em></li>
<li>Can run with additional flags <em>npm run tests:chrome -- --headed</em></li>
</ol>
