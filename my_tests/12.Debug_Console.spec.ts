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
         await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch'); 
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
    
});
