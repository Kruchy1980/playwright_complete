// THIS PART IS DEDICATED FOR USING TEXT AND CSS SELECTOR IN PLAYWRIGHT
//The Page URL Main Address: "https://practice.sdetunicorns.com/"
// Firstly import the needed modules from playwright
import {
  expect,
  test,
} from '@playwright/test';

// Create test set
test.describe('Text and Css Selectors', () => {
    // Crate first test
    test('Verify home link is enabled', async ({ page }) => {
        // 1. go tyo the specific page
        await page.goto('https://practice.sdetunicorns.com/');
        // 2. Find Home button on the page using  css id and verification via Text
        const homeText = await page.locator('#zak-primary-menu >> text=Home');
        // 3. Verify home text is enabled
        await expect(homeText).toBeEnabled();    
    });  
});
