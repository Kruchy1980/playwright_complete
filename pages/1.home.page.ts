// THE FILE DEDICATED FOR STORING ALL LOCATORS/SELECTORS AND HELP METHODS ONLY.

import {
  Locator,
  Page,
} from '@playwright/test'; // !!!! To fix the autocompletion from this class we need to add Loctor from the same playwright module that the framework will see the 

//1 Create the class
class HomePage {
    // Declare property page (as in ts should be done)
    // Because of using TypeScript we need to assign all the types of vqariables used in here
    // The page can consists any elemnet to be visible ion the page
    page: Page; // !!! Now we need ot change all of the locators to proper module name then we need to go to our terst file and add proper property to eaCH VARIAvle declarartion
    getStartedBtn: Locator;
    headingText: Locator;
    homeLink: Locator;
    searchIcon: Locator;
    navLink: Locator;
    cSensitiveHeadingText: Locator;
    homeText: Locator;
    homeTextAlternate: Locator;
    homeTextAlternate_two: Locator;
    homeText_1: Locator;
    sectionTitle: Locator;
    searchIconAlt: Locator;
    // 2. Ccreate a constructor in the class which will store all of the needed locators - remember we arew using typescript here
    constructor(page: Page) { // !!! Using Typescript we need to add the type of parameter in constructor as well
        this.page = page; // the constructor for identify the page in the tests
        // Here we can assign other locators for the class - title variable
        // In the constructor we can use locators as well ex
        this.getStartedBtn = page.locator('#get-started');
        // Another locator - headingText
        this.headingText = page.locator('text=think different. Make different.');

        this.homeLink = page.locator('#zak-primary-menu:has-text("Home")');
        // this.homeLink = page.locator('#zak-primary-menu >> text=Home');
        this.searchIcon = page.locator('#zak-masthead > div > div > div > div.zak-header-col.zak-header-col--2 > div.zak-header-actions.zak-header-actions--desktop > div.zak-header-action.zak-header-search > a > svg');
        this.searchIconAlt = page.locator('//*[@id="zak-masthead"]/div/div/div/div[2]/div[1]/div[1]/a/svg');
        this.navLink = page.locator('#zak-primary-menu li[id*=menu-item]');
        this.cSensitiveHeadingText = page.locator('text="Think different. Make different."');
        this.homeText_1 = page.locator('#zak-primary-menu >> text=Home');
        this.homeTextAlternate = page.locator('#zak-primary-menu:has-text("Home")');
        this.homeTextAlternate_two = page.locator('#zak-primary-menu :text-is("Home")');
        this.sectionTitle = page.locator('//*[@id="primary"]/div/section[1]/div/div/div/div[1]/div/h3/div/h2/span');
        //======== The whole part above - the constructor is the bqasic page templatge and this is something that we are going to use for all the page files that we are going to be created. 
    }
    // Adding methods in here as asynchronous method for navigation
    async navigate() {
        await this.page.goto('/'); 
    }
    // Getting navLinks Texts
    async getNavLinksText() {
        return this.navLink.allInnerTexts();
    }
}

// Export the class to be visible from other folders
export default HomePage;
// Now we can go to our "home.spec.ts" and import the whole HomePage Class in here