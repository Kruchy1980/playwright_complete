// THIS PART IS DEDICATED TO REPORTERS WHICH IS BUILDED IN THE PLAYWRIGHT APP AND FOR THE THIRD PARTY REPORTERS.
//!!! THAT PART IS DEDICATED ONLY FOR BUILT IN REPORTERS
/* The Built-in reporters are the following ones:
1. List Reporter
2. Line Reporter
3. Dot Reporter
4. HTML Reporter
5. JSON Reporter
Those above reporters are the reporters which are built-in in Playwright and cqan be used adhoc in the project.
!!! How to configure the built-in reporters??
Ad 1,2,3,4,5.
When running the tests we need to add a flag of Reporter we woule like to use as following:
1) List == --reporter=list
The whole command will look like:
npx playwright test <file_with tests path - "my_tests/tests_in_general/1.home.spec.ts"> --reporter=list
So properly it will look like following
npx playwright test "my_tests/tests_in_general/1.home.spec.ts" --reporter=list
=======
2) Line == --reporter=line
The whole command will look like:
npx playwright test <file_with tests path - "my_tests/tests_in_general/1.home.spec.ts"> --reporter=list
So properly it will look like following
npx playwright test "my_tests/tests_in_general/1.home.spec.ts" --reporter=line
=======
3) Dot == --reporter=dot
The whole command will look like:
npx playwright test <file_with tests path - "my_tests/tests_in_general/1.home.spec.ts"> --reporter=dot
So properly it will look like following
npx playwright test "my_tests/tests_in_general/1.home.spec.ts" --reporter=dot
=======
4) HTML == --reporter=html
The whole command will look like:
npx playwright test <file_with tests path - "my_tests/tests_in_general/1.home.spec.ts"> --reporter=html
So properly it will look like following
npx playwright test "my_tests/tests_in_general/1.home.spec.ts" --reporter=html
=======
5) JSON == --reporter=json
The whole command will look like:
npx playwright test <file_with tests path - "my_tests/tests_in_general/1.home.spec.ts"> --reporter=json
So properly it will look like following
npx playwright test "my_tests/tests_in_general/1.home.spec.ts" --reporter=json
=========================
!!!!!!!!!!!!! IMPORTANT !!!!!!!!!!!!!!!!!!!!!!
The reporters can be set in the playwright.config.ts file under trhe reporter:
- More than one reporter can be used
- When using more than one reporter we need to add them as an elements of the list in playrwright configuration file:
more than 1 can be added as an array with one element only so it is array of arrays
!!! Example only:
reporter: [['html'], ['list']],

*/

