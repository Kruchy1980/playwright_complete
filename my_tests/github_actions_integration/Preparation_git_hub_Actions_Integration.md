## THAT PART IS DEDICATED TO INTEGRATE THE TESTS WITH GITHUB
### Steps to be done before:
1. Integrate tests with GitHub Actions
2. Setup a workflow file
3. Push changes to gitHub to trigger workflow
4. Integrate reporying with existing workfglow
5. Download Artifacts to view the reports

#### SETUP WORKFLOW FILE & TRIGGER WORKFLOW.
***Before starting the integration make prepare GitHub repository for the project and push the project there***
**Similarly it is done when the project already exists in the repository**
**1.** In the project create a new folder named ***.github***  if not created before
**2.** In the folder create other folder named ***workflows***
**3.** Inside the "**worklows**" folder crate file namy can be any but good practice is to use:
- playwright.yml
OR
- e2e.yml
**4.** In the file add such an entries:
```
name: Playwright Tests
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
jobs:
  test:
    name: Run all tests
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 18
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```
**5.** Push the file to the GitHub repository
**6.** Now we can check how it looks in our GitHub - so go to our repository and press the yellow status circle to see how it behaves in GitHub

#### INTEGRATE REPORTING IN THE WORKFLOW
1. In the file **playwright.yml** add next field as following:
```
      if: always()
      # with:
      #   name: playwright-report
      #   path: playwright-report/
      #   retention-days: 30 (optional)
      with:
        name: Test-results
        path: test-results
        retention-days: 30 (optional)
```
2. Go to playwright.config.ts and change the reporter to:
```
 reporter: [['line'], ["allure-playwright", {outputFolder: 'test-results'}]],
```
3. When zipped file downlaoaded and extracted to our project folder than
use the command in git bash terminal: npx allure generate **unzipped report folder** clean && npx allure open
eg: npx allure generate test-results clean && npx allure open
4. Alternate method is to open the zip file directly on the URL:  **https://trace.playwright.dev/** by opening the file on the page

#### ABOUT FIXING BROKEN TEST & RERUN WORKFLOW
We need to correct the broken test manually using directions from the playwright report.




