// THIS PART IS DEDICATED FOR USING SELECTORS FOR MULTIPLE ELEMENTS IN PLAYWRIGHT
//The Page URL Main Address: "https://practice.sdetunicorns.com/"
// Firstly import the needed modules from playwright\
import {
  expect,
  test,
} from '@playwright/test';

// Prepart the Test suite
test.describe('Working with multiple elements', () => {
    // Prepare the variables for test Suite - the variable for indentify multiple elemnents
    const listItem = '#zak-primary-menu li[id*=menu-item]'; // All the elements of list which are started from menu-item
    // Prepart the object (array) with all of the names of the links visible in page navigation part
    const expectedLinks = [
        'Home',
        'About',
        'Shop',
        'Blog',
        'Contact',
        'My account'
    ];
    // Prepare the test
    test('Finding all elements of the list texts', async ({ page }) => {
        // 1. Go to specified page
        await page.goto('https://practice.sdetunicorns.com/');
        // 2. Find the nav links - the await is not needed for locators because it is not a promise
        const navLinks =  page.locator(listItem);
        // 3. Verify the nav links texts - the method allTextContents() returns Node list and method toEqual() compare the list with expected one. We need to wait until all of the elements show on the page so we are using await inside expect assertion because this assertion is not a promise anymore.
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
        // !! To verify specific element only we can use nth(<value of element>) as is possible in node list
        // 4. Prepare locator for the 4th element "Contact" in the list - one specific element only
        const navSpecificLinkText = page.locator(listItem).nth(4);
        // 5. Prepare verification of the specific element name
        expect(await navSpecificLinkText.textContent()).toEqual('Contact');
        //OR
        expect(await navSpecificLinkText.textContent()).toEqual(expectedLinks[4]);
        // So we can use loop to verify simple elements content
        for (let i = 0; i< expectedLinks.length; i++) {
            const allElementsSingulary = page.locator(listItem).nth(i);
            expect(await allElementsSingulary.textContent()).toEqual(expectedLinks[i]);
        }
        // Printing out all the links the elementHandkes() gives access to each element of Node list
        for (const el of await navLinks.elementHandles()) {
            console.log(await el.textContent());
            // To finish tomorrow or next day
        };
    });
});
