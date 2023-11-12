// THAT PART IS DEDICATED TO PREPATATION OF POST API METHOD
/* eslint-disable playwright/expect-expect */
// THIS PART IS DEDICATED TO API INTEGRATION TESTING WITH PLAYWRIGHT
/* The POST request method can be used together with our GET method in beforeAll Hook implemented previously
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
        // The .delete() works similar as .get method
        // await fakerAPI.delete('users');
        // OR
        // await apiRequestContext.delete(url, options); 
        // Example:
        // await fakerAPI.delete('users', { timeout: 0 }); // More options are described in playwright documentation under URL: "https://playwright.dev/docs/api/class-apirequestcontext#api-request-context-delete"
        // // Method which disposes (removes) the data stored in the memory started with .get() method usage
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
        // Create Post method in here
        const postResponse = await fakerAPI
            .post('/users/1/todos', {
                data: {
                    "title": "Learn Playwright",
                    "completeed": false
                }
            });
        // Assign the received data from POST method to the variable
        const postResponseBody = await postResponse.json();
        // Verify the received body
        console.log(postResponseBody);
        // !!!!! Examples of other methods used in Playwright !!!!!!
        // PATCH Method
        // const patchResponse = await fakerAPI
        //     .patch('/users/1/todos', {
        //         data: {
        //             "title": "Learn Playwright",
        //             "completeed": false
        //         }
        //     });
        // // PUT Method
        // const putResponse = await fakerAPI
        //     .put('/users/1/todos', {
        //         data: {
        //             "title": "Learn Playwright",
        //             "completeed": false
        //         }
        //     });
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

