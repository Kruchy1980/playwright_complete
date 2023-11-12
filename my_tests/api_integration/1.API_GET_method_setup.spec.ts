/* eslint-disable playwright/expect-expect */
// THIS PART IS DEDICATED TO API INTEGRATION TESTING WITH PLAYWRIGHT
/* For the test purpose the api from URL: "https://jsonplaceholder.typicode.com/" will be used -  to gnerate fake API for the test purpose together with faker package it is powerfull tool to generate fake API's
The playwright allows us to test API in two ways:
1. Standalone API Tests - the API testing itself:
- Focuses only on API Testing
- No interactio with UI Tests
- That kind of API testing is done when we have Access to API and verifying only the API proper work 
- The tests are focusing on API testing itself
2. API Tests within UI Tests testing the API while tests implementation (!!! DURING THIS COURSE WE WILL FOCUSE ON THAT PART)
- Sending API requests from teh UI Tests
- API Testing is not a primary focus
- That kind of API testing is done when we have want to verify the proper API  usage (proper method is sent in specified time)
- Verify whether proper data is passed via specific method (API)
=======================
All of the Api handshakes are done in playwright via APIRequestContext
*/
// I. Import proper modules
import { faker } from '@faker-js/faker';
import {
  APIRequestContext,
  APIResponse,
  expect,
  test,
} from '@playwright/test';

// II. import helping modules - from prepared classes
import ContactPage from '../../pages/3.contact.page';

//III. Preparet test suite for our tests
test.describe('API usage in UI tests', () => {
    // Declare the ContactPage;
    let contactPage: ContactPage;
    // For the API Purpose we can use fakerAPI variable to be declared which will take an APIRequestContext part of playwright
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let fakerAPI: APIRequestContext;
    // For the test purspose let's create another variable which will be responsible for one object of body only
    let randomPerson: APIResponse;
    // Create before All hook for our test - to store our data which needs to be executed before using API in tests
    test.beforeAll(async ({ playwright }) => { // Change the browser for playwright - reason for that change is to creatge context we need to use in playwribht so we are going to do playwright.request.newContext method using
        // Define the fakerAPI in here
        fakerAPI = await playwright.request.newContext({
            // Declare baseURL for our fake API in here
            baseURL: 'https://jsonplaceholder.typicode.com/',
        });
        // Faker API GET method Usage - on the page are different datas which we can use to prepare the needed data for our test and assign it to the response variable
        const response = await fakerAPI.get('users');
        // For the test purpose the response.json is enough to be received
        const responseBody = await response.json();
        // Receiving the random number of person
        // eslint-disable-next-line prefer-const
        let randomNo = Math.round(Math.random() * responseBody.length);
        // console.log(randomNo);
        // Prepare the random person method from the received response
        // the rancdom person returned from responseBody
        randomPerson = responseBody[randomNo];
        console.log(randomPerson);
        // !!!!!! JUST FOR TEST PURPOSE AND MAKE THE RESPONSE VISIBLE
        // Just for verification what exactly is returned in our response
        // console.log(responseBody);
    });

    // Prepare first test
    test('First test without API usage', async ({ page }) => {
        // As in each test let's prepare contactPage instgance
        contactPage = new ContactPage(page);
        // 1. Open Contqct Page
        await contactPage.navigateContact();
        // 2. Fill out the contact form
        await contactPage.fillTheForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.sentences(4));
        // 3. Verify success message
        await expect(contactPage.successTxt).toHaveText(contactPage.successInnText);

    });
    // Prepare test with API Usage
    test('First test with API usage', async ({ page }) => {
        // As in each test let's prepare contactPage instgance
        contactPage = new ContactPage(page);
        // 1. Open Contqct Page
        await contactPage.navigateContact();
        // 2. Fill out the contact form - here we can change it to our  API response
        await contactPage.fillTheForm(randomPerson['name'], randomPerson['email'], randomPerson['phone'], randomPerson['company'].name);
        // 3. Verify success message
        await expect(contactPage.successTxt).toHaveText(contactPage.successInnText);

    });

});

