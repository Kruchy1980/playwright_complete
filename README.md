# THE COMPLETE COURSE OF PLAYWRIGHT FROM BEGINNER

The playwright from scratch course

## Playwright Installation

01. Firstly install the node.js
02. Secondly go to the terminal - in our case terminal of VSCode
03. Go to playwright.dev
04. Press "Get Started" - it moves us to the documentqation of playwright
05. Use the command in the CLI of terminal: "npm init playwright@latest" in the terminal
06. When the installing package will appear press y
07. Choose the typescript later on Do you want to use TypeScript or JavaScript?
08. When the Where to put your end-to-end tests? appears choose tests as default says
09. Add a GitHub Actions workflow? at present we can use the default false option
10. Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) - choose default = true
11. The initialization of project will start automatically
12. ✔ Success! Created a Playwright Test project at E:\GIT Repos\Playwright_complete\playwright_complete
Inside that directory, you can run several commands:

  npx playwright test

    Runs the end-to-end tests.

  npx playwright test --ui

    Starts the interactive UI mode.

  npx playwright test --project=chromium

    Runs the tests only on Desktop Chrome.

  npx playwright test example

    Runs the tests in a specific file.

  npx playwright test --debug

    Runs the tests in debug mode.

  npx playwright codegen

    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  + .\tests\example.spec.ts - Example end-to-end test
  + .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  + .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

## Playwright extensions

For VSCode:
01. Go to extensions
02. Type Playwright in the search field

#### Extentions to be installed (Optional - minimum):
1. Playwright Test for VSCode
2. Playwright Tests Snippets
3. Playwright Test Runner
4. Playwright Test Viewer

#### Playwright Config Walktrough
To prepare configuration firstly go to the file "playwright.config.ts" created automaticaly when playwright project is installed
1. Import PlaywrightTestConfig from the playwright tests using the import described below
"import  type {PalywrightTestConfig} from '@playwright/test" --> not used in present version 1.38.0
2. Import devices and Config define using the command described below
"import { defineConfig, devices } from '@playwright/test'"
3.  In the defineConfig add all setttings you want to ex:
import {
  defineConfig,
  devices,
} from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Maximum time one test fcasn run for */
  timeout: 30 * 1000, // == 30s
  expect: {
    /**
     * Maximum time expect() should wait for the condition to bve met
     * For example in `await expect(locator).toHaveText()` 
    */
    timeout: 5000 // The timeout for waiting for aawit to be expected for action in assertion section
  },
  /* Run tests in files in parallel */
  fullyParallel: true, // <-- runs each individual test in pararell mode 
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI, // <-- used if the test only is left in the source code
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0, // <-- used for tests retry in f eg Jenkins 2 = twice in third party instance / 0 - locally - can be changed to 1
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined, // <-- when used third party instance can the quantity of pararell workers be changed
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html', // <-- type of the tests results to be displayed
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as  `click()` can take. Defaults to 0 (no limit) */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry', // <-- Thiw paraameter tesl us what exactly happened when we run the tests
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});


