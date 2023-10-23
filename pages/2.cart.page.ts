// The cart page class is created here
// 1. Import ther page from playwright to get the object which will be set by us
import { Page } from '@playwright/test';

// The import was added automatically so it allows the CartPage class to see the component prepared for uploading files
import UploadComponent from './component/1.upload.comp';

//Create the CartPage Class
class CartPage {
    // Variables - main made private
    private page: Page;
    // Constructor with page object only
    constructor(page: Page) {
        this.page = page;
    };
    // We can add navigate method for navigating to the proper page
    async navigateCart() {
        await this.page.goto('/cart/'); 
    }
    // !! After the component preparation we can us a component in here
    // Add method here wg=huch rweturns the instance of component prepared in the Upload component file
    uploadComponent() {
        // Returning instance of component which is prepared for uploading files 
        return new UploadComponent(this.page);
    };
    // We can add the proper methods in here - methods for adding and uploading the file
}

// Export the class to be visible globally
export default CartPage;
//!!!!! FINALLY WE CAN UPDATE OUR UPLOADING FILES tests file