///<reference types="cypress"/>
describe('date picker', () => {
    it('date1', () => {
        cy.visit('https://jqueryui.com/datepicker/')

        cy.frameLoaded('.demo-frame');
        cy.iframe().xpath('//input[@id="datepicker"]').type('08/03/2001{enter}')
    });
});