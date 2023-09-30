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
        const homeText = page.locator('#zak-primary-menu >> text=Home');
        // 3. Verify home text is enabled
        await expect(homeText).toBeEnabled();
        // 4. Find Home button on the page using  css id and verification via Text alternate way
        const homeTextAlternate = page.locator('#zak-primary-menu:has-text("Home")');
        // 5. Verify home text is enabled
        await expect(homeTextAlternate).toBeEnabled();
        // 6. Find Home button on the page using  css id and verification via Text - somwhere in between the element with id = zak-primary-menu
        const homeTextAlternate_two = await page.locator('#zak-primary-menu :text-is("Home")');
        // 7. Verify home text is enabled
        await expect(homeTextAlternate_two).toBeEnabled();
    });
});
