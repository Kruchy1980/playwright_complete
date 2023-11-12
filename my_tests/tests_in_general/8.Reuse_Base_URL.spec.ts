// THIS PART IS DEDICATED TO EXPLAIN HOW TO REUSE OUR BASE URL IN TESTS
// URL used: "https://practice.sdetunicorns.com/"
/* To create our baseURL we need to go to playwright.config.ts file and add in the defineConfig - use section such a parameter:
  use: {
    // Maximum time each action such as  `click()` can take. Defaults to 0 (no limit) 
    actionTimeout: 0,
    // Base URL to use in actions like `await page.goto('/')`. 
    baseURL: 'https://practice.sdetunicorns.com/', <-- !!! Here we are using our specific homepage URL

    // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer 
    trace: 'on', // <-- This parameter tesl us what exactly happened when we run the tests - explained in the file "12.Debug_Console.spec.ts"
  },
!!! No we can go to our pages files and change our urt to specific one
See files: 
-home.page.ts
-cart.page.ts
--- Add another 2 when created
*/