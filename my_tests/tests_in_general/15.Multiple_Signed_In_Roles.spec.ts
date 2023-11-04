// THAT PART IS DEDICATED FOR USING MULTIPLE SIGNED IN ROELES OVERVIEW AND IMPLEMENTATION (It should fix the problem with endless logged in user)
/* To Avoid the problem that user stays logged in on the page we can prepare other "Not Signed-in State" file in our utils and make the state be usable by any tests which do not need to use our logged in user.
Steps to be performed:
1. Prepare the state which uses not logged in user for our tests and add it to the globalSetup.ts file
2. Register the not logged in State in our playwright.config.ts
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
test.describe('Account Verification - global setups added - multiple roles added', () => {
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
    // Add additional test which verifies whether the login button is logged in or not - that test will work only when user won't be logged in.
    // The test must be created in a separate test suite - to make the test suite working properly we need to update our globalSetup.ts file so let's go there firstly
    test.describe('Account Page', () => {
        // Here we need to tell to the test that it should use other state than logged in by adding that kind of method
        test.use({ storageState: 'notLoggedInState.json' }); //It should be enough to run the test easily
        test('Verify whether login button is visible or not', async ({ page }) => {
            // 1. Navigate to proper page at present
            await page.goto('/my-account/');
            // 2. Verify whether login field is visible
            await expect(page.locator('form[class*="login"]')).toBeVisible();
            // 3. Verify whether form Register is visible
            await expect(page.locator('form[class*="register"]')).toBeVisible();
        });
    });
});
