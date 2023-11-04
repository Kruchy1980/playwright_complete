// PART DEDICATED TO METHODS USED TO TESTS SEPARATION 
// !!!!! Firstly implement the methods to our  file home.page.ts
// URL used: "https://practice.sdetunicorns.com/"
// Import the main Playwright modules
import {
  expect,
  test,
} from '@playwright/test';

// Here we should import our Class with Selectors from the specific path
import HomePage from '../../pages/1.home.page';

// Create the test Suite for our HomePage
    test.describe('Home Page Tests', () => {
        // Here declare variable which will store our constructor (now empty variable only)
        let homePage: HomePage; // !!! Remember that acces to our page is only in the test block not here so here we can not assign the constructor The class must be addded to see the autocompletion from homePage instance Creator
        // For the links names verirfication we can declare here proper array with links names if are used globally if not we do not need to add them in test suite just for the specific test we want to add it
        const expectedLinks = [
          'Home',
          'About',
          'Shop',
          'Blog',
          'Contact',
          'My account'
      ];
        // Now we can start to prepare our first test "Open HomePage and verify the title"
        test('Open HomePage and verify the title', async ({ page }) => {
            // !! The first thing in hetre we need to create new page constructor based on our class befor start the test creation
            homePage = new HomePage(page); // Not necessarily in here
            // Now we can start to add content of our test
            // 1. Open the page we want to test
            // await page.goto('https://practice.sdetunicorns.com/'); //Move the method to HomePage Class and create a help method for navigation
            // Using the declared method
            await homePage.navigate();
            // 2. verify title using variable from class
            await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
        });
        test('Clicking get Started Button', async ({ page }) => {
            // !! The first thing in hetre we need to create new page constructor based on our class befor start the test creation
            homePage = new HomePage(page);
            // 1. Open the page
            await page.goto('https://practice.sdetunicorns.com/');
            // 2. Localize the Get Started button and click it
            // page.locator('#get-started').click(); //<-- old way usage
            // 2.1 Using locators declared in file
            await homePage.getStartedBtn.click();
            // 3. Verify url has #get-started without using regexp
            await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
            // 4. Verify url has #get-started using regexp
            await expect(page).toHaveURL(/.*#get-started/);
       });
       test('Verify header text', async ({ page }) => {
        // !! Remember about the instance assigning
        homePage = new HomePage(page);
        // 1. Open the proper page
        await page.goto('https://practice.sdetunicorns.com/');
        // 2. find the text locator firstly create variable - case insensitive matching
        // const headingText = page.locator('text=think different. Make different.'); // this matching is case insensitive
      //   const headingText = await homePage.headingText
          // After correction in home.page.ts file and in Autocompletion_from_page Tests file we can now see the autocompletion for specific class instance usind the following variable creation
          const headingText = homePage.headingText;
        // 3. Verify whether heading text is visible
        await expect(headingText).toBeVisible();
        // 4. Find exact (case sensitive) locator here "<value>" -  the quotes means exact match which is case sensitive
        // const cSensitiveHeadingText = page.locator('text="Think different. Make different."');
        const cSensitiveHeadingText = homePage.cSensitiveHeadingText;
        // 5. Verify the case sensitive header text
        await expect(cSensitiveHeadingText).toBeVisible();
      });
        test('Verify home link is enabled', async ({ page }) => {
            // !! Remember to assign the class instance
            homePage = new HomePage(page);
            // 1. go tyo the specific page
            await page.goto('https://practice.sdetunicorns.com/home');
            // 2. Find Home button on the page using  css id and verification via Text
            // const homeText = page.locator('#zak-primary-menu >> text=Home');
            const homeText = homePage.homeText_1;
            // 3. Verify home text is enabled
            await expect(homeText).toBeEnabled();
            // 4. Find Home button on the page using  css id and verification via Text
            // const homeText_Link = page.locator('#zak-primary-menu:has-text("Home")');
            const homeText_Link = homePage.homeLink;
            // 5. Verify home text is enabled
            await expect(homeText_Link).toBeEnabled();
            // 6. Find Home button on the page using  css id and verification via Text alternate way
            // const homeTextAlternate = page.locator('#zak-primary-menu:has-text("Home")');
            const homeTextAlternate = homePage.homeTextAlternate;
            // 7. Verify home text is enabled
            await expect(homeTextAlternate).toBeEnabled();
            // 8. Find Home button on the page using  css id and verification via Text - somwhere in between the element with id = zak-primary-menu
            // const homeTextAlternate_two = page.locator('#zak-primary-menu :text-is("Home")');
            const homeTextAlternate_two = homePage.homeTextAlternate_two;
            // 7. Verify home text is enabled
            await expect(homeTextAlternate_two).toBeEnabled();
        });
        test('Verify Search icon is visible using xpath selector and css selector', async ({ page }) => {
          homePage = new HomePage(page);
          // 1. Go to proper page
          await page.goto('https://practice.sdetunicorns.com/');
          // 2. Select element "search-icon" on the page using css selector
          // const searchIcon = page.locator('#zak-masthead > div > div > div > div.zak-header-col.zak-header-col--2 > div.zak-header-actions.zak-header-actions--desktop > div.zak-header-action.zak-header-search > a > svg'); //.isVisible();
          const searchIcon = homePage.searchIcon;
          await expect(searchIcon).toBeVisible();
          // 3. Other verification of displayed element - variable preparation 
          // const sectionTitle = page.locator('//*[@id="primary"]/div/section[1]/div/div/div/div[1]/div/h3/div/h2/span');
          const sectionTitle = homePage.sectionTitle;
          // 4. Assertion for element with xpath locator used
          await expect(sectionTitle).toBeVisible();
          // !!5. The problem with search icon solution is to use xpath selectors
          // const searchIcon = page.locator('//*[@id="zak-masthead"]/div/div/div/div[2]/div[1]/div[1]/a/svg');
          // const searchIconAlt = await homePage.searchIconAlt;
          // // // II6. Assertion try
          // await expect(searchIconAlt).toBeVisible();
        });
        test('Finding all elements of the list texts', async ({ page }) => {
          // !! homePage preparation
          homePage = new HomePage(page);
          // 1. Go to specified page
          await page.goto('https://practice.sdetunicorns.com/');
          // 2. Find the nav links - the await is not needed for locators because it is not a promise
          // const navLinks =  page.locator('#zak-primary-menu li[id*=menu-item]');
          const navLinks = homePage.navLink;
          // 3. Verify the nav links texts - the method allTextContents() returns Node list and method toEqual() compare the list with expected one. We need to wait until all of the elements show on the page so we are using await inside expect assertion because this assertion is not a promise anymore.
          expect(await navLinks.allTextContents()).toEqual(expectedLinks);
          // !! To verify specific element only we can use nth(<value of element>) as is possible in node list
          // 4. Prepare locator for the 4th element "Contact" in the list - one specific element only
          // const navSpecificLinkText = page.locator('#zak-primary-menu li[id*=menu-item]').nth(4);
          const navSpecificLinkText = navLinks.nth(4);
          // 5. Prepare verification of the specific element name
          await expect(navSpecificLinkText).toHaveText('Contact');
          //OR
          await expect(navSpecificLinkText).toHaveText(expectedLinks[4]);
          // So we can use loop to verify simple elements content
          for (let i = 0; i< expectedLinks.length; i++) {
              const allElementsSingulary = page.locator('#zak-primary-menu li[id*=menu-item]').nth(i);
              await expect(allElementsSingulary).toHaveText(expectedLinks[i]);
          }
          // Using our method declared in Class HomePage we can simply verify all text content using the declared method
          expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
          // Printing out all the links the elementHandkes() gives access to each element of Node list
          for (const el of await navLinks.elementHandles()) {
            console.log(await el.textContent());
            // To finish tomorrow or next day
          }
        });   
    
    });
    
