//THE CIBTACT PAGE TESTS PREPARATION  - Make component for this code
// URL used: "https://practice.sdetunicorns.com/contact"

import {
  expect,
  test,
} from '@playwright/test';

// Import contact page
import ContactPage from '../pages/3.contact.page';

test.describe('Contact', () => {
  let contactPage: ContactPage;
  test('Fill contact form and verify success message', async ({ page }) => {
    contactPage = new ContactPage(page);
    // open contact page
    await contactPage.navigateContact();

    //  fill out the input fields
    // await page.locator('.contact-name input').fill('Test Name')
    // await page.locator('.contact-email input').fill('test@mail.com')
    // await page.locator('.contact-phone input').fill('134567864')
    // await page.locator('.contact-message textarea').fill('This is a test message')
    await contactPage.fillTheForm('Test Name', 'test@mail.com', '134567864', 'This is a test message');

    // add a soft assertion
    // await expect(contactPage.contactMessage).toHaveText("This is a test message")

    // click submit
    // await page.locator('button[type=submit]').click()

    // expect(test.info().errors.length).toBeLessThan(1)

    // verify success message
    // const successAlert = page.locator('div[role="alert"]')
    await expect(contactPage.successTxt).toHaveText(contactPage.successInnText);
  });

});