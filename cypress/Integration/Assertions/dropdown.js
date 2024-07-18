///<reference types="cypress"/>
describe('', () => {
    it('', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')  //option 2
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')  // option 1
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')  // option 3
        cy.get('#dropdown-class-example').select('Select').should('have.value','')          // select 

    });
    it('Select by using index', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#dropdown-class-example').select(1).should('have.value','option1')  //option 2
    });
    it('All boxes check at once', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.xpath('//label/input[@type="checkbox"]').check().should('be.checked')
        cy.wait(2000)
        cy.xpath('//label/input[@type="checkbox"]').uncheck().should('not.be.checked')
    });
});