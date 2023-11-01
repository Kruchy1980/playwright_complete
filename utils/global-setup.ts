// THE FILE IS PREPARED FOR MAKE LOGGING IN GLOBALLY USABLED - STARTED FROM FILE: "14.Signed_In_State.spec.ts"
// Prepare the async function for configuration of playwright (when function will be configured the import will be done automatically)
// Automatically added import of needed module
import {
  chromium,
  FullConfig,
} from '@playwright/test';

// The function preparation
async function globalSetup(config: FullConfig) {
    // Here copy our script from ghe BeforAll Hook method
    // The browser is needed in here but to make it visible we need to create new variable which will be dedicated to the proper browser
    const browser = await chromium.launch(); // Prepare browser and run it in here
    // Before running we need to crete new instance of the page as shown below
    const page = await browser.newPage({ colorScheme: 'dark' }) // it creates our page firstly and then it do other steps assigned here  but page must be a new variable in here
    // 1. Navigate to ptopert page
    await page.goto('https://practice.sdetunicorns.com/my-account/'); // Just for the test here we need to put entire path for our page in here - do not use baseURL - until it won't be fixed
    // Not logged in State
    await page.context().storageState({ path: 'notLoggedInState.json'}); // The not Logged in state should be enaugh to be added here - other JSON file is created but firstly we nee to fix the file with tests: "15.Multiple_Signed_In_Roles.spec.ts".


    //Log in State
    // 2. Fill up the login form 
    await page.locator('#username').fill('practiceuser1');
    await page.locator('#password').fill('PracticePass1!');
    // 3. Press Log in button
    await page.locator(`[value='Log in']`).click();
    // 4. Verify whether on the page the "Logout" link is displayed
    // await expect(page.locator('//*[@id="post-9"]/div/div/div/nav/ul/li[2]/a')).toBeVisible(); //<-- this block is not needed anymore in here because we do not want to make assertion each time we would like to run our tests
    // Store the current stage to the file 'loggedInState.json' which will be crated when the function will be runned
    await page.context().storageState({ path: 'loggedInState.json'}); // Takes all the current stqte of context of our page and stores the browser contacts, current cookies, as well as the local storage snapshot's in the proper file
    // After the authentication operation we should close the browser
    await browser.close();
}

// Exporting the function to be seen globally
export default globalSetup;
//!! Now when the global log in method is prepared we need to go to the file: "playwright.config.ts" file and set the proper configuration in ther