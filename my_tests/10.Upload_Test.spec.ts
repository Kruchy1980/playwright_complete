// THAT PART IS DEDICATED TO DESCRIBE UPLOAD FILE TEST ASSERTION
// To use path we need to attach new mosule here named path
import path from 'path';

/*
The Page URL Main Address: "https://practice.sdetunicorns.com/"
We can use two methods to upload file:
- Regular upload
- Upload with DOM manipulation - when upload input is hidden
*/
// Import the needed modules of playwright
import {
  expect,
  test,
} from '@playwright/test';

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
   test('DOM Manipulation upload', async ({ page }) => {
        // 1. Open the page
        await page.goto('https://practice.sdetunicorns.com//cart');
        // 2. Provide file path file
        const filePath = path.join(__dirname, '../data/solutions_result.png');
        // 3. Make some DOM Manipulation - use evaluate - which verifies whether the element of DOM is ready to be used
        // The manipulation of the DOM element disable hidden class of the element to make it visible
        await page.evaluate(async () => {
          // 1. Prepare selector we want to use
          const selector = document.querySelector('#upfile_1');
          // 2. Add class to the DOM element
          // a) set condition on which the selector existence is confirmed
          if (selector) {  
            selector.className = ''; // the class is removed from seledctor
          };
        })
        // 4. Upload test file
        await page.setInputFiles('#upfile_1', filePath); // Throws an error
        // 5. Create an assertion to verify proper result
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');
   });
});
