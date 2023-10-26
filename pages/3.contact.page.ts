// TIME FOR PREPARE THE CLASS FOR CONTACT PAGE TS
// Firstly import the proper elements fro playwright test
import {
  Locator,
  Page,
} from '@playwright/test'; // !!!! To fix the autocompletion from this class we need to add Loctor from the same playwright module that the framework will see the 

// Class creation
class ContactPage {
    private page: Page;
    contactName: Locator;
    contactEmail: Locator;
    contactPhone: Locator;
    contactMessage: Locator;
    submitBtn: Locator;
    successTxt: Locator;
    successInnText: string;
    // constructor creation
    constructor(page: Page) {
        this.page = page;
        // More locators
        this.contactName = page.locator('.contact-name input');
        this.contactEmail = page.locator('.contact-email input');
        this.contactPhone = page.locator('.contact-phone input');
        this.contactMessage = page.locator('.contact-message textarea');
        this.submitBtn = page.locator('button[type=submit]');
        this.successTxt = page.locator('div[role="alert"]');
        this.successInnText = 'Thanks for contacting us! We will be in touch with you shortly';
    }
    // Methods
    async navigateContact() {
        await this.page.goto('/contact/');
    }
    // Form fill method
    async fillTheForm(name: string, email: string, phone: string, message: string) {
        await this.contactName.fill(name);
        await this.contactEmail.fill(email);
        await this.contactPhone.fill(phone);
        await this.contactMessage.fill(message);
        // Submit the form
        await this.submitBtn.click();
    }

}
// Class export
export default ContactPage;