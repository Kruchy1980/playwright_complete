import path from 'path';

// Import the needed modules of playwright
import {
  expect,
  test,
} from '@playwright/test';

//The Page URL Main Address: "https://practice.sdetunicorns.com/"
// To have access to the specific component which is connected with cart.page.ts file we can us import only the part of the page file class - so CartPage class
import CartPage from '../../pages/2.cart.page';

// !!! With parametrization we can specify how many times we want to run our test

// Prepare Test suite
test.describe('Upload file', () => {
    // !!! Declare the variable for Cart page which will be visible in the test suite
    let cartPage: CartPage;
    //!!! To use parametrization we need to create the proper Array with elements we would like to use
    const fileName = ['solutions_result.png', '3mb_file.pdf'];
    // Now we need to create loop which can run the same test as many times as long is the created Array
    for(const name of fileName) {
    // Prepare test for uploading file -Regular upload - we must use backticks in the title instead of apostrophes/quotes
        test(`Should upload a ${name} file`, async ({ page }) => {
            // Before starting the test description firstly we need to create the proper test instaqnce
            cartPage = new CartPage(page);
            // Now we can start our test description
            //1. Go to proper page
            await cartPage.navigateCart();
            // Provide the file path
            const filePath = path.join(__dirname, `../../data/${name}`); // here we can only use our variable from the array
            // Upload the test file using string variable from component connected to the CartPage class
            await page.setInputFiles(cartPage.uploadComponent().uploadInput, filePath);
            // Now we can click the submit button
            await cartPage.uploadComponent().submitBtn.click();
            // Here we can use our assertion to find the proper text to be displayed with timeout assertion - use the private method for our both files to make the page module visible only for the class created
            await expect(cartPage.uploadComponent().successText).toContainText('uploaded successfully', {timeout: 13000});
            
        });
    }

    // eslint-disable-next-line playwright/no-skipped-test
    test.skip('Upload the file usind prepared methods in component Class', async ({ page }) => {
        // Remember to create the proper instaqnce as first step
        cartPage = new CartPage(page);
        // 1. Crete tests step 1 - navigate to the proper page
        await cartPage.navigateCart();
        // 2. Provide the file
        const filePath = path.join(__dirname, '../../data/solutions_result.png');
        // 3. Upload file using prepared method uploadFile with passed paraqmeter
        cartPage.uploadComponent().uploadFile(filePath);
        // 4. Assert the proper success text is displayed
        await expect(cartPage.uploadComponent().successText).toContainText('uploaded successfully', {timeout: 2500}); 
    });
});