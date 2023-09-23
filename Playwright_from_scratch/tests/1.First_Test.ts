/* FOR THE VERY FIRST TEST WE WILL USE THE PAGE SITUATED UNDER URL
URL: https://practice.sdetunicorns.com/
FOR
Title verification: Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.
*/
// Before we start writing tests we need to import specific modules from playwright tests,
/*Where:
test - for test creation
expect - for assertion 
*/
import {
  expect,
  test,
} from '@playwright/test';

test.describe('Home', () => {
    test('Open home page and verify title', async ({ page }) => {
        // 1. Open URL
        await page.goto('https://practice.sdetunicorns.com/'); // page - driver, goto() goes to the URL we want to
        // 2. Verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality'); // This line will verify whether proper title is displayed

    });
});
