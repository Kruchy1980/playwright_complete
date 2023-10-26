// CLASS CREATION FOR THE BLOG PAGE
// Import the necessary module
import {
  Locator,
  Page,
} from '@playwright/test';

// Class creation
class BlogPage {
    private page: Page;
    recentPostsList: Locator;
    // constructor
    constructor(page: Page) {
        this.page = page;
        // Locators
        this.recentPostsList = page.locator('#recent-posts-3 ul li');
    }
    // Navigqate method to the Blog page
    async navigateBlog() {
        await this.page.goto('/blog/');
    }

}

// Export the Blog Page;
export default BlogPage;