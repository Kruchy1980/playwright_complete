// THIS PART IS DEDICATED FOR FRAMWORK OPTIMIZATION
// URL used: "https://practice.sdetunicorns.com/"
/*
How to setup Eslint - the plugin which helps to keep standards in code writing 
The plugin eslint installation can be found under URL: "https://eslint.org/"
1. To add it to our project we can use a command: "npm init @eslint/config" in our terminal
2. Now we can add Eslint plugin playwright from URL: "npmjs.com".
For installation the command is: "npm install -D eslint-plugin-playwright"
3. After the step 1 and 2 we need to install two other plugins as well a)specified for typescript and b)
a) First plugin is to install eslint for typescript using following command: "npm i @typescript-eslint/eslint-plugin"
b) Plugin for typescript parser - both can be added in one command:
Result command: "npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev"
4. When all of the plugins are installed we should install VSCode extension named: "ESLint"
5. When the "ESLint" Plugin is installed in our VSCode then we can go to created file ".eslintcr.json" (or create it on our project when no automatically created) and we need to add the code or update when already added something
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:playwright/playwright-test"
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
With such a prepared eslintcr.json we can start to write any of our codes as shown below
*/
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
        //!!! Now we can use our eslint to give us any information about bugs in tests
        // By ryping in terminal such a command: npx eslint my_tests (npx eslint <folder with tests>)
        // We will be noted what is wrong with our tests then
        // Before starting the test description firstly we need to create the proper test instaqnce
        cartPage = new CartPage(page);
        // Now we can start our test description
        //1. Go to proper page
        // await page.goto('https://practice.sdetunicorns.com/cart/');
        // Use the navigatreCart method
        await cartPage.navigateCart();
        // Provide the file path
        const filePath = path.join(__dirname, '../data/solutions_result.png');
        // Upload the test file using string variable from component connected to the CartPage class
        await page.setInputFiles(cartPage.uploadComponent().uploadInput, filePath);
        // Now we can click the submit button
        await cartPage.uploadComponent().submitBtn.click();
        // Here we can use our assertion to find the proper text to be displayed with timeout assertion - use the private method for our both files to make the page module visible only for the class created
        await expect(cartPage.uploadComponent().successText).toContainText('uploaded successfully', {timeout: 4500});
        
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
        const filePath = path.join(__dirname, '../data/solutions_result.png');
        // 3. Upload file using prepared method uploadFile with passed paraqmeter
        cartPage.uploadComponent().uploadFile(filePath);
        // 4. Assert the proper success text is displayed
        await expect(cartPage.uploadComponent().successText).toContainText('uploaded successfully', {timeout: 2500}); 
    });
});