// Import the main Playwright modules
import {
  expect,
  test,
} from '@playwright/test';

// Here we should import our Class with Selectors from the specific path
import HomePage from '../../pages/1.home.page';

// Create the test Suite for our HomePage
test.describe('Home Page Tests - Parallel', () => {
    // Here declare variable which will store our constructor (now empty variable only)
    let homePage: HomePage; // Remember that acces to our page is only in the test block not here so here we can not assign the constructor
    // For the links names verirfication we can declare here proper array with links names
    // const expectedLinks = [
    //     'Home',
    //     'About',
    //     'Shop',
    //     'Blog',
    //     'Contact',
    //     'My account'
    // ];
    // Now we can start to prepare our first test "Open HomePage and verify the title"
    test('Open HomePage and verify the title', async ({ page }) => {
        // !! The first thing in hetre we need to create new page constructor based on our class befor start the test creation
        homePage = new HomePage(page); // Not necessarily in here
        // Now we can start to add content of our test
        // 1. Open the page we want to test
        await page.goto('https://practice.sdetunicorns.com/');
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
        const headingText = await homePage.headingText;
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
        const homeText = await homePage.homeText_1;
        // 3. Verify home text is enabled
        await expect(homeText).toBeEnabled();
        // 4. Find Home button on the page using  css id and verification via Text
        // const homeText_Link = page.locator('#zak-primary-menu:has-text("Home")');
        const homeText_Link = await homePage.homeLink;
        // 5. Verify home text is enabled
        await expect(homeText_Link).toBeEnabled();
        // 6. Find Home button on the page using  css id and verification via Text alternate way
        // const homeTextAlternate = page.locator('#zak-primary-menu:has-text("Home")');
        const homeTextAlternate = await homePage.homeTextAlternate;
        // 7. Verify home text is enabled
        await expect(homeTextAlternate).toBeEnabled();
        // 8. Find Home button on the page using  css id and verification via Text - somwhere in between the element with id = zak-primary-menu
        // const homeTextAlternate_two = page.locator('#zak-primary-menu :text-is("Home")');
        const homeTextAlternate_two = await homePage.homeTextAlternate_two;
        // 7. Verify home text is enabled
        await expect(homeTextAlternate_two).toBeEnabled();
    });
});
