///<reference types="cypress"/> 
describe('', () => {
    it('', () => {
        cy.visit("https://www.letskodeit.com/practice")
        cy.title().should('include','Practice Page')
        cy.get('#bmwradio').check() // checking radio buttons
        cy.get('#benzradio').check()
        cy.get('#hondaradio').check()
       // Testing the checkbox option
        cy.get('#bmwcheck').check()
        cy.get('#benzcheck').check()
        cy.get('#hondacheck').check()

        // Uncheck all options
        cy.get('input[type="checkbox"]').uncheck({force:true});

    });
});