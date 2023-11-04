//THAT PART IS DEDICATED TO AUTHENTICATION CHALENGES
//The Page URL Main Address: "https://practice.sdetunicorns.com/"
/* In this part we will work with authentication
My account:
LOGIN:
a) Access orders
b) Access downloads 
Credentials in theory:
Login: practiceuser1
Password: PracticePass1!
*/
// Firstly import needed modules
import {
  expect,
  test,
} from '@playwright/test';

// Let's create the Test suite
test.describe('Account Verification', () => {
    // Before we could verify the URL's we need to login our user to the proper authentication page - let's create test under it
    // And we need to run it each subtests using beforEach Hook
    test.beforeEach(async ({ page }) => {
           // 1. Navigate to ptopert page
           await page.goto('/my-account/');
           // 2. Fill up the login form 
           await page.locator('#username').fill('practiceuser1');
           await page.locator('#password').fill('PracticePass1!');
           // 3. Press Log in button
           await page.locator(`[value='Log in']`).click();
           // 4. Verify whether on the page the "Logout" link is displayed
           await expect(page.locator('//*[@id="post-9"]/div/div/div/nav/ul/li[2]/a')).toBeVisible();
    });
    
    

    // Create tests which allows us to get to the Orders tab of our account
    test('Orders Access', async ({ page }) => {
       // 1.Navigate to proper page
        // await page.goto('/my-account'); //--> no more needed because of our beforeEach Hook
        // 2. Locate and click the ordres link on the list
        page.locator(`li a[href*='orders']`).click();
        // 3. Verify proper URL is displayed
        await expect(page).toHaveURL(/.*orders/);
    });
    // Crate the trest which will verify the URL of orders page
    test('Downloads Access', async ({ page }) => {
        // 1. // Navigatge to proper page
        // await page.goto('/my-account/'); //--> no more needed because of our beforeEach Hook
        // 2. Locate and navigate to the orders
        page.locator(`li a[href*='downloads']`).click();
        // 3. Verify the proper URL is displayed on the page
        await expect(page).toHaveURL(/.*downloads/); 
    });
});
