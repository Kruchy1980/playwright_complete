// THAT PART IS DEDICATED TO DESCRIBE API CONTROLER USAGE
// The "Controler File" is a file which we prepare specially to control proper behavior of API methods prepared in specific periods of time
/* The Controller file setup creation:
1. Under the project create new Folder named "controller"
2. In the folder create file named "api.controller.ts"
3. Add a new class named APIController in the file and fill it up as shown in the file "api.controller.ts" in controller folder
=======================
All of the Api handshakes are done in playwright via APIRequestContext
*/
// I. Import proper modules
import { faker } from '@faker-js/faker';
import {
  APIResponse,
  expect,
  test,
} from '@playwright/test';

// Import creteed APIController from the controller folder
import apiController from '../../controller/api.controller';
// II. import helping modules - from prepared classes
import ContactPage from '../../pages/3.contact.page';

//III. Preparet test suite for our tests
test.describe('API usage in UI tests weith APIController class usage', () => {
    // Declare the ContactPage;
    let contactPage: ContactPage;
    // For the API Purpose we can use fakerAPI variable to be declared which will take an APIRequestContext part of playwright
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // zlet fakerAPI: APIRequestContext; // The faker API is not needed for the tests anymore so we can easily get rid of it as well
    // For the test purspose let's create another variable which will be responsible for one object of body only
    let randomPerson: APIResponse;
    // Create before All hook for our test - to store our data which needs to be executed before using API in tests
    // !!!! WHEN THE API CONTROLLER IS ALl OF THE METHODS FROM HERE CAN BE READ OFF
    test.beforeAll(async () => {// The playwright is not needed anymore so we can get rid of it 
        // Get read of the oldly prepared method and change it to use APIController
        await apiController.init();
        // Choose randomly created user
        randomPerson = await apiController.getRandomUser();
        // Verify random person
        console.log(randomPerson);
        // Crete post rsponse
        const newUserTodo = await apiController.createUserTodo();
        // Verify the new user Todo:
        console.log(newUserTodo);

    });

    // Prepare first test
    test('First test with faker and API Controler usage', async ({ page }) => {
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
    test('First test with fAPI and API Controller usage', async ({ page }) => {
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

