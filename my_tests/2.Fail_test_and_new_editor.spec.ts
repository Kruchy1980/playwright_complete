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
        // Create failed assertion for title
        await expect(page).toHaveTitle('Failed title in here')
    }); 
});


