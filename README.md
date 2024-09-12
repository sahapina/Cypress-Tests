# Cypress-Tests

# Cypress Test Execution Guide

This guide will help you set up and execute Cypress tests for your web application.

## Steps to Set Up and Run Cypress Tests

### 1. **Create a New JavaScript Project in Your IDE**
   - Initialize a new project or use an existing project in your preferred IDE.
   
### 2. **Install Cypress**
   - In your project directory, open a terminal and run the following command:
     ```
     npm install cypress --save-dev
     ```
   - This will install Cypress as a development dependency.

### 3. **Open Cypress**
   - After installation, open Cypress by running:
     ```
     npx cypress open
     ```
   - A Cypress window will open. Choose "E2E Testing" and select your browser of choice.

### 4. **Create a New Spec File**
   - Inside the Cypress folder (`cypress/e2e`), create a new spec file called `login.cy.js`.
  

### 5. **Replace Selectors and Input Data**
   - In the test code, ensure you replace the selectors (`id`, `class`, etc.) with the correct ones for your web app.
   - Use valid username and password data for the login.

### 6. **Execute the Test**
   - To run the test in the terminal (without opening the Cypress UI), run:
     ```
     npx cypress run .\cypress\e2e\login.cy.js
     ```
   - This command will execute the `login.cy.js` test in headless mode.

### 7. **View Test Results**
   - Upon running the tests, the results will be shown in the terminal.
