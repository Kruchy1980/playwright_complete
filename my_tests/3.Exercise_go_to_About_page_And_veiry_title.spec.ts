// THIS THE EXCERCISE WHICH FORCE US TO NAVIGATE TO ABOUT PAGE AND VERIFICATION OF TITLE IN THERE
// PAGE URL Main: 'https://practice.sdetunicorns.com/'
// About page URL: 'https://practice.sdetunicorns.com/about/' --> for second solution
// Import modules
import {
  expect,
  test,
} from '@playwright/test';

// Create the test set
test.describe('2 ways of goint to about page and verify title', () => {
   // I. Solution by clicking about button
   test('Clicking the about button and verify the page title', async ({ page }) => {
        // 1. Go to main page
        await page.goto('https://practice.sdetunicorns.com/');
        // 2. Click the about button
        await page.locator('xpath=//*[@id="menu-item-491"]/a').click();
        // 3. Assertion for the title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
   });
   // II. Solution by using the specific URL
   test('By using the specific URL', async ({ page }) => {
        // 1. Go to the specific page with about in URL
        await page.goto('https://practice.sdetunicorns.com/about/');
        // 2. Use the assertion to verify the title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
   });
});
