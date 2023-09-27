// THIS PART IS DEDICATED FOR USING CSS SELECTOR IN PLAYWRIGHT
//The Page URL Main Address: "https://practice.sdetunicorns.com/"
// Firstly import the needed modules from playwright
import {
  expect,
  test,
} from '@playwright/test';

// Now we can prepare our test
test.describe('Text Selectors', () => {
   //Prepare the test
   test('Verift header textr', async ({ page }) => {
        // 1. Open the proper page
        await page.goto('https://practice.sdetunicorns.com/');
        // 2. find the text locator firsdtly create variable
        const headingText = await page.locator('text=Think different. Make different.');
        // 3. Verify whether heading text is visible
        await expect(headingText).toBeVisible();
   }); 
});
