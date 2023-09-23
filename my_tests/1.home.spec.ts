// THE FIRST TEST ADDED FOR VERIFICATION PAGE TITLE ONLY
/* To start writing the tests firstly we need to import proper modules, where:
expect - for assertions
test - for writing tests
FOR the test purpose we will use the page which exists under URL: 
https://practice.sdetunicorns.com/
The title of website is:
"Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality."
 */
import {
  expect,
  test,
} from '@playwright/test';

// here we can start to type the first test to verify propeer page title is displayed
// Start to write the test here - only title verification
// 1. Create the Test Set
test.describe('Home', () => {
    // 1. Test to verify the proper title of website
   test('Open HomePage and verify title', async ({ page }) => {
        // 1. Open the page
        await page.goto('https://practice.sdetunicorns.com/');
        // 2. Verify title assertion
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
   });
    
});
