// THIS PART IS DEDICATED TO DEBUGGING IN PLAYWRIGHT
// Page to visit
// URL: "https://practice.sdetunicorns.com/"
/*
Debugging tests is very important and  helps to understant why the test fails
The Playwright introduce 3 types of debugging:
- Debug Console
- Trace Viewer
- Inspector
*/
// DEBUG CONSOLE
//Import important blocks
import {
  expect,
  test,
} from '@playwright/test';

// Prepare the Test Suite
test.describe('Css_Selectors usage', () => {
  test('Debug Console', async ({ page }) => {
    // 1. Open the page
    await page.goto('https://practice.sdetunicorns.com/');
    // 2. Localize the Get Started button and click it
    page.locator('#get-started').click();
    // 3. Verify url has #get-started without using regexp
    await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
    // 4. Verify url has #get-started using regexp
    await expect(page).toHaveURL(/.*#get-started/);
  });

  //After the test is prepared run it in debug mode - Debug chosen from the 
  //!!! Remember that to start this command in CLI you have to do it in the Git bash terminal in VScode:
  // DEBUG=pw:api npx playwright test "3.Css_Selector.spec.ts" -g "Css_Selectors\s+usage\s+Clicking\s+get\s+Started\s+Button$"
  // ====== Playwright Trace viewer ==========
  /* Trace viewer is a great tiik tgqat qkkiws ys ti see what happens setp by step when we run our test/s.
  The trace viewer is a moew interactive tool than Debu console
  */
  // 1. Prepare the test
  test('Playwright Trace Viewer', async ({ page }) => {
    // 1. Open the page
    await page.goto('https://practice.sdetunicorns.com/contact');
    // 2. Fill out the input fields
    await page.locator('.contact-name input').fill('Test Name_2')
    await page.locator('.contact-email input').fill('test_deb@mail.com');
    await page.locator('.contact-phone input').fill('134567864');
    await page.locator('.contact-message textarea').fill('This is a test message for "Trace viewer"');
    // 3. Add a soft assertrion
    await expect.soft(page.locator('.contact-message textarea')).toHaveText('This is a test message for "Trace viewer"');
    // 4.Click submit
    await page.locator('button[type=submit]').click();
    // 5. Verify sudddess message
    const successAlert = page.locator('div[role="alert"]');
    await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    // Now by knowing that that test is going to fail we can ser in "playwright.config.ts" the trace to be 'on' (always)
    /*
    Available options to record a trace:

       'on-first-retry' - Record a trace only when retrying a test for the first time.
       'on-all-retries' - Record traces for all test retries.
       'off' - Do not record a trace.
       'on' - Record a trace for each test. (not recommended as it's performance heavy)
       'retain-on-failure' - Record a trace for each test, but remove it from successful test runs.
       You can also use trace: 'retain-on-failure' if you do not enable retries but still want traces for failed tests.

       If you are not using Playwright as a Test Runner, use the browserContext.tracing API instead. 
       !!! When we set all now we can simply run the test in the VSCode
    */
  });
  // ================= PLAYWRIGHT INSPECTOR =============
  /* The playwright inspector is usuqlly one off the recdommended waqyw of doing degugging with playwright to wqlk through step by step to see what's happening with our test
  */
  // 1. Prepare the test
  test('Playwright Playwright inspector', async ({ page }) => {
    // 1. Open the page
    await page.goto('https://practice.sdetunicorns.com/contact');
    // Another way to run the playwright inspector is to use pause
    await page.pause();
    // 2. Fill out the input fields
    await page.locator('.contact-name input').fill('Test Name_Inspector')
    await page.locator('.contact-email input').fill('test_deb_ins@mail.com');
    await page.locator('.contact-phone input').fill('98765432109');
    await page.locator('textarea.input-text').fill('This is a test message for "Playwright Inspector"');
    // 3. Add a soft assertrion
    await expect.soft(page.locator('textarea.input-text')).toHaveText('This is a test message for "Playwright Inspector"');
    // 4.Click submit
    await page.locator('button[type=submit]').click();
    // 5. Verify sudddess message
    const successAlert = page.locator('div[role="alert"]');
    await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    /*The test is needed to be run directly from gitbash using such a command:
    PWDEBUG=1  npx playwright test "12.Debug_Console.spec.ts" -g "Css_Selectors\s+usage\s+Playwright\s+Playwright\s+inspector$"
    */
  });
  // With Recorder
  test('Done with recorder', async ({ page }) => {
    const { chromium } = require('playwright');

    (async () => {
      const browser = await chromium.launch({
        headless: false
      });
      const context = await browser.newContext();
      await page.getByLabel('Name *').click();
      await page.getByLabel('Name *').fill('My name');
      await page.getByLabel('Email *').click();
      await page.getByLabel('Email *').fill('my_email@gmail.com');
      await page.getByLabel('Phone *').click();
      await page.getByLabel('Phone *').fill('98763423');
      await page.getByLabel('Message').click();
      await page.getByLabel('Message').fill('My recorder message');
      // Add first assertion here
      await expect(page.getByLabel('Message')).toHaveText('My recorder message');

      await page.getByRole('button', { name: 'Submit' }).click();

      const successText = await page.getByText('Thanks for contacting us! We will be in touch with you shortly');
      // Add other assertion
      await expect(successText).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
      // Only add the assertion one

      // ---------------------
      await context.close();
      await browser.close();
    })();


  });
