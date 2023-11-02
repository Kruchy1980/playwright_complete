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
});