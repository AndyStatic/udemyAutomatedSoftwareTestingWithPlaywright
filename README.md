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

<ul>
<li>run tests in headless mode: <em>npx playwright test</em></li>
<li>run tests in headed mode: <em>npx playwright test --headed</em></li>
<li>run tests in debug mode: <em>npx playwright test --debug</em></li>
<li>run tests in Firefox (Chrome is default): <em>npx playwright test --browser=firefox</em> (<em>--debug</em>)</li>
<li>run tests in chromium, firefox and webkit (in parallel): <em>npx playwright test --browser=all</em></li>
<li>run specifi test file: <em>npx playwright test tests/example.spec.ts</em></li>
<li>run all tests by tag: <em>npx playwright test --grep "@myTag"</em></li>
<li>run all tests except tag: <em>npx playwright test --grep-invert "@myTag"</em></li>
</ul>

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

<br />

## Reporters

<ul>
<li>Run reporter with minimal information <em>npx playwright test --config=playwright.config.ts --project=Chromium --reporter=line</em></li>
<li>Run default reporter <em>npx playwright test --config=playwright.config.ts --project=Chromium --reporter=list</em></li>
<li>Run reporter with minimal information - just green/red dot <em>npx playwright test --config=playwright.config.ts --project=Chromium --reporter=dot</em></li>
<li>Run reporter with XML format <em>npx playwright test --config=playwright.config.ts --project=Chromium --reporter=junit</em></li>
<li>Run reporter with HTML format <em>npx playwright test --config=playwright.config.ts --project=Chromium --reporter=html</em></li>
<li>HTML report will create new folder: <em>test-results</em></li>
<li>HTML report opens after finished: <em>Serving HTML report at http://localhost:9323</em></li>
<li>HTML report to open after finished: <em>npx playwright show-report</em></li>
</ul>

<br />

## Scripts

<ol>
<li>In package.json add under scripts <em>"tests:chrome": "playwright test --config=playwright.config.ts --project=Chromium"</em></li>
<li>Run as <em>npm run tests:chrome</em></li>
<li>Can run with additional flags <em>npm run tests:chrome -- --headed</em></li>
</ol>

<br />

## CI/CD Integration

<ol>
<li>Donwload <em>Generic Java package (.war)</em> from https://www.jenkins.io/download/</li>
<li>Place downloaded <em>.war</em> file into the root directory</li>
<li>In terminal: <em>java -jar jenkins.war --httpPort=8080 --enable-future-java</em> - will take a while to setup</li>
<li>Open <em>http://localhost:8080/</em></li>
<li>Unlock Jenkins by taking value from console under <em>Please use the following password to proceed to installation:</em></li>
<li>Select <em>Install suggested plugin</em> option  - will take a while to setup</li>
<li>Create First Admin User</li>
<li>Instance Configuration - use same as before <em>http://localhost:8080/</em></li>
<li>can Start using Jenkins</li>
<li>click on <em>New Item</em></li>
<li>Enter an item name: i.e. <em>Playwright</em></li>
<li>select <em>Freestyle project</em> and click <em>OK</em></li>
<li>Enter a Description: i.e. <em>e2e</em></li>
<li>click on <em>Advanced</em> and check <em>Use custom workspace</em></li>
<li>by using <em>pwd</em> in terminal get the path to use for <em>Directory</em> - you might need to change <em>\</em> to <em>/</em> in path</li>
<li>in <em>Build Steps</em> select <em>Execute Windows batch command</em> - for Windows (Execute shell for iOS)</li>
<li>use command from <em>package.json</em> i.e. <em>npm run tests:api</em></li>
<li>click on <em>Save</em> so the project is created</li>
<li>click on <em>Build Now</em> to run the tests</li>
<li>Can specify reporter in <em>package.json</em> i.e. <em>"tests:api": "playwright test --config=api.config.ts --project=Chromium --reporter=list"</em> so results can be seen in <em>Build Console Output</em></li>
<li>To add parametrs, click on <em>Configure</em></li>
<li>Set checkbox for <em>This project is parameterized</em></li>
<li>Choose <em>Choice Parameter</em></li>
<li>Set <em>Name</em> as <em>script</em>, <em>Description as</em> <em>select script from package.json</em></li>
<li>Set <em>Choices<em> as all the scripts from <em>package.json</em>, i.e. <em>tests:chrome<em>,<em>tests:firefox<em>, etc. as a list</li>
<li>Modify <em>Build<em> command as <em>npm run %script%</em> (for Windows) and press <em>Save</em></li>
<li>Can select what to run from <em>Build with Parameters</em></li>
</ol>

<br />

## Cucumber

<ul>
<li>Additional packages: <em>npm install chai @cucumber/cucumber cucumber-html-reporter</em></li>
<li><em>npm i -D @playwright/test</em></li>
<li>Folder: <em>/features</em></li>
<li>Folder: <em>src/page-objects/cucumber</em></li>
<li>Folder: <em>src/setup</em></li>
<li>Folder: <em>src/steps</em></li>
<li>File: <em>reporter.js</em></li>
<li>File: <em>cucumber.js</em></li>
<li>Add Cucumber for VSCode extension</li>
<li>run command from <em>test:cucumber</em> in terminal</li>
</ul>
