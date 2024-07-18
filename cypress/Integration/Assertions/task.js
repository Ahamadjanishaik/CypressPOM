///<reference types="cypress"/>
describe('', () => {
    it('', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        cy.get('label[for="ContactUsFrm_first_name"]').type("Abcd")
        cy.get('label[for="ContactUsFrm_email"]').type("abcd@gmail.com")
        cy.get('label[for="ContactUsFrm_enquiry"]').type("When my phone will be repaired");
        cy.get('button[title="Submit"]').click()
        cy.xpath("//p[contains(text(),'Your enquiry has been successfully sent to the store owner!')]").should('include.text','Your enquiry has been successfully sent to the store owner!');
    });
});