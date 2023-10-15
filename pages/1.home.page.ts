// THE FILE DEDICATED FOR STORING ALL LOCATORS/SELECTORS AND HELP METHODS ONLY.

import { Page } from '@playwright/test';

//1 Create the class
class HomePage {
    // Declare property page (as in ts should be done)
    // Because of using TypeScript we need to assign all the types of vqariables used in here
    page: any; // The page can consists any elemnet to be visible ion the page
    getStartedBtn: any;
    headingText: any;
    homeLink: any;
    searchIcon: any;
    navLinks: any;
    cSensitiveHeadingText: any;
    homeText: any;
    homeTextAlternate: any;
    homeTextAlternate_two: any;
    homeText_1: any;
    // 2. Ccreate a constructor in the class which will store all of the needed locators - remember we arew using typescript here
    constructor(page: Page) {
        this.page = page; // the constructor for identify the page in the tests
        // Here we can assign other locators for the class - title variable
        // In the constructor we can use locators as well ex
        this.getStartedBtn = page.locator('#get-started');
        // Another locator - headingText
        this.headingText = page.locator('text=think different. Make different.');

        this.homeLink = page.locator('#zak-primary-menu:has-text("Home")');
        // this.homeLink = page.locator('#zak-primary-menu >> text=Home');
        this.searchIcon = page.locator('//*[@id="primary-menu"]//*[@class="tg-icon tg-icon-search"]');
        this.navLinks = page.locator('#primary-menu li[id*=menu]');
        this.cSensitiveHeadingText = page.locator('text="Think different. Make different."');
        this.homeText_1 = page.locator('#zak-primary-menu >> text=Home');
        this.homeTextAlternate = page.locator('#zak-primary-menu:has-text("Home")');
        this.homeTextAlternate_two = page.locator('#zak-primary-menu :text-is("Home")');
        //======== The whole part above - the constructor is the bqasic page templatge and this is something that we are going to use for all the page files that we are going to be created. 
    };
};

// Export the class to be visible from other folders
export default HomePage;
// Now we can go to our "home.spec.ts" and import the whole HomePage Class in here