///<reference types="cypress"/>
describe('', () => {
    it('frame test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // Step -1 Load the frame using the locator
        cy.frameLoaded('#courses-iframe');

        cy.iframe().contains('Blog').click();
        

    });
});