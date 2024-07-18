///<reference types="cypress"/> 
describe('', () => {
    it('test1', () => {
        //cy.visit("https://the-internet.herokuapp.com/")
        //cy.title().should('include','The Internet') //assert title 
    });
    it('test2', () => {
                //2. assert that a hidden element with the ID #finish is not visible before clicking the start button.
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
        cy.get('#finish').should('not.be.visible')
    });
    it('test3', () => {
        cy.visit("https://automationpractice.com/index.php")
        cy.get('a[href="https://www.inmotionhosting.com"]').find('img[src="https://design.inmotionhosting.com/assets/logos/corporate/logo-imh.svg"]').click()
    });
    it.only('test4', () => {
        cy.visit('https://www.google.com/')
        cy.get('textarea[aria-label="Search"]').type('Masai{enter}').should('have.text','Masai')
    });
});