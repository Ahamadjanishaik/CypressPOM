///<reference types="cypress"/> 
describe('', () => {
    it('', () => {
        cy.visit("https://demo.openmrs.org/openmrs/login.htm")
        cy.get('input[placeholder="Enter your username"]').type('admin')
        cy.get('input[placeholder="Enter your password"]').type('Admin123')
        cy.contains('Inpatient Ward').click(); // Inpatient Ward login
        cy.get('input[value="Log In"]').click()
        cy.get('a[href="/openmrs/appui/header/logout.action?successUrl=openmrs"]').click()

    });
    it('', () => {
        cy.visit("https://demo.openmrs.org/openmrs/login.htm")
        cy.get('input[placeholder="Enter your username"]').type('admin')
        cy.get('input[placeholder="Enter your password"]').type('Admin123')
        cy.contains('Isolation Ward').click();  // Isolation ward login
        cy.get('.btn').click()
    });
    it('', () => {
        cy.visit("https://demo.openmrs.org/openmrs/login.htm")
        cy.get('input[placeholder="Enter your username"]').type('admin')
        cy.get('input[placeholder="Enter your password"]').type('Admin123')
        cy.contains('Laboratory').click(); 
        cy.get('.btn').click()
        
    });
    it('', () => {
        cy.visit("https://demo.openmrs.org/openmrs/login.htm")
        cy.get('input[placeholder="Enter your username"]').type('admin')
        cy.get('input[placeholder="Enter your password"]').type('Admin123')
        cy.contains('Outpatient Clinic').click(); 
        cy.get('.btn').click()
    });
    it('', () => {
        cy.visit("https://demo.openmrs.org/openmrs/login.htm")
        cy.get('input[placeholder="Enter your username"]').type('admin')
        cy.get('input[placeholder="Enter your password"]').type('Admin123')
        cy.contains('Pharmacy').click(); 
        cy.get('.btn').click()
    });
    it('', () => {
        cy.visit("https://demo.openmrs.org/openmrs/login.htm")
        cy.get('input[placeholder="Enter your username"]').type('admin')
        cy.get('input[placeholder="Enter your password"]').type('Admin123')
        cy.contains('Registration Desk').click(); 
        cy.get('.btn').click()
    });
});