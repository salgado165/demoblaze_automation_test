Project: Test Automation – Demoblaze
Framework: Cypress
Test Types: API and End to End

--------------------------------------------------
GENERAL DESCRIPTION
--------------------------------------------------
This repository contains the automated tests developed for the
web application https://www.demoblaze.com.

The project includes:
- API tests for Login and Signup process
- End to End tests for the shopping and purchase 

API and UI test where coding using cypres to centralize within same framework

--------------------------------------------------
REQUIREMENTS
--------------------------------------------------
- Node.js 
- npm
- Windows operating system
- Chrome or any other web browser

--------------------------------------------------
INSTALLATION
--------------------------------------------------
1. Clone the repository from GitHub
2. Navigate to the root directory of the project
3. Install dependencies:

   npm install

--------------------------------------------------
PROJECT STRUCTURE
--------------------------------------------------
cypress/
 ├─ e2e/
 │   ├─ api/
 │   │   └─ test_authtorization.cy.js
 │   └─ webs/
 │       └─ shopping_car.cy.js
 ├─ fixtures/
 ├─ reports/
 └─ support/
cypress.config.js
package.json

--------------------------------------------------
TEST EXECUTION
--------------------------------------------------
Run tests in interactive mode:

   npx cypress open

Run tests in headless mode:

   npx cypress run

--------------------------------------------------
API TESTING
--------------------------------------------------
API Endpoints validated:
- https://api.demoblaze.com/Signup
- https://api.demoblaze.com/Login


Validation were performed base on API response message, 
and also status code 
--------------------------------------------------
E2E TESTING
--------------------------------------------------
A complete purchase flow was automated, covering:
- select two products 
- Adding those products to the shopping cart
- Check items added on cart 
- Completing the purchase form
- Final purchase confirmation
