// PART OF THE COURSE DEDICATED FOR USING HOOK ONCE FOR ALL OF THE TESTS IN OUR TEST SUITES
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
  Page,
  test,
} from '@playwright/test';

// Let's create the Test suite
// Just because we are running the tests pararelly we need to add to the test suite .serial to run them one after the other not pararelly
test.describe.serial('Account Verification - more testes', () => {
    // Before we could verify the URL's we need to login our user to the proper authentication page - let's create test under it
    // And we need to run it each subtests using beforAll Hook works a little bit different
    // To use beforeAll Hook we need to prepare new browser instance at first because we do not run those tests pararelly
    // 1. Cteate a variable Page
    let page: Page; // It tells to the Playwright to use the single page context for all of the texts
    // In the Bewfore all we need to use browser parameter
    test.beforeAll(async ({ browser }) => {
        // Before running we need to crete new instance of the page as shown below
        page = await browser.newPage({colorScheme: 'dark' }) // it creates our page firstly and then it do other steps assigned here 
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
    // For those tests we need to remove the new page context because we are creating it in our beforeAll so remove the pafe from tests
    test('Orders Access', async () => {
        // 1.Navigate to proper page
        // await page.goto('/my-account'); //--> no more needed because of our beforeEach Hook
        // 2. Locate and click the ordres link on the list
        page.locator(`li a[href*='orders']`).click();
        // 3. Verify proper URL is displayed
        await expect(page).toHaveURL(/.*orders/);
    });
    // Crate the trest which will verify the URL of orders page
    // For those tests we need to remove the new page context because we are creating it in our beforeAll so remove the pafe from tests
    test('Downloads Access', async () => {
        // 1. // Navigatge to proper page
        // await page.goto('/my-account/'); //--> no more needed because of our beforeEach Hook
        // 2. Locate and navigate to the orders
        page.locator(`li a[href*='downloads']`).click();
        // 3. Verify the proper URL is displayed on the page
        await expect(page).toHaveURL(/.*downloads/);
    });
    // Create tests which verifie Addresses, and account details
    // For those tests we need to remove the new page context because we are creating it in our beforeAll so remove the pafe from tests
    test('Addresses Access', async () => {
        // 1. Locagte and navigate to addresses part
        // I. SOLUTION
        // page.locator(`li a[href*='edit-address']`).click();
        // II. SOLUTION
        page.locator(`li a:has-text('addresses')`).click();
        // 2. Vwerify proper URL is displayed
        await expect(page).toHaveURL(/.*edit-address/, { timeout: 20000 });
    })

});
