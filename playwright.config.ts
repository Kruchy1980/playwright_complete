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
  testDir: './my_tests',
  /* Maximum time one test  run for */
  timeout: 30 * 1000, // == 30s
  expect: {
    /**
     * Maximum time expect() should wait for the condition to bve met
     * For example in `await expect(locator).toHaveText()` 
    */
    timeout: 5000 // The timeout for waiting for await to be expected for action in assertion section
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
  reporter: [["allure-playwright", { outputFolder: 'test-results' }], ['line']],// ['junit', { outputFile: 'results.xml' }], ['blob', { outputFolder: 'jk-results'}]], // <-- type of the tests results to be displayed - more than 1 can be added as an array with one element only so it is array of arrays
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  // Here we can add the global setup which we prepared in our "global-setup file"
  globalSetup: require.resolve('./utils/global-setup'), // That entry registers the entire global-setup file
  // After regfistering the globalSetup we must !!! tell the playwright that we are going to be using the new state  in the use Object

  use: {
    /* Maximum time each action such as  `click()` can take. Defaults to 0 (no limit) */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://practice.sdetunicorns.com/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure', // <-- Thiw parameter tesl us what exactly happened when we run the tests - explained in the file "12.Debug_Console.spec.ts"
    // Adding entry for the refistered global Setup - here we need to add the proper file name where we want to save the data
    storageState: 'loggedInState.json', //--> Now we can go and run our tests from the file: "14.Signed_In_State.spec.ts"
  },



  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     headless: false
    //   },

    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    // /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        headless: true
      },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'tredst-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});