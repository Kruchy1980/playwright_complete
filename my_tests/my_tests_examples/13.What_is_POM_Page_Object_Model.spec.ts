// PART DEDICATED FOR ANSWER THE QUESTION
// WHAT IS POM (PAGE OBJECT MODEL)
// URL used: "https://practice.sdetunicorns.com/"
/*
POM consist 3 groups elements:
1. Authoring:
High Level API Creation used by user (The methods which can be used through out the framework)
2. Maintenance:
Used for storing selectors in one place (capturing our element selectors) to avoid repetition in our framework
3. Readability:
The former parts helps ordering and maintenance our tests files (it makes our tests more user friendly)
=========================== POM IN PLAYWRIGHT =============================
1. Create test File (where high level test steps are added)
2. Create Page file (The part with selectors and helper methods)
==== Example 1: PAGE TEMPLATE
1. Create home.spec.ts file for the high level test steps
2. Create home.page.ts file for the selectors and eventually helper methods
To spread the selectors from the tests file first 
1. Create a folder in playwright and name it pages
2. Create file with "home.page.ts" 
3. Create all of the selectors/methods in the file
4. Import the selectors/methods to main Test file eg "home.spec.ts"
5. Create tests for automate the home Page using imported selectors/methods
*/