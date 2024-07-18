///<reference types="cypress"/>
describe('Dynamic Dropdown', () => {
    it.only('', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('.ui-autocomplete-input').type('in')
        cy.get('.ui-menu-item').each(($country)=>{
            if($country.text()=='Finland'){
                cy.wrap($country).click()
            }
        })
    });
    it('', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('.ui-autocomplete-input').type('A')
        cy.get('.ui-menu-item').contains('America').click()
    });
});