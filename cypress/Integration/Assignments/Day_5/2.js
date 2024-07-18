///<reference types="cypress"/>
describe('Herokuapp Table values', () => {
    it('', () => {
        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.log(cy.xpath('//table[1]/tbody/tr[4]/td[3]'));   // 4th row & 3th colum value in 1st table
    });
    it('', () => {
        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.log(cy.xpath('//table[2]/tbody/tr[2]/td[5]'));   // 2nd row and last value in 2nd table
    });
});