// THE BLOG PAGE EXERCISE - Make component for this code
// URL used: "https://practice.sdetunicorns.com/blog"

import {
  expect,
  test,
} from '@playwright/test';

import BlogPage from '../../pages/4.blog.page';

test.describe('Blog', () => {
  let blogPage: BlogPage;

  test('Verify Recent Posts count and verify the length of each list item', async ({ page }) => {
    blogPage = new BlogPage(page);
    // open blog page
    await blogPage.navigateBlog();

    // get the recent post list elements
    // const recentPostsList = blogPage.recentPostsList;

    // loop through the list and assert the char length > 10
    for (const el of await blogPage.recentPostsList.elementHandles()) {
      expect(((await el.textContent())!.trim()).length).toBeGreaterThan(10) // The "!" is added to avoid error when the textContent is null
    }

    // assert the total length = 5
    expect(await blogPage.recentPostsList.count()).toEqual(5)
  });

});