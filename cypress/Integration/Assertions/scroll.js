///<reference types="cypress"/>
describe('Scroll', () => {
    it('Google ', () => {
        cy.visit("https://www.google.com/")
        //type masai in search & enter 
        cy.get('[title="Search"]').type('Masai{enter}')
        cy.scrollTo(0,1000)  // parameters (x,y ) x is horizontal y is vertical
        //cy.scrollTo('bottom') //
        cy.contains('Maasai people').scrollIntoView().wait(3000).click()
    });
});