// THIS PART IS DEDICATED TO USING RANDOM DATA FOR EACH TEST
// URL used: "https://practice.sdetunicorns.com/contact"
// That part is dedicaed to prepare randomize data for filling up our form
// We can use a special tool called Faker js which generates massive amounts of fake but realistic datqa for testing and development
// To use our faker rool we can go under the URL: "https://fakerjs.dev/"
/* HOW TO USE FAKER.JS FROM ABOVE PAGE:
1. On the page click "Get Started" button (it moves us to the Faker API)
2. Before we start to use FakerJS we need to install it under our project using the following command in terminal
"npm install @faker-js/faker --save-dev"
3. To use it in our project we need to import it to our tests file
4. Use faker to create random Data in our project go to specific part of our code - filling the form and use the faker to do it
*/
// Ad3. Importing faker
import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';
import {
  expect,
  test,
} from '@playwright/test';

// Import contact page
import ContactPage from '../../pages/3.contact.page';

test.describe('Contact', () => {
    let contactPage: ContactPage;
    test('Fill contact form and verify success message', async ({ page }) => {
      contactPage = new ContactPage(page);
      // open contact page
      await contactPage.navigateContact();
  
      //  fill out the input fields and click the submit button

      await contactPage.fillTheForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraphs(2));
  
      // verify success message
      await expect(contactPage.successTxt).toHaveText(contactPage.successInnText);
    });
  
  });