// Import path from path from playwright
import path from 'path';

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
    test('Wait for Timeout hardcoded - !!! Bad Practice', async ({ page }) => {
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
        // Hardcoded sleep usage !!! Bad Practice
        await page.waitForTimeout(5000); // Wait for 5 seconds
        // 5. Create an assertion to verify proper result
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');      
    });
    test('Waiting for specific condition to be met - better way to be used for wait', async ({ page }) => {
        // 1. Go to cart page
        await page.goto('https://practice.sdetunicorns.com/cart');
        // 2. Provide the file variable for 3mb_file.pdf
        const filePdfPath = path.join(__dirname, '../data/3mb_file.pdf');
        // 3. Upload the file
        await page.setInputFiles('#upfile_1', filePdfPath);

    });
    
    
});

