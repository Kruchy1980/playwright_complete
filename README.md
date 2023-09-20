# THE COMPLETE COURSE OF PLAYWRIGHT FROM BEGINNER
The playwright from scratch course

## Playwright Installation

1. Firstly install the node.js
2. Secondly go to the terminal - in our case terminal of VSCode
3. Go to playwright.dev
4. Press "Get Started" - it moves us to the documentqation of playwright
5. Use the command in the CLI of terminal: "npm init playwright@latest" in the terminal
6. When the installing package will appear press y
7. Choose the typescript later on Do you want to use TypeScript or JavaScript?
8. When the Where to put your end-to-end tests? appears choose tests as default says
9. Add a GitHub Actions workflow? at present we can use the default false option
10. Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) - choose default = true
11. The initialization of project will start automatically
12. ✔ Success! Created a Playwright Test project at E:\GIT Repos\Playwright_complete\playwright_complete
Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨
