// THAT PART IS DEDICATED FOR RUNNING TESTS PARARELLY
// The tests runned pararelly may be runned in different combination EG
/* I. PREPARATION (Example only):
1. File 1 with tests:
Test_1,
Test_2
2. File 2 with tests:
Test_3,
Test_4
II. Test Suites for Separate workers preparation:
a) Worker 1 includes:
Test_1, (from file no 1)
Test_4, (from file no 2)
b) Worker 2 includes:
Test_2, (from file no 1)
Test_5 (Additionally added only for that worker)
c) Worker 3 includes:
Test_4 (from file no 2),
Test_6 (Additionally added only for that worker)
!!! Additional information - the Workers Are shut down automatically whenever the specific tests are finished it allows the tests execution to be done faster (!!!And probably can be executed on a different browsers!!!).
WORKERS - They are browser instances but isolated ones what means that they can work totally independently (hope so)
*/
// For the purpose of parallely tests we will prepare the specific tests as - Test_1.spec.ts, Test_2.spec.ts, Test_3.spec.ts, Test_4.spec.ts, Test_5.spec.ts, Test_6.spec.ts - Files with some separate tests
// See the results in the specific files firstly

