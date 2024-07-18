///<reference types="cypress"/>
describe('', () => {
    it('', () => {
        cy.visit("https://the-internet.herokuapp.com/")
        cy.title().should('include','The Internet')
    });
});