// THIS PART IS DEDICATED FOR USING CSS SELECTOR IN PLAYWRIGHT
//The Page URL Main Address: "https://practice.sdetunicorns.com/"
// Firstly import the needed modules from playwright
import {
  expect,
  test,
} from '@playwright/test';

// Now we can start to write a test.
test.describe('Css_Selectors usage', () => {
   test('Clicking get Started Button', async ({ page }) => {
        // 1. Open the page
        await page.goto('https://practice.sdetunicorns.com/');
        // 2. Localize the Get Started button and click it
        await page.locator('#get-started').click();
        // 3. Verify url has #get-started without using regexp
        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
        // 4. Verify url has #get-started using regexp
        await expect(page).toHaveURL(/.*#get-started/);

   })
    
});
