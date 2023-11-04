// THAT PART IS DEDICATED FOR CROSS BROWSER TESTING WHAT IS AVAILABLE BY PLAYWRIGHT.
// To run the tests in proper browser we only need to add to our Tests suites method only and in playwright.config.ts file we must uncomment the proper browser in projects object.
// Here we will just use an example of it.
// Prepare some tests
import {
  expect,
  test,
} from '@playwright/test';

// Import contact page
import ContactPage from '../../pages/3.contact.page';

// eslint-disable-next-line playwright/no-focused-test
  test.describe.only('Contact - Multibrowser tests', () => { // After using the only in the tests suite go to our playwright.config.ts file and prapare / uncomment proper browsers we want to use - even all of them can be uncommented
    let contactPage: ContactPage;
    test('Fill contact form and verify success message', async ({ page }) => {
      contactPage = new ContactPage(page);
      // open contact page
      await contactPage.navigateContact();
  
      //  fill out the input fields
      await contactPage.fillTheForm('Test Name', 'test@mail.com', '134567864', 'This is a test message');
        // verify success message
      await expect(contactPage.successTxt).toHaveText(contactPage.successInnText);
    });
  
  });

