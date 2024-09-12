
# Cypress Test Execution Guide

This guide will help you set up and execute Cypress tests for your web application.

## Steps to Set Up and Run Cypress Tests

### 1. **Clone the Project**
   
### 2. **Install Cypress**
   - In your project directory, open a terminal and run the following command:
     ```
     npm install
     ```
   - This will install Cypress as a development dependency.
  
### 3. **Replace Selectors and Input Data**
   - In the test code, ensure you replace the selectors (`id`, `class`, etc.) with the correct ones for your web app.
   - Use valid username and password data for the login.

### 4. **Execute the Test**
   - To run the test in the terminal (without opening the Cypress UI), run:
     ```
     npx cypress run .\cypress\e2e\login.cy.js
     ```
   - This command will execute the `login.cy.js` test in headless mode.

### 5. **View Test Results**
   - Upon running the tests, the results will be shown in the terminal.
