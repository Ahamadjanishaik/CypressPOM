///<reference types="cypress"/>
describe('Amazon test', () => {
    it('', () => {
        cy.visit("https://www.amazon.com/")
        cy.xpath('(//a[@class="nav-a  "])[1]')  // Today's deals
        cy.xpath('(//a[@data-csa-c-type="link"])[1]') // Customer's service
        cy.xpath('//a[@class="nav-a  "][3]') // registry
        cy.xpath('(//span[@class="nav-line-2"])[2]') // returns & orders
        cy.xpath('//span[@aria-hidden="true"][1]') // Cart button
    });
});