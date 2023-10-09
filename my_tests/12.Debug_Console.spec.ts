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
    test('Clicking get Started Button', async ({ page }) => {
         // 1. Open the page
         await page.goto('https://practice.sdetunicorns.com/');
         // 2. Localize the Get Started button and click it
         page.locator('#get-started').click();
         // 3. Verify url has #get-started without using regexp
         await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
         // 4. Verify url has #get-started using regexp
         await expect(page).toHaveURL(/.*#get-started/);
    });
 });
//After the test is prepared run it in debug mode - Debug chosen from the 
//!!! Remember that to start this command in CLI you have to do it in the Git bash terminal in VScode:
// DEBUG=pw:api npx playwright test "3.Css_Selector.spec.ts" -g "Css_Selectors\s+usage\s+Clicking\s+get\s+Started\s+Button$"

