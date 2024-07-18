///<reference types="cypress"/>
describe('Bigbasket', () => {
    it('test1', () => {
        cy.visit("https://www.bigbasket.com/")
        cy.xpath('//*[contains(text(),"Login/ Sign Up")]')  // Login/Signup 
        cy.xpath('(//*[contains(text(),"Select Location")])[1]') // Select Location
        cy.xpath('//*[contains(text(),"Contact Us")]')  // Contact us button
        cy.xpath('//*[contains(text(),"Help")]') // Help 
        cy.xpath('//*[contains(text(),"FAQs")]') // FAQ
    });
});