// THAT PART IS DEDICATED TO OVERVIEW, IMPLEMENTATION AND TESTS EXECUTION IN SIGNED IN ROLE (single role).
//The Page baseURL Main Address: "https://practice.sdetunicorns.com/"
/* Small Description
The Sgned in role is used when we want to make some more tests in one browser window - when possible and we do not nee dot use the BeforeAll Hook for the solution is called/named "Signed-in State"
The path FOR IMPLEMENTQation the signed-in state is as foollowing:
GLOBAL LOGIN (globalSetup.ts - where we will generate json file) -->  STORAGE STATE (json file - generated by our globalSedtup.ts methods - it will store our cookies, sessions, everything realted to that browser instance we've just created) --> REGISTER SCRIPT (playwright.config.ts)
My account:
LOGIN:
a) Access orders
b) Access downloads 
Credentials in theory:
Login: practiceuser1
Password: PracticePass1!
!!! The beforeAll Hook is greate only when we want to run our test sequentially only  what extends the time of the tests execution so it is good practice to prepare other files which will store the fixed values for our tests. For fixing it we can used something what is named: "Signed-in State" described above.
STEPS TO PREPARE PROPER "SIGNED-IN_STATE":
1. Prepare the "utils" folder in our project on the lefel of main folder
2. In the folder prepare the file: "global-setup.ts"
2. Prepare the globalSetup.ts wherwe we only will add  
3. Automatically generated Storage state (after methods in globalSetup.ts file)
4. Change the configuration in our: "playwright.config.ts" file.
*/
// Firstly import needed modules
import {
  expect,
  test,
} from '@playwright/test';

// Let's create the Test suite
/* The tests Suite will be modified in following changes:
1. Remove serial because it is not needed anymore
2. Remmove page variable as well
3. Remove all the beforeAll Hook as well
4. To our tests we need to add page content to be used
5. Add the navigation to the proper pages as well
*/
test.describe('Account Verification - global setups added', () => {
    // Before we could verify the URL's we need to login our user to the proper authentication page - let's create test under it
    // And we need to run it each subtests using beforAll Hook works a little bit different
    // To use beforeAll Hook we need to prepare new browser instance at first because we do not run those tests pararelly
    // 1. Cteate a variable Page
    //   let page: Page; // !! is not needed anymore
    // In the Bewfore all we need to use browser parameter
    // At present the whole beforeAll Hook is not needed to be executed at present
    //   test.beforeAll(async ({ browser }) => {
    //       // Before running we need to crete new instance of the page as shown below
    //       page = await browser.newPage({colorScheme: 'dark' }) // it creates our page firstly and then it do other steps assigned here 
    //       // 1. Navigate to ptopert page
    //       await page.goto('/my-account/');
    //       // 2. Fill up the login form 
    //       await page.locator('#username').fill('practiceuser1');
    //       await page.locator('#password').fill('PracticePass1!');
    //       // 3. Press Log in button
    //       await page.locator(`[value='Log in']`).click();
    //       // 4. Verify whether on the page the "Logout" link is displayed
    //       await expect(page.locator('//*[@id="post-9"]/div/div/div/nav/ul/li[2]/a')).toBeVisible();
    //   });



    // Create tests which allows us to get to the Orders tab of our account
    // For those tests we need to remove the new page context because we are creating it in our beforeAll so remove the pafe from tests
    test('Orders Access', async ({ page }) => { // the page content needs to be added in here to be working properly
        // 1. Navigate to proper page at present
        await page.goto('/my-account/');
        // 2. Locate and click the ordres link on the list
        page.locator(`li a[href*='orders']`).click();
        // 3. Verify proper URL is displayed
        await expect(page).toHaveURL(/.*orders/);
    });
    // Crate the trest which will verify the URL of orders page
    // For those tests we need to remove the new page context because we are creating it in our beforeAll so remove the pafe from tests
    test('Downloads Access', async ({ page }) => { // the page content needs to be added in here to be working properly
        // 1. Navigate to proper page at present
        await page.goto('/my-account/');
        // 2. Locate and navigate to the orders
        page.locator(`li a[href*='downloads']`).click();
        // 3. Verify the proper URL is displayed on the page
        await expect(page).toHaveURL(/.*downloads/);
    });
    // Create tests which verifie Addresses, and account details
    // For those tests we need to remove the new page context because we are creating it in our beforeAll so remove the pafe from tests
    test('Address Access', async ({ page }) => { // the page content needs to be added in here to be working properly
        // 1. Navigate to proper page at present
        await page.goto('/my-account/');
        // 2. Locagte and navigate to addresses part
        // I. SOLUTION
        // page.locator(`li a[href*='edit-address']`).click();
        // II. SOLUTION
        page.locator(`li a:has-text('addresses')`).click();
        // 3. Vwerify proper URL is displayed
        await expect(page).toHaveURL(/.*edit-address/);
    });
});