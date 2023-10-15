// THAT PART IS DEDICATED FOR FAIL TEST AND REVIEW EDITOR
// Import the important modules to the file
/*FOR the test purpose we will use the page which exists under URL: 
https://practice.sdetunicorns.com/
The title of website is:
"Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality."
 */
import {
  expect,
  test,
} from '@playwright/test';

// Set up the Test set for our tests
test.describe('Failed - Negative path', () => {
    //1. Firts negative path test preparation
    test('Failed tritle verifcation', async ({ page }) => {
        //1. Go to the specific page
        await page.goto('https://practice.sdetunicorns.com/');
        //2. Create failed assertion for title
        await expect(page).toHaveTitle('Failed title in here')
    }); 
  // Let's fix the test
  test('Proper title positive path', async ({ page }) => {
      // 1. Go to the specific page
      await page.goto('https://practice.sdetunicorns.com/');
      // 2. Create assertion of proper title
      await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
  });

});
/*
The failed test repoert will be displayed in the report with bug of wrong title asserrion displayed with all the paths described very clearly  
*/


