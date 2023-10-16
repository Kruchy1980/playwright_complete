// THIS PART IS DEDICATED FOR USING XPATH SELECTOR IN PLAYWRIGHT
//The Page URL Main Address: "https://practice.sdetunicorns.com/"
// Firstly import the needed modules from playwright
import {
  expect,
  test,
} from '@playwright/test';

// Here we are starting logic for tests
test.describe('Usage of xpat selector', () => {
   // Start the test in here
   test('Xpath - selector usage - search icon displayed', async ({ page }) => {
      // 1. Go to proper page
      await page.goto('https://practice.sdetunicorns.com/');
      // 2. Select element "search-icon" on the page using xpath selector
      await page.locator('//*[@class="zakra-icon--magnifying-glass"]').isVisible();
      // 3. Other verification of displayed element - variable preparation 
      const sectionTitle = page.locator('//*[@id="primary"]/div/section[1]/div/div/div/div[1]/div/h3/div/h2/span');
      // 4. Assertion for element with xpath locator used
      await expect(sectionTitle).toBeVisible();
      // !!5. The problem with search icon solution is to use css selectors
      const searchIcon = page.locator('#zak-masthead > div > div > div > div.zak-header-col.zak-header-col--2 > div.zak-header-actions.zak-header-actions--desktop > div.zak-header-action.zak-header-search > a > svg');
      // II6. Assertion try
      await expect(searchIcon).toBeVisible();
   });
});
/*
There is problem with assertion for xpath to be used for the icon visibility
*/
