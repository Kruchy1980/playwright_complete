// THAT PART IS DEDICATED TO SOFT ASSERTIONS USAGE
/*
PLAYWRIGHT uses SOFT ASSERTIONS  - which are used for change common assertins that way.
If we do not want our test to feel inputs or other fields we can use soft assertion
Soft assertion simulates the user behavior only and do not break the test but only marks it as failed
================================================
//The Page URL Main Address: "https://practice.sdetunicorns.com/"
*/
// Import the needed modules of playwright
import {
  expect,
  test,
} from '@playwright/test';

// Prepare test Suite
test.describe('Soft assertions clarification', () => {
    // Prepare the test
    test('Verify the element using soft assertion', async ({ page }) => {
        // 1. Open the page
        await page.goto('https://practice.sdetunicorns.com/contact');
        //  fill out the input fields
        await page.locator('.contact-name input').fill('Test Name');
        await page.locator('.contact-email input').fill('test@mail.com');
        await page.locator('.contact-phone input').fill('134567864');
        await page.locator('.contact-message textarea').focus();
        await page.locator('.contact-message textarea').fill('This is a test message My JK');

        // add a soft assertion - negative path
        await expect.soft(page.locator('.contact-message textarea')).toHaveText("Fail test message");
        // add a soft assertion - positive path
        await expect.soft(page.locator('.contact-message textarea')).toHaveText("This is a test message My JK");

        // click submit
        await page.locator('button[type=submit]').click();

        expect(test.info().errors.length).toBeLessThan(1);

        // verify success message
        const successAlert = page.locator('div[role="alert"]');
        await expect(successAlert).toHaveText('for contacting us! We will be in touch with you shortly');
    });
    
});
