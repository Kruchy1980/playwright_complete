// THAT PART IS DEDICATED TO DESCRIBE UPLOAD FILE TEST ASSERTION
/*
PLAYWRIGHT uses SOFT ASSERTIONS  - which are used for change common assertins that way.
If we do not want our test to feel inputs or other fields we can use soft assertion
Soft assertion simulates the user behavior only and do not break the test but only marks it as failed
================================================
//The Page URL Main Address: "https://practice.sdetunicorns.com/"
We can use two methods to upload file:
- Regular upload
- Upload with DOM manipulation - when upload input is hidden
*/
// Import the needed modules of playwright
import {
  expect,
  test,
} from '@playwright/test';

// To use path we need to attach new mosule here named path
const path = require('path');

// Prepare Test suite
test.describe('Upload file test', () => {
    // Prepare test for uploading file -Regular upload
   test('Regular upload', async ({ page }) => {
        /*
        For uploading the file we need to execute 6 steps as shown below 
        */
        // 1. Open the Propre page
        await page.goto('https://practice.sdetunicorns.com/cart/');
        // Before the next step prepare folder in playwright above the tests and name it data and place the file to being uploaded
        // 2. Provide file path
        const filePath = path.join(__dirname, '../data/solutions_result.png');
        // 3. Upload test file
        await page.setInputFiles('#upfile_1', filePath);
        // 4. Click the submit button
        await page.click('#upload_1');
        // 5. Create an assertion to verify proper result
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');
   });
   // Upload with DOM Manipulation - for hidden input field
//    test('DOM Manipulation upload', async ({ page }) => {
//         // 1. Open the page
//         await page.goto('https://practice.sdetunicorns.com/');  
//    });
});
