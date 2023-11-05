// THIS PART IS DEDICATED TO THIRD PARTY REPORTERS IN PLAYWRIGHT.
// The basic third party reporters are:
/*
1. Allure Reporter - installation first:
- go to "npm jd.com" and find allure-playwright package
- install it using command: npm 9 -D @playwright/test allure-playwright
Sterps to install and usage:
allure-playwright
This project implements Allure integration with Playwright Test framework.

Installation
npm i -D @playwright/test allure-playwright
or via yarn:

yarn add @playwright/test allure-playwright --dev
Usage
Either add allure-playwright into playwright.config.ts:

{
  reporter: "allure-playwright";
}
Or pass the same value via config file:

{
  reporter: [["line"], ["allure-playwright"]];
}
Or pass the same value via command line:

npx playwright test --reporter=line,allure-playwright
==============================
2. Tesults Reporter 
*/
// Prepare any test to be executed in here and prepare reporters for being used
// To use path we need to attach new mosule here named path
import path from 'path';

// Import the needed modules of playwright
import {
  expect,
  test,
} from '@playwright/test';

/*
The Page URL Main Address: "https://practice.sdetunicorns.com/"
We can use two methods to upload file:
- Regular upload
- Upload with DOM manipulation - when upload input is hidden
*/
// To have access to the specific component which is connected with cart.page.ts file we can us import only the part of the page file class - so CartPage class
import CartPage from '../../pages/2.cart.page';

// Prepare Test suite
test.describe('Upload file test using created component method', () => {
    // !!! Declare the variable for Cart page which will be visible in the test suite
    let cartPage: CartPage;
    // Prepare test for uploading file -Regular upload
    test('Upload file using the proper component', async ({ page }) => {
        // Before starting the test description firstly we need to create the proper test instaqnce
        cartPage = new CartPage(page);
        // Now we can start our test description
        //1. Go to proper page
        // await page.goto('https://practice.sdetunicorns.com/cart/');
        // Use the navigatreCart method
        await cartPage.navigateCart();
        // Provide the file path
        const filePath = path.join(__dirname, '../../data/3mb_file.pdf');
        // Upload the test file using string variable from component connected to the CartPage class
        await page.setInputFiles(cartPage.uploadComponent().uploadInput, filePath);
        // Now we can click the submit button
        await cartPage.uploadComponent().submitBtn.click();
        // Here we can use our assertion to find the proper text to be displayed with timeout assertion - use the private method for our both files to make the page module visible only for the class created
        await expect(cartPage.uploadComponent().successText).toContainText('uploaded successfully', { timeout: 40000 });
        
    });
    // After creation of the methods for adding and uploading the file we can create mor readable test 
    /* 1. Prepare the proper uploading methods in our component file
    2. Connect the method with proper CarrPage class
    3. Create the test using prepared methods 
    */
    test('Upload the file usind prepared methods in component Class', async ({ page }) => {
        // Remember to create the proper instaqnce as first step
        cartPage = new CartPage(page);
        // 1. Crete tests step 1 - navigate to the proper page
        await cartPage.navigateCart();
        // 2. Provide the file
        const filePath = path.join(__dirname, '../../data/solutions_result.png');
        // 3. Upload file using prepared method uploadFile with passed paraqmeter
        cartPage.uploadComponent().uploadFile(filePath);
        // 4. Assert the proper success text is displayed
        await expect(cartPage.uploadComponent().successText).toContainText('uploaded successfully', {timeout: 25000}); 
    });
});
