Project Title: Loop QA Test Project

Description:
This is an automation test script created to display competency with the Typescript coding language, and using the suite of tools collectively referred to as Playwright.

The code itself has been created to use what is referred to as "data driven" tests, and is essentially a collection of reusable helper functions that pull thier constant (const) values/variables 
from one another using import references. The test data is defined as key-value pairs within the dictionary that exists as the testCases. JSON file.

Installation/Usage Instructions:

Dependencies for this project are as follows:

  -  Node.js
  -  Visit: https://nodejs.org/en to download node.js
  -  Visit: https://nodejs.org/docs/latest/api/ for a complete list of documentation and articles about using Node.js

     
  -  Playwright
  -  Visit: https://playwright.dev/ to download Playwright
  -  Visit: https://playwright.dev/docs/intro for a complete list of documentation and articles about using playwright.

     
  -  Typescript
  -  Visit: https://www.typescriptlang.org/download/ for instructions to download typescript
  -  Visit: https://www.typescriptlang.org/docs/ for a complete list of documentation and articles about using Typescript.


<img src ="images/Screenshot 2025-09-26 180851.png">

To run these files locally, you will first need to download the files, and then install each of the dependencies.
Be sure to utilize playwright npx commands once finished.

Playwright Commands are as follows:

  npx playwright test
  ⦁	Runs the end to end tests.
  
  npx playwright test --ui
  ⦁	Starts the interactive UI mode
  
  npx playwright test --project=chromium
  ⦁	Runs the tests only on desktop Chrome.
  
  npx playwright test example
  ⦁	Runs the tests in a specific file.
  
  npx playwright --debug
  ⦁	Runs the tests in debug mode.
  
  npx playwright codegen
  ⦁	Auto Generate tests with Codegen.






Credits: A list of contributors or team members. 
Known Issues or Future Features: A section to manage expectations for users and potential contributors. 
