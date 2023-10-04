//THIS PART IS DEDICATED TO EXPLAIN ASSERTIONS IN DETAIL
/*
PLAYWRIGHT uses expect assertions as same as JEST for instance.
To get more informations about assertions for playwright please visit that page
https://playwright.dev/docs/test-assertions
================================================
//The Page URL Main Address: "https://practice.sdetunicorns.com/"
*/
// Import the needed modules of playwright
import {
  expect,
  test,
} from '@playwright/test';

// Prepare the Test Suite
test.describe('Assertions for content verification', () => {
   test('Verify positively and negatively title of the page', async ({ page }) => {
        // 1. Visit the page
        await page.goto('https://practice.sdetunicorns.com/');
        // 2. Verify the title of the web page - positive assertion
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
        // 3. Verify the title of the web page - negative assertion
        await expect(page).not.toHaveTitle('Practice E-Commerce Site – SDET Unicorns');

   });
   test('Positive and Negative URL verification', async ({ page }) => {
        // 1. Go to the proper web site
        await page.goto('https://practice.sdetunicorns.com/');
        // 2. Verify whether URL is displayed as URL after clicking Home button (Negative test)
        await expect(page).not.toHaveURL(/.*get-started/);
        // 3. Press the Home button
        await page.locator('#get-started').click();
        // 4. Verify whether proper address is displayed (Positive path)
        await expect(page).toHaveURL(/.*#get-started/);
   });
   test('Heading tedt - positive and negative tests', async ({ page }) => {
        // 1. Go to the proper web site
        await page.goto('https://practice.sdetunicorns.com/');
        // 2. Create constant for heading text
        const headingText = page.locator('text=think different. Make different.');
        // 3. (Positive test) Verify whether the Heading Text is visible
        await expect(headingText).toBeVisible();
        // 4. (Negative test) Verify whether the Heading Text is not hidden
        await expect(headingText).not.toBeHidden();
   });
   
   
    
});

