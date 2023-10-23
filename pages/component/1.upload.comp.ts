// Here create the same template of component which we created in cart.page file and which is a base of component of the whole tests
// 1. Creation:
// Import proper module form playwright
import {
  Locator,
  Page,
} from '@playwright/test';

// Class creation/ declaration
class UploadComponent {
    // Object declaration
    private page: Page;
    uploadInput: string;
    submitBtn: Locator;
    successText: Locator;
    //Constructor
    constructor(page: Page) {
        this.page = page;
        // When template is finished we can start to add locators for our Upload component
        this.uploadInput = '#upfile_1';
        this.submitBtn = page.locator('#upload_1');
        this.successText = page.locator('#wfu_messageblock_header_1_label_1');
    }
    // Prepare the method which will upload the files
    async uploadFile(filePath: string) {
                // 3. Upload test file using prepared variables in constructor
                await this.page.setInputFiles(this.uploadInput, filePath);
                // 4. Click the submit button using locator attached to this file
                await this.submitBtn.click();
    }
    // With such prepared method we can use it to shortened the uploading file test
}

// Exporting the class for global usage:
export default UploadComponent;
//!!! Now when the UploadComponent is ready to by used we need to tell our cart.page.ts file that such a component was added - switch to proper file to see how to prepare the specific part