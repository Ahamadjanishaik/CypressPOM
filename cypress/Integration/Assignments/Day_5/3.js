///<reference types="cypress"/>
describe('Herokuapp Window ', () => {
    it('', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('a[href="/windows/new"]').invoke('removeAttr','target').click()
        
    });
});