//Configure Cypress in your project using the provided configuration.
//Write a basic test to verify the title of https://Google.com.
//Execute the test runner in Chrome, Firefox, and Edge.
//Provide screenshots or logs of the test results for each browser.

///<reference types="cypress"/>

describe('Google title validate', () => {
    it('test1', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
    });
});