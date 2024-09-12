describe('Login Test', () => {
  it('should log in with valid data', () => {
    // Visit the login page
    cy.visit('https://your-site.com/login');

    // Input valid data
    cy.get('#username')
        .should('be.visible')
        .and('not.be.disabled')
        .type('Username');  // Replace with actual username

    cy.get('#password')
        .should('be.visible')
        .and('not.be.disabled')
        .type('Password');  // Replace with actual password

    // Click the login button
    cy.get('button[type="submit"]')
        .should('be.visible')
        .and('not.be.disabled')
        .click();

    // Assert that the user is redirected to the dashboard
    cy.url().should('include', '/dashboard');

    // Check vehicle list is visible
    cy.get('.vehicle-list').should('exist').and('be.visible');
  });
});
