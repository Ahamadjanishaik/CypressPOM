///<reference types="cypress"/>
describe('Radio BUtton', () => {
    it('', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.xpath('(//input[@class="radioButton"])[1]').check().should('be.checked').and('be.checked').and('have.attr','type','radio')
        cy.xpath('(//input[@class="radioButton"])[2]').check().should('be.checked').and('be.checked').and('have.attr','type','radio')
        cy.xpath('(//input[@class="radioButton"])[3]').check().should('be.checked').and('be.checked').and('have.attr','type','radio').and('have.value','radio3')
    });
});