///<reference types="cypress"/>
describe('Herokuapp', () => {
    it('Hello World Tests', () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
        cy.xpath('//button[.="Start"]').click()
        cy.wait(4000)
    });
});