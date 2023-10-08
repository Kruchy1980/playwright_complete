// Import path from path from playwright
import * as path from 'path';

//THIS PART IS DEDICATED TO EXPLAIN WAIT COMMANDS IN PLAYWRIGHT AS LISTED BELOW
/*
1. WAITING FOR TIMEOUT - HARDCODED - the hardcoded waits should not be used in our code
2. WAITING FOR STATE - DEPENDEND OF THE STATE IN CONDITION
3. ASSERTION TIMEOUT - WHEN ASSERTION CAN NOT BE MET 
!!! IMPORTANT INFORMATION - how to create dummy file in command prompt
The command used for creation such a file is:
fsutil file createnew "<path>\<filename>.<extention of tile>" <numeric value of weignt of file in bytes>
Extensions used for dummy file creation:
txt/pdf/xml/xmls/odt and more if possible
Ex:
fsutil file createnew "E:\Dummy_Files\5mb_weigth.pdf"
*/
/*
PLAYWRIGHT can use waitings - which are:
a) Hardcoded
b) Conditionally Waits
c) Assertrion Waits
================================================
//The Page URL Main Address: "https://practice.sdetunicorns.com/"
*/
// Import the needed modules of playwright
import {
  expect,
  test,
} from '@playwright/test';

// Create Test Suite
test.describe('Waits in Playwright', () => {
    // I. Hardcoded Wait for Timeout
    test('Wait for Timeout hardcoded - !!! Bad Practice "Wait for Timeout"', async ({ page }) => {
        // 1. Go to cart page
        await page.goto('https://practice.sdetunicorns.com/cart');
        // 2. Provide the file variable for 3mb_file.pdf
        const filePdfPath = path.join(__dirname, '../data/3mb_file.pdf');
        // 3. Upload the file
        await page.setInputFiles('#upfile_1', filePdfPath);
        // 4. Click the submit button
        await page.locator('#upload_1').click();
        // Waiting Timeout hardcoded - bad practice to use - only for showing - !!! avoid to use it in preparing test cases
        /* The waitings are used when the test must wait a little bit for a result to be displayed*/
        // Hardcoded sleep usage !!! Bad Practice - easy to use but bwad practice
        await page.waitForTimeout(5000); // Wait for 5 seconds
        // 5. Create an assertion to verify proper result
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');      
    });
    /*
    ======== WAIT FOR STATE - better use of waitings ============
Returns when element specified by locator satisfies the state option.

If target element already satisfies the condition, the method returns immediately. Otherwise, waits for up to timeout milliseconds until the condition is met.

Usage

    const orderSent = page.locator('#order-sent');
    await orderSent.waitFor();

Arguments

    options Object (optional)
    state "attached"|"detached"|"visible"|"hidden" (optional)#

    Defaults to 'visible'. Can be either:

        'attached' - wait for element to be present in DOM.
        'detached' - wait for element to not be present in DOM.
        'visible' - wait for element to have non-empty bounding box and no visibility:hidden. Note that element without any content or with display:none has an empty bounding box and is not considered visible.
        'hidden' - wait for element to be either detached from DOM, or have an empty bounding box or visibility:hidden. This is opposite to the 'visible' option.
        timeout number (optional)#

Maximum time in milliseconds. Defaults to 0 - no timeout. The default value can be changed via actionTimeout option in the config, or by using the browserContext.setDefaultTimeout() or page.setDefaultTimeout() methods. 
    */
    test('Waiting for specific condition to be met - better way to be used for wait "Wait for state"', async ({ page }) => {
        // 1. Go to cart page
        await page.goto('https://practice.sdetunicorns.com/cart');
        // 2. Provide the file variable for 3mb_file.pdf
        const filePdfPath = path.join(__dirname, '../data/3mb_file.pdf');
        // 3. Upload the file
        await page.setInputFiles('#upfile_1', filePdfPath);
        // 4. Click the submit button
        await page.locator('#upload_1').click();
        // 5. wait for condition to be met for assertrion
        // Create cvariable of locator
        const messageDisplayed = page.locator('#wfu_messageblock_header_1_label_1');
        // Wait for condition to be met
        await messageDisplayed.waitFor({state: 'visible', timeout: 10000}); // it waits for element to be visible but max 10000ms as timeout says (if the )
        // 6. Create assertion
        await expect(messageDisplayed).toContainText('uploaded successfully');

    });
    
    
});

